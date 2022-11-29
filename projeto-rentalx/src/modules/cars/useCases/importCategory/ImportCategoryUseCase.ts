import fs from "fs";
import { parse }from "csv-parse";
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { EventListenerTypes } from "typeorm/metadata/types/EventListenerTypes";


interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {
    constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoriesRepository) {} 
     
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
        
            const parseFile = parse({delimiter:',', from_line: 2});
            
            stream.pipe(parseFile)
            parseFile.on("data", async (line) => {
                const [ name, description] = line;
                console.log(line)
                categories.push({ name, description }); 
            }).on('error', (erro) =>{
                reject(erro)
            }).on('end', () =>{
                console.log('chegando no end')
                resolve(categories)
            });

        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (category) => {
            const { name, description } = category; 
            const existCategory = await this.categoriesRepository.findByName(name);
            if(!existCategory) {
                await this.categoriesRepository.create({ name, description });
            }
        });
    }
}; 

export { ImportCategoryUseCase };