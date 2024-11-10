import type { DataTransformer } from '~/types/data-transformer'

function EldenRingDataTransformer(rowDataList: any): DataTransformer[] {
  return rowDataList?.map((data: any) => {
    const { name, image, id } = data
    return {
      id,
      name,
      image: image ?? '/images/wallpaper/elden-ring-game-art-boss.jpg',
      url: `/elden-ring/${id}`,
    }
  })
}

function EldenRingCharTransformer(rowChar: any): DataTransformer {
  const { name, image, id, description, location, drops, healthPoints } = rowChar
  return {
    id,
    name,
    image: image ?? '/images/wallpaper/elden-ring-game-art-boss.jpg',
    url: '/elden-ring',
    attributes: [{ description }, { location }, { healthPoints }, { drops: drops.join(', ') }],
  }
}

export { EldenRingCharTransformer, EldenRingDataTransformer }
