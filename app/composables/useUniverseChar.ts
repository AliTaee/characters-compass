import { getEldenRingBossChar } from '~/domain/elden-ring/api-char'
import { getPokemonChar } from '~/domain/pokemon/api-char'
import { getRickAndMortyChar } from '~/domain/rick-and-morty/api-char'
import type { CharId, Universe } from '~/types'
import type { DataTransformer } from '~/types/data-transformer'

export async function useUniverseChar(universe: Universe, charId: CharId) {
  let charDetails: DataTransformer | null = null
  let errorTitle = ''

  try {
    switch (universe) {
      case 'rick-and-morty':
        charDetails = await getRickAndMortyChar(charId)
        break
      case 'pokemon':
        charDetails = await getPokemonChar(charId)
        break
      case 'elden-ring':
        charDetails = await getEldenRingBossChar(charId)
        break
    }
  }
  catch (error) {
    const errorMessage = 'Failed to fetch char'
    console.error(`${errorMessage}:`, error)
    errorTitle = errorMessage
  }

  return { charDetails, errorTitle }
}
