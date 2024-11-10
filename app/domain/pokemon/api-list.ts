import { charactersPerPage } from '~/constants'
import { PokemonDataTransformer } from './api-transformer'

export async function getPokemonCharList(page: number) {
  const offset = (page - 1) * charactersPerPage
  const response = await $pokemon(`pokemon?offset=${offset}&limit=${charactersPerPage}`) as any
  const totalItems = response?.count
  const carList = PokemonDataTransformer(response?.results || [])
  return { carList, title: 'Pokemon', total: totalItems }
}
