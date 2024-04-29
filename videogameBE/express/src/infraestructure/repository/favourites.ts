import model from '../repository/models/favorites'
import { favouriteModel } from '../../domain/models/favourite'

const getFavouritesByListType = async(userId:string, listType:string):Promise<favouriteModel[]> => {
    return await model.find({ $and: [{ userId: userId }, { state: listType }] })
}

const createFavouriteFromDB = async(favorite: favouriteModel):Promise<favouriteModel> => {
    
}

export { getFavouritesByListType, createFavouriteFromDB }