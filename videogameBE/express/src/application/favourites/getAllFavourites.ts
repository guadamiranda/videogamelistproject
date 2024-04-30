import { favoriteModel } from '../../domain/models/favorite'
import { getfavoritesByListType } from '../../infraestructure/repository/favorites'


export const getUserfavoritesByList = async(userId:string, listType:string):Promise<favoriteModel[]> => {
    return await getfavoritesByListType(userId, listType)
}