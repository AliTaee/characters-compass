import type {DataTransformer} from '~/types/data-transformer'

const PokemonDataTransformer = (rowDataList:any): DataTransformer[] => {
    return rowDataList?.map((data:any) => {
        const id = data.url.split('/').filter(Boolean).pop()
        const { name } = data
        return {
            id,
            name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            url: `/pokemon/${name}`,
        }
    })
}

const RickAndMortyDataTransformer = (rowDataList:any): DataTransformer[] => {
    return rowDataList?.map((data:any) => {
        const { name, image, id } = data
        return {
            id,
            name,
            image,
            url: `/rick-and-morty/${id}`,
        }
    })
}

export { RickAndMortyDataTransformer, PokemonDataTransformer }