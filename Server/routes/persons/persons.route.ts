import * as express from "express";
export var router = express.Router();
import { PersonsRepository } from '../../data/persons.repository'
import { person } from '../../schemas/persons.schema'


/* GET home page. */
router.get("/", async (req, res, next) => {
    let a = new PersonsRepository();
    let per = new person({ name: { first: "swagath", middle: "dev", last: "Bairi" }, mobile: 9014720192, email: "swagath", address: { line1: "279/c", } });

    let p = await a.createPerson(per);
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