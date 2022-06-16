import { Router } from "express";
import PostController from "../controllers/PostController.js";
const router = new Router()

router.post('/post', PostController.create)
router.get('/post', PostController.getAll)
router.get('/post/:id', PostController.getOne)
router.put('/post', PostController.updatePost)
router.delete('/post/:id', PostController.deletePost)

export default router