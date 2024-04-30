import { createfavoriteFromDB } from "../../infraestructure/repository/favorites";
import { favoriteModel } from "../../domain/models/favorite";

export const createfavorite = async(favorite:favoriteModel):Promise<favoriteModel> => {
    return await createfavoriteFromDB(favorite)
}