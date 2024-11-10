import { RickAndMortyDataTransformer } from './api-transformer'

export async function getRickAndMortyCharList(page: number) {
  // unfortunately, the Rick and Morty API doesn't support limit
  const response = await $rickAndMorty(`character?page=${page}`) as any
  const totalItems = response?.info.count
  const carList = RickAndMortyDataTransformer(response?.results || [])
  return { carList, title: 'Rick and Morty', total: totalItems }
}
