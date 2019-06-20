import { IRole } from './role.interface';
import { IPersonSkill } from './person_skill.interface';

export interface IPerson{
    name: {
        first: string,
        middle: string,
        last: string
    },
    displayName: string,
    contact: {
        mobile: string,
        email: string,
    },
    address: {
        line1: string,
        line2: string,
        landmark: string,
        city: string,
        state: string,
        zipcode: number,
    },
    role: IRole,
    skills: [IPersonSkill],
}