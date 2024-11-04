import type {DataTransformer} from '~/types/data-transformer'

const RickAndMortyDataTransformer = (rowDataList:any): DataTransformer[] => {
    return rowDataList?.map((data:any) => {
        return {
            id: data.id,
            name: data.name,
            image: data.image,
            url: data.url,
        }
    })
}

export { RickAndMortyDataTransformer }