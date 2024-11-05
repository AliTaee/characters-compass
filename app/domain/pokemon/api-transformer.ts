import type { DataTransformer } from '~/types/data-transformer'

const getPokemonImage = (id: string) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

const PokemonCharTransformer = (rowChar: any): DataTransformer => {
    const { id, name, weight, height } = rowChar
    const types = rowChar.types.map((type: any) => type.type.name).join(', ')
    const abilities = rowChar.abilities.map((ability: any) => ability.ability.name).join(', ')
    return {
        id,
        name,
        url: "/pokemon",
        image: getPokemonImage(id),
        attributes: [{weight}, {height}, {types}, {abilities} ]
    }
}

const PokemonDataTransformer = (rowDataList: any): DataTransformer[] => {
    return rowDataList?.map((data: any) => {
        const id = data.url.split('/').filter(Boolean).pop()
        const { name } = data
        return {
            id,
            name,
            url: `/pokemon/${name}`,
            image: getPokemonImage(id),
        }
    })
}

export { PokemonDataTransformer, PokemonCharTransformer }