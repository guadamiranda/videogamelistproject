import model from '../repository/models/favorites'
import { favouriteModel } from '../../domain/models/favourite'

const buildFavouriteModel = (favouriteCreated: any): favouriteModel => {
    return {
        userId: favouriteCreated.userId,
        gameId: favouriteCreated.gameId,
        state: favouriteCreated.state,
        note: favouriteCreated.note,
        comment: favouriteCreated.comment
    } as favouriteModel;
  };

const getFavouritesByListType = async(userId:string, listType:string):Promise<favouriteModel[]> => {
    return await model.find({ $and: [{ userId: userId }, { state: listType }] })
}

const createFavouriteFromDB = async(favorite: favouriteModel):Promise<favouriteModel> => {
    const favouriteCreated = await model.create(
        {
            userId: favorite.userId,
            gameId: favorite.gameId,
            state: favorite.state,
            note: favorite.note,
            comment: favorite.comment
          });

    return buildFavouriteModel(favouriteCreated);
}

export { getFavouritesByListType, createFavouriteFromDB }