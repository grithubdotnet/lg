import mongoose = require('mongoose');
var config = require('../config.json');

export class MongoRepository {
    connectionString: string;
    collection: string
    constructor(collection: string, connectionString?: string, ) {
        this.connectionString = connectionString || config.connectionString;
        this.collection = collection;
        mongoose.connect(
            this.connectionString,
            (err: Error) => {
                if(err){
                    console.log("failed connecting to Mongo")
                    console.log(err);                    
                }else{
                    console.log('Connected to MongoDb');
                }
            }
        );
    }
}