import * as express from "express";
export var router = express.Router();
import {PersonsRepository} from '../../data/persons.repository'


/* GET home page. */
router.get("/", (req, res, next) => {
    let a = new PersonsRepository();
    a.createPerson();
    res.send({ "src": __dirname })
});
