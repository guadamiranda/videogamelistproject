import { getUserfavoritesByList } from '../../../application/favorites/getAllfavorites';
import { createfavorite } from '../../../application/favorites/createfavorite';
import { favoriteModel } from '../../../domain/models/favorite';
import express from 'express'

const router = express.Router();

router.get('/:idUser', (req, res) => {
    const userId = req.params.idUser
    const listType = req.body.listType

    const userfavoritesByList = getUserfavoritesByList(userId, listType)
    res.send(userfavoritesByList)
})

router.post('/', (req, res) => {
    const favorite: favoriteModel = {
        userId: req.body.userId,
        gameId: req.body.gameId,
        state: req.body.state,
        note: req.body.note,
        comment: req.body.comment
    }

    const createNewfavorite = createfavorite(favorite)
    res.send(createNewfavorite)
})

export default router