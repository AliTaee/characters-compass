import type { DataTransformer } from '~/types/data-transformer'

const RickAndMortyDataTransformer = (rowDataList: any): DataTransformer[] => {
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

const RickAndMortyCharTransformer = (rowChar: any): DataTransformer => {
    const { name, image, id, status, species, gender } = rowChar
    return {
        id,
        name,
        image,
        url: "/rick-and-morty",
        attributes: [{status}, {species}, {gender}]
    }
}

export { RickAndMortyDataTransformer, RickAndMortyCharTransformer }