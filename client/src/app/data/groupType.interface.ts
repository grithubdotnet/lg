import { ISpecification } from './specification.interface';

export interface IGroupType{
    typeId: string, /**Group type */
    groupingBy: [ISpecification]
}

/**
    model: string, If not null, find an item that is of same model
    type: string, If not null find an item whose type is mentioned
    make: string, If not null find an item with the same make
*/