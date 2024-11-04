import type {DataTransformer} from '~/types/data-transformer'

const PokemonDataTransformer = (rowDataList:any): DataTransformer[] => {
    return rowDataList?.map((data:any) => {
        const id = data.url.split('/').filter(Boolean).pop()
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` 
        return {
            id,
            name: data.name,
            image,
            url: data.url,
        }
    })
}

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

export { RickAndMortyDataTransformer, PokemonDataTransformer }