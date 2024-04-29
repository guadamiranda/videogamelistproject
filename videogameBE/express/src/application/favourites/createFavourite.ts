import { createFavouriteFromDB } from "../../infraestructure/repository/favourites";
import { favouriteModel } from "../../domain/models/favourite";

export const createFavourite = async(favourite:favouriteModel) => {
    return await createFavouriteFromDB(favourite)
}