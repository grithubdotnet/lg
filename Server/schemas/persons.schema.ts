import mongoose, { Schema, Document } from 'mongoose';
import { ObjectID } from 'bson';
import { IRole } from '../../client/src/app/data/role.interface';
import { IPersonSkill } from '../../client/src/app/data/person_skill.interface';
import { IPerson as IPersonData } from '../../client/src/app/data/person.interface';

const AddressSchema: Schema = new Schema({
  line1: { type: String, required: true },
  line1Line2: { type: String },
  landmark: { type: String },
  city: { type: String },
  state: { type: String, enum: ["AN", "AP", "TS"] },
  country: { type: String, enum: ["India"] },
  zipCode: { type: Number },
})
const NameSchema: Schema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  middle: { type: String },
  displayName: { type: String },
})
const RoleSchema: Schema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
})
const SkillSchema: Schema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
})
const PersonSchema: Schema = new Schema({
  name: NameSchema,
  address: AddressSchema,
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  createdDate: { type: Date },
  modifiedDate: { type: Date },
  createdBy: { type: String },
  role: RoleSchema,
  skills: [SkillSchema]
}).pre("save", function (next) {
  if (this) {
    let doc = <IPerson>this;
    let now = new Date();
    if (!doc.createdDate) {
      doc.createdDate = now;
    }
    doc.modifiedDate = now;
  }
  next();
});

export interface IAddress {
  line1: string,
  line2: string,
  landmark: string,
  city: string,
  state: string,
  country: string,
  zipcode: number,
}

export interface IPerson extends Document, IPersonData {
  _id: ObjectID,
  createdDate:Date,
  modifiedDate: Date,
  createdBy:String
}


export { IRole, IPersonSkill }

export var person = mongoose.model<IPerson>('person', PersonSchema, 'persons');