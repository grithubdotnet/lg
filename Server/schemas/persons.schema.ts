import mongoose, { Schema, Document } from 'mongoose';

const PersonSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile:{type: Number, required: true},
  createdDate: {type: Date},
  modifiedDate: {type: Date},
  createdBy: {type: String}
}).pre("save", function(next) {
  if (this) {
    let doc = <IPerson>this;
    let now = new Date();
    if (!doc.createdDate) {
      doc.modifiedDate = now;
    }
    doc.modifiedDate = now;
  }
  next();
});

export interface IPerson extends Document {
    email: string;
    firstName: string;
    lastName: string;
    mobile: number;
    createdDate: Date;
    modifiedDate: Date;
    createdBy: string;
  }

 export var person = mongoose.model<IPerson>('person', PersonSchema, 'persons', true);