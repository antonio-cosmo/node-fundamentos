import { SpecificationsRepository } from './../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from './../../modules/cars/repositories/ISpecificationsRepository';
import {container} from 'tsyringe'
import { ICategoriesRepository } from './../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';

container.registerSingleton<ICategoriesRepository>('CategoriesRepository',CategoriesRepository)
container.registerSingleton<ISpecificationsRepository>('SpecificationsRepository',SpecificationsRepository)