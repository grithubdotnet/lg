import { IPerson } from './person.interface';
import { IAsset } from './asset.interface';

export interface Iechallan {
    title: string,
    jobrequestId: string,
    startDate: Date,
    schedEndDate: Date,
    assets: [{
        asset: IAsset
    }],
    assignedMembers: [{
        person: IPerson
    }]
}