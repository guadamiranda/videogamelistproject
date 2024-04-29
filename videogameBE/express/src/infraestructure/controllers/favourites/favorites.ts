import express from 'express'

const router = express.Router();

router.get('/:idUser', (req, res) => {
    const userId = req.params.idUser
    const listType = req.body.listType

    const userFavouritesByList = getUserFavouritesByList(userId, listType)
    res.send(userFavouritesByList)
})