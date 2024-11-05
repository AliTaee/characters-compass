import type { DataTransformer } from '~/types/data-transformer'

const PokemonCharTransformer = (rowChar: any): DataTransformer => {
    const { id, name } = rowChar
    return {
        id,
        name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        url: "/pokemon",
    }
}

const PokemonDataTransformer = (rowDataList: any): DataTransformer[] => {
    return rowDataList?.map((data: any) => {
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

export { PokemonDataTransformer, PokemonCharTransformer }