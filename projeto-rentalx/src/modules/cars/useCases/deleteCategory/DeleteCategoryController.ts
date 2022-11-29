import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

export class DeleteCategoryController{
    async handle(req: Request, res: Response){
        const {name} = req.body 
        const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase)
        try{
            await deleteCategoryUseCase.execute(name)
            return res.status(200).json({message: 'Categoria deletada'})
        }catch(error){
            console.log(error)
            return res.status(200).json({message: 'Não foi possivel deletar'})
        }

    }
}