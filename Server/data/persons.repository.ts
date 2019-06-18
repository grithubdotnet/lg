import { MongoRepository } from "./_mongo.repository";
import { person, IPerson } from '../schemas/persons.schema'
import { ObjectID } from "bson";
import { NativeError } from "mongoose";

export class PersonsRepository extends MongoRepository {
    constructor() {
        super("persons");
    }

    async findOne(query: any): Promise<IPerson | null | Error> {
        var p = person.findOne(query)
        try {
            let result = await p.exec();
            return result;
        } catch (err) {
            console.log(err);
            return new Error(err.message);
        }
    }

    async createPerson(p:IPerson): Promise<IPerson|Error> {
        try {
            let result = await person.create(p);
            return result;
        } catch (err) {
            return new Error("Error while saving person to DB")
        }

    }

    async findPersonById(id: string): Promise<IPerson | null| Error> {
        var p = person.findById(id.toString());
        try{
            let result = await p.exec();
            return result;
        }catch(err){
            console.log(err);
            return new Error(err.message);
        }
    }


}