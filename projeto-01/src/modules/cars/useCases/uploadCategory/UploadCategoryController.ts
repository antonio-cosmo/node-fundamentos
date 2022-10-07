import { Request, Response } from "express";
import { UploadCategoryUseCase } from "./UploadCategoryUseCase";

export class UploadCategoryController{
    constructor(private uploadCategoryUseCase: UploadCategoryUseCase){}
    handle(request: Request, response: Response){
        const {file} = request
        this.uploadCategoryUseCase.execute(file)

        return response.status(201).send()
    }
}