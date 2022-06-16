import express from 'express'
const app = express()
import config from 'config'
import mongoose from 'mongoose'
const PORT = config.get('port')
import postRouter from './routes/post.router.js'
import fileUpload from 'express-fileupload'

app.use(express.json({extended: true}))
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', postRouter)


async function start() {
    try{
        await mongoose.connect(config.mongoUri)
        app.listen(PORT, () => console.log(`Server has been started at ${PORT}`))
    }catch(e){
        console.log(e)
    }
    
   
}

start()