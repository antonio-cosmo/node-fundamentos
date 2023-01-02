import {Router} from 'express'
import multer from 'multer'
import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController'
import { DeleteCategoryController } from '@modules/cars/useCases/deleteCategory/DeleteCategoryController'
import { ImportyCategoryController } from '@modules/cars/useCases/importCategory/ImportCategoryController'
import { ListCategoriesController } from '@modules/cars/useCases/listCategory/ListCategoriesController'
import configUpload from '../../../../config/upload'
const categoryRoutes = Router()

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const importCategoryController = new ImportyCategoryController()
const deleteCategoryController = new DeleteCategoryController()


const uploadCategory = multer(configUpload.upload('categories'))

categoryRoutes.post('/', createCategoryController.handle)
categoryRoutes.get('/', listCategoriesController.handle)
categoryRoutes.delete('/', deleteCategoryController.handle)
categoryRoutes.post('/import',uploadCategory.single('file'),importCategoryController.handle)

export { categoryRoutes }