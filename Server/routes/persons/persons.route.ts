import * as express from "express";
export var router = express.Router();
import { PersonsRepository } from '../../data/persons.repository'
import { person } from '../../schemas/persons.schema'


/* GET home page. */
router.post("/create", async (req, res, next) => {
    let a = new PersonsRepository();
    let p = await a.createPerson(req.body);
    if (p instanceof Error) {
        res.status(500);
        res.send({ "error": p.message });
    } else {
        res.send(p);
    }

});

router.get("/find/:id", async (req, res, next) => {
    let a = new PersonsRepository();
    let p = await a.findPersonById(req.params.id);
    if (p instanceof Error) {
        res.status(500);
        res.send({ "error": p.message });
    } else {
        res.send(p);
    }

});

router.get("/delete/:id", async (req, res, next) => {
    let a = new PersonsRepository();
    let p = await a.deletePerson(req.params.id);
    if (p instanceof Error) {
        res.status(500);
        res.send({ "error": p.message });
    } else {
        res.send(p);
    }

});