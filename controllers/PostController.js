import Post from "../Models/Post.js"
import PostService from "../services/PostService.js"

class PostController {

    async create(req, res) {
        try {

            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {

            const { id } = req.params
            const post = await PostService.getOne(id)
            return res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async updatePost(req, res) {
        try {
            const post = await req
            const updatedPost = await PostService.updatePost(post)
            return res.json(updatedPost)

        } catch (e) {
            res.status(500).json(e)
        }
    }

    async deletePost(req, res) {
        try {

            const { id } = req.params
            const post = await PostService.deletePost(id)
            return res.json(post)

        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()