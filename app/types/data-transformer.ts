type CharAttributes = {[key: string]: string | number}[]

interface DataTransformer {
    id: number | string,
    name: string,
    image: string,
    url: string,
    attributes?: CharAttributes
}

export type { DataTransformer, CharAttributes }