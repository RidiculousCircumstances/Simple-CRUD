import Post from "../Models/Post.js";
import fileService from "./fileService.js";

class PostService {

    async create(post, picture) {
        const fileName = fileService.saveFile(picture)
        const createdPost = await Post.create({ ...post, picture: fileName })
        return createdPost
    }

    async getAll() {
        const posts = await Post.find();
        return posts

    }

    async getOne(id) {
        if (!id) {
            throw new Error('Id is not defined')
        }

        const post = await Post.findById(id)
        return post
    }

    async updatePost(post) {

        const body = post.body

        if (!body._id) {
            throw new Error('Id is not defined')
        }

        const oldPost = await Post.findById(body._id)
        const oldPictureName = oldPost.picture


        if (!post.files) {
            const updatedPost = await Post.findByIdAndUpdate(body._id, { ...body, picture: oldPictureName }, { new: true })
            return updatedPost
        } else {

            fileService.deleteFile(oldPictureName)
            const newPictureName = fileService.saveFile(post.files.picture)

            const updatedPost = await Post.findByIdAndUpdate(body._id, { ...body, picture: newPictureName }, { new: true })
            return updatedPost
        }

    }

    async deletePost(id) {
        if (!id) {
            throw new Error('Id is not defined')
        }
        const post = await Post.findById(id)
        const fileName = post.picture
        fileService.deleteFile(fileName)
        const deletedPost = await Post.findByIdAndDelete(id)
        return deletedPost

    }
}

export default new PostService()