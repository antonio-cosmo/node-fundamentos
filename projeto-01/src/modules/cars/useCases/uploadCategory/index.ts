import { UploadCategoryController } from "./UploadCategoryController";
import { UploadCategoryUseCase } from "./UploadCategoryUseCase";

const uploadCategoryUseCase = new UploadCategoryUseCase()
const uploadCategoryController = new UploadCategoryController(uploadCategoryUseCase)

export {uploadCategoryController}