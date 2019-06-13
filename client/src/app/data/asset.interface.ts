import { ISpecification } from './specification.interface';

export interface IAsset{
    id: string,
    name: string,
    displayName: string,
    code: string,
    specifications: ISpecification
}