import * as uuid from 'uuid'
import * as path from 'path'
import * as fs from 'fs/promises'

class FileService {

    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve('static', fileName)
            file.mv(filePath)
            return fileName
        } catch (e) {
            console.log(e)
        }

    }

    async deleteFile(fileName) {
        try {
            const filePath = path.resolve('static', fileName)

            await fs.unlink(filePath)
        } catch (e) { console.log(e) }
    }
}

export default new FileService()