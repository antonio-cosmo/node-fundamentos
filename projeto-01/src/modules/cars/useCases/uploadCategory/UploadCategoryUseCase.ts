

export class UploadCategoryUseCase{
    execute(file: Express.Multer.File){
        console.log(file.path)
    }
}