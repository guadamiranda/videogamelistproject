
export type platformInsidePlatform = {
    name: string
}

export type responsePlatform = {
    platform: platformInsidePlatform
}

export type responseGenere = {
    name: string
}

export type responseTag = {
    name: string
}

export type dtoGame = {
    id: number,
    name: string,
    released: string,
    background_image: string,
    platforms: responsePlatform[],
    genres: responseGenere[],
    tags: responseTag[],
    rating: number,
    playtime: number,
    metacritic: number
}

export interface responseGame {
    results: dtoGame[]
}