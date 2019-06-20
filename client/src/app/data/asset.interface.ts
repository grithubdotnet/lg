import { ISpecification } from './specification.interface';

export interface IAsset{
    name: string,
    displayName: string,
    barCode: string,
    modelNumber: string,
    serialNumber: string,
    specifications: ISpecification,
}