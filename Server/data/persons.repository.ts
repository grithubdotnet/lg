import { MongoRepository } from "./_mongo.repository";
import { person, IPerson } from '../schemas/persons.schema'

export class PersonsRepository extends MongoRepository {
    constructor() {
        super("persons");
    }

    async findOne(name: string): Promise<IPerson | null> {
        var p = person.findOne({ "name": name })
        p.sort("name")
        return p.exec((err, person) => {
            if (err) {
                console.log(err);
                return;
            }
            return person
        })
    }

    async createPerson(): Promise<any> {//Promise<IPerson|null>{
        let a = new person({ firstName: "asd", lastName: "Bairi", email: "swafasda@asd.com", mobile: 9014720192 });
        a.firstName = "Swagath";
        let asd = await person.create(a, (err: any, res: any) => {
            if (err) {
                console.log(err);
                return err;
            }
            else {
                console.log(res);
                return res;
            }
        });
    }

}