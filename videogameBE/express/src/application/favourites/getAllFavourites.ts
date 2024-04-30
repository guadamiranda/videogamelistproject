import { favoriteModel } from '../../domain/models/favourite'
import { getfavoritesByListType } from '../../infraestructure/repository/favourites'


export const getUserfavoritesByList = async(userId:string, listType:string):Promise<favoriteModel[]> => {
    return await getfavoritesByListType(userId, listType)
}