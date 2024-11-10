import { charactersPerPage } from '~/constants'
import { EldenRingDataTransformer } from './api-transformer'

export async function getEldenRingBossCharList(page: number) {
  // Elden-ring API page number starts from 0
  const response = await $eldenRing(`bosses?page=${page - 1}&limit=${charactersPerPage}`) as any
  const totalItems = response?.total
  const carList = EldenRingDataTransformer(response?.data || [])
  return { carList, title: 'Elden Ring Bosses', total: totalItems }
}
