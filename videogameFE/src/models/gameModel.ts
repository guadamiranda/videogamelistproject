import { genereModel } from "./genereModel";
import { platformModel } from "./platformModel";
import { tagModel } from "./tagModel";

export interface gameModel {
    id: number,
    name: string,
    released: string,
    image: string,
    platforms: platformModel[],
    generes: genereModel[],
    tags: tagModel[],
    rating: number,
    playtime: number,
    metacritic: number,
}