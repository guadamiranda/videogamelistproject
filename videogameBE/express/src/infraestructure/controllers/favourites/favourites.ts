import { getUserFavouritesByList } from '../../../application/favourites/getAllFavourites';
import { createFavourite } from '../../../application/favourites/createFavourite';
import { favouriteModel } from '../../../domain/models/favourite';
import express from 'express'

const router = express.Router();

router.get('/:idUser', (req, res) => {
    const userId = req.params.idUser
    const listType = req.body.listType

    const userFavouritesByList = getUserFavouritesByList(userId, listType)
    res.send(userFavouritesByList)
})

router.post('/', (req, res) => {
    const favourite: favouriteModel = {
        userId: req.body.userId,
        gameId: req.body.gameId,
        state: req.body.state,
        note: req.body.note,
        comment: req.body.comment
    }

    const createNewFavourite = createFavourite(favourite)
    res.send(createNewFavourite)
})
export default router