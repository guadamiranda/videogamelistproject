import { getFavouritesByListType } from '../../infraestructure/repository/favourites'

export const getUserFavouritesByList = async(userId:string, listType:string) => {
    return await getFavouritesByListType(userId, listType)
}