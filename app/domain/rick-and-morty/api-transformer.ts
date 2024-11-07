import type { DataTransformer } from '~/types/data-transformer'

function RickAndMortyDataTransformer(rowDataList: any): DataTransformer[] {
  return rowDataList?.map((data: any) => {
    const { name, image, id } = data
    return {
      id,
      name,
      image,
      url: `/rick-and-morty/${id}`,
    }
  })
}

function RickAndMortyCharTransformer(rowChar: any): DataTransformer {
  const { name, image, id, status, species, gender } = rowChar
  return {
    id,
    name,
    image,
    url: '/rick-and-morty',
    attributes: [{ status }, { species }, { gender }],
  }
}

export { RickAndMortyCharTransformer, RickAndMortyDataTransformer }
