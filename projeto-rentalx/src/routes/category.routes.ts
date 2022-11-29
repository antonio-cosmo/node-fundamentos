import { ListCategoriesController } from './../modules/cars/useCases/listCategory/ListCategoriesController';
import { CreateCategoryController } from './../modules/cars/useCases/createCategory/CreateCategoryController';
import {Router} from 'express'
import multer from 'multer'
import { ImportyCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { DeleteCategoryController } from '../modules/cars/useCases/deleteCategory/DeleteCategoryController';

const categoryRoutes = Router()

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportyCategoryController()
const deleteCategoryController = new DeleteCategoryController()
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './tmp/uploads')
//   },
//   filename: function (req, file, cb) {
//     const extension = file.originalname.split('.')[1]
//     const newFileName = new Date().getTime().toString()
//     cb(null, `${newFileName}.${extension}`)
//   }
// })


// const upload = multer({storage})
const upload = multer({dest: '/tmp/uploads'})

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.get('/', listCategoriesController.handle)
categoryRoutes.delete('/', deleteCategoryController.handle)
categoryRoutes.post('/import',upload.single('file'),importCategoryController.handle)

export { categoryRoutes }