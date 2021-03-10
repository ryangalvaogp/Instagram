import express from 'express'
import Route from './routes'
import mongoose from 'mongoose'
import path from 'path'
import cors from 'cors'

const app = express()

const server = require('http').Server(app)
const io =  require('socket.io')(server)

interface reqIo{
    io:any
}


mongoose.connect('mongodb+srv://ryan:13696312@cluster0.kdlne.mongodb.net/Cluster0?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
})


app.use((req:reqIo['io'], res, next)=>{
    req.io = io

    next();
})


app.use(cors())

app.use(express.json())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))

app.use(Route)


server.listen(3333)