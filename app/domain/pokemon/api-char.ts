import type { CharId } from '~/types'
import { PokemonCharTransformer } from './api-transformer'

export async function getPokemonChar(charId: CharId) {
  const { data } = await usePokemonData(`pokemon/${charId}`)
  const response = await data?.value
  return PokemonCharTransformer(response)
}
