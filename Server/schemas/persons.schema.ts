import mongoose, { Schema, Document } from 'mongoose';
import { ObjectID } from 'bson';

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

export interface IPerson extends Document {
  _id: ObjectID,
  name: {
    first: string,
    middle: string,
    last: string,
    displayName: string
  },
  mobile: number,
  email: string
  address: IAddress,
  role: IRole,
  skills: [ISkill],
  createdDate:Date,
  modifiedDate: Date,
  createdBy:String
}

export interface ISkill {
  name: string,
  code: string
}
export interface IRole {
  name: string;
  code: string;
}

export var person = mongoose.model<IPerson>('person', PersonSchema, 'persons');