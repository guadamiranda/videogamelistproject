import model from '../repository/models/favorites'
import { favoriteModel } from '../../domain/models/favorite'

const buildfavoriteModel = (favoriteCreated: any): favoriteModel => {
    return {
        userId: favoriteCreated.userId,
        gameId: favoriteCreated.gameId,
        state: favoriteCreated.state,
        note: favoriteCreated.note,
        comment: favoriteCreated.comment
    } as favoriteModel;
  };

const getfavoritesByListType = async(userId:string, listType:string):Promise<favoriteModel[]> => {
    const listFromDB = await model.find({ $and: [{ userId: userId }, { state: listType }] })
    return listFromDB.map(favorite => buildfavoriteModel(favorite))
}

const createfavoriteFromDB = async(favorite: favoriteModel):Promise<favoriteModel> => {
    const favoriteCreated = await model.create(
        {
            userId: favorite.userId,
            gameId: favorite.gameId,
            state: favorite.state,
            note: favorite.note,
            comment: favorite.comment
          });

    return buildfavoriteModel(favoriteCreated);
}

export { getfavoritesByListType, createfavoriteFromDB }