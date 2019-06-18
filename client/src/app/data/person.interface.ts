import { IRole } from './role.interface';
import { IPersonSkill } from './person_skill.interface';

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
            zipcode: number,
        },
        email: string,
    },
    role: IRole,
    skills: [IPersonSkill],
}