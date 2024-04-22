const mongoose = require('mongoose')

const DB_URI = `mongodb://localhost:27017/appListadosJuegos`

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI
        ).then(() => {
            console.log("Database is conected :)")
        }).catch((err) => {
            console.log("DB: ERROR!", err)
        })
    }

    connect()
}