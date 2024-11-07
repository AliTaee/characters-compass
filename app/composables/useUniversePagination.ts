import { PokemonDataTransformer } from '~/domain/pokemon/api-transformer'
import { RickAndMortyDataTransformer } from '~/domain/rick-and-morty/api-transformer'
import type { Universe } from '~/types'
import type { DataTransformer } from '~/types/data-transformer'

export async function useUniversePagination(universe: Universe) {
  const charList = ref<DataTransformer[]>([])
  const universeTitle = ref('')
  const currentPage = ref(1)
  const totalItems = ref(0)

  async function fetchData(page: number = 1) {
    try {
      if (universe === 'rick-and-morty') {
        universeTitle.value = 'Rick and Morty'
        const { data } = await useRickAndMortyData(`character?page=${page}`)
        totalItems.value = data?.value?.info.count
        charList.value = RickAndMortyDataTransformer(data?.value?.results || [])
      }
      else if (universe === 'pokemon') {
        universeTitle.value = 'Pokemon'
        const offset = (page - 1) * 20
        const { data } = await usePokemonData(`pokemon?offset=${offset}&limit=20`)
        totalItems.value = data?.value?.count
        charList.value = PokemonDataTransformer(data?.value?.results || [])
      }
      else {
        universeTitle.value = 'Unknown Universe'
        charList.value = []
        totalItems.value = 0
      }
    }
    catch (error) {
      console.error('Failed to fetch data:', error)
      charList.value = []
    }
  }

  watch(currentPage, (newPage) => {
    fetchData(newPage)
  })

  await fetchData()

  return {
    charList,
    currentPage,
    universeTitle,
    totalItems,
  }
}
