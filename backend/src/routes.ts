import express from 'express'
import multer from 'multer'
import uploadConfig from './config/uploadConfig'
import Likecontrollers from './controllers/Likecontrollers'
import PostControllers from './controllers/Postcontrollers'

const Route = express.Router()

const upload = multer(uploadConfig)

Route.get('/posts', PostControllers.Index)
Route.post('/posts', upload.single('image') , PostControllers.Store)

Route.post('/posts/:id/like', Likecontrollers.Store)
Route.post('/posts/:id/deslike', Likecontrollers.offStore)




export default Route;