import { MongoRepository } from "./_mongo.repository";
import { person, IPerson } from '../schemas/persons.schema'
import { ObjectId } from "bson";
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

    async createPerson(p:JSON): Promise<IPerson|Error> {
        try {
            //let per = new person({ name: { first: "swagath", middle: "dev", last: "Bairi" }, mobile: 9014720192, email: "swagath", address: { line1: "279/c", } });
            let per =new person(p);
            let result = await person.create(p);
            return result;
        } catch (err) {
            return new Error(err.message ? err.message : "error while saving person to db");
        }

    }

    async findPersonById(id: string): Promise<IPerson | null| Error> {        
        try{
            var p = person.findById(id.toString());
            let result = await p.exec();
            return result;
        }catch(err){
            console.log(err);
            return new Error(err.message);
        }
    }
    
    async deletePerson(id: string): Promise< {} | Error> {       
        try{
            const res = await person.deleteOne({ _id: new ObjectId(id) });
            return res;
        }catch(err){
            console.log(err);
            return new Error(err.message);
        }
    }

}