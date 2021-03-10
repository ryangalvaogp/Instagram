
import { Request, Response } from 'express'
import Post from '../models/Post';

export default {
    async Store(req: Request, res: Response) {
        const post = await Post.findById(req.params.id);
        post.likes += 1;
        
        await post.save();
        req.io.emit('post', post)
        return res.json(post)
    },
    async offStore(req: Request, res: Response) {
        const post = await Post.findById(req.params.id);
        post.likes -= 1;
        
        await post.save();

        return res.json(post)
    },
}