import Post from '../models/Post';

import Sharp from 'sharp'
import path from 'path'
import fs from 'fs'

import { Request, Response } from 'express'
import { middlewarePostProps } from '../types/Controllers'
import sharp from 'sharp';


export default {
    async Index(req: Request, res: Response) {
        const posts = await Post.find().sort('-createdAt')
        
        return res.json(posts)
    },

    async Store(req: Request, res: Response) {
        const {
            author,
            description,
            hashtags,
            place }
            : middlewarePostProps['req']['body']
            = req.body;

        const {filename:image} = req.file
        const [name] = image.split('.')
        const filename = `${name}.jpg`
        
            await sharp(req.file.path)
            .resize(500)
            .jpeg({quality:70})
            .toFile(
                path.resolve(req.file.destination, 'resized', filename)
            )

            fs.unlinkSync(req.file.path)


        const post = await Post.create({
            author,
            description,
            hashtags,
            place,
            image:filename,

        })

        req.io.emit('post', post)
        return res.json(post)
    }
}