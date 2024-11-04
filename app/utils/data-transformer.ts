import type {DataTransformer} from '~/types/data-transformer'

const PokemonDataTransformer = (rowDataList:any): DataTransformer[] => {
    return rowDataList?.map((data:any) => {
        const id = data.url.split('/').filter(Boolean).pop()
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` 
        const { name, url } = data
        return {
            id,
            name,
            image,
            url,
        }
    })
}

const RickAndMortyDataTransformer = (rowDataList:any): DataTransformer[] => {
    return rowDataList?.map((data:any) => {
        const { name, image, url, id } = data
        return {
            id,
            name,
            image,
            url,
        }
    })
}

export { RickAndMortyDataTransformer, PokemonDataTransformer }