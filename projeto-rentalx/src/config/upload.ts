import multer from "multer"
import { resolve } from 'path'
import {randomBytes} from 'crypto'
export default {
    upload(folder: string){

        return {
            storage: multer.diskStorage({
                        destination: resolve(__dirname, '..','..','files',folder),
                        filename: function (req, file, cb) {
                            const fileHash = randomBytes(16).toString('hex')
                            const extension = file.originalname.split('.')[1]
                            const fileName = `${fileHash}.${extension}`
                            
                            return cb(null,fileName )
                         }
                    })
        }

    }
}
