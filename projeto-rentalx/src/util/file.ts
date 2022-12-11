import {stat, unlink} from 'fs/promises';

export async function deleteFile(filePath: string){
    try{
        await stat(filePath);
    }catch{
        return
    }
    
    await unlink(filePath);
    
}