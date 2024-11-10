import type { CharId } from '~/types'
import { EldenRingCharTransformer } from './api-transformer'

export async function getEldenRingBossChar(charId: CharId) {
  const { data } = await useEldenRingData(`bosses/${charId}`) as any
  const response = await data?.value
  return EldenRingCharTransformer(response?.data)
}
