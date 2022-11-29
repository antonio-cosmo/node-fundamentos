import { Request, Response } from "express";
import { container } from "tsyringe";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportyCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        const importyCategoryUseCase = container.resolve(ImportCategoryUseCase);
        await importyCategoryUseCase.execute(file);
        return res.status(201).send('arquivo carregado');
    }
};

export { ImportyCategoryController };