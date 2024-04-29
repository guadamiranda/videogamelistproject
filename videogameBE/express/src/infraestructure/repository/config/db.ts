import mongoose from 'mongoose'

const DB_URI = `mongodb://localhost:27017/appListadosJuegos`


export default () => {
        mongoose.connect(
            DB_URI
        ).then(() => {
            console.log("Database is conected :)")
        }).catch((err) => {
            console.log("DB: ERROR!", err)
        })
    }

