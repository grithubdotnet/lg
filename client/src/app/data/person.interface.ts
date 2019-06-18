import { IRole } from './role.interface';

export interface IPerson{
    id: string,
    name: {
        first: string,
        middle: string,
        last: string
    },
    displayName: string,
    contact: {
        mobile: string,
        address: {
            line1: string,
            line2: string,
            landmark: string,
            code: number,
        },
        email: string,
    },
    role: IRole,
    skills: [{
        id: string,
        name: string,
    }],
}