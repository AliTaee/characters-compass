import type { CharId } from '~/types'
import { RickAndMortyCharTransformer } from './api-transformer'

export async function getRickAndMortyChar(charId: CharId) {
  const { data } = await useRickAndMortyData(`character/${charId}`)
  const response = await data?.value
  return RickAndMortyCharTransformer(response)
}
