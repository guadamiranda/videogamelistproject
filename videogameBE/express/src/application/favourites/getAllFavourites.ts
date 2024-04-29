import { getFavouritesByListType } from '../../infraestructure/repository/favourites'

export const getUserFavouritesByList = async(userId:number, listType:string) => {
    return await getFavouritesByListType(userId, listType)
}