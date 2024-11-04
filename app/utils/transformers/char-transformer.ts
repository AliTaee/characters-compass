import type {DataTransformer} from '~/types/data-transformer'

const PokemonCharTransformer = (rowChar:any): DataTransformer => {
        const { id, name } = rowChar  
        return {
            id,
            name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            url: "/pokemon",
        }
    
}

const RickAndMortyCharTransformer = (rowChar:any): DataTransformer => {
        const { name, image, id } = rowChar
        return {
            id,
            name,
            image,
            url: "/rick-and-morty",
        }
}

export { RickAndMortyCharTransformer, PokemonCharTransformer }