import { createfavoriteFromDB } from "../../infraestructure/repository/favourites";
import { favoriteModel } from "../../domain/models/favourite";

export const createfavorite = async(favorite:favoriteModel):Promise<favoriteModel> => {
    return await createfavoriteFromDB(favorite)
}