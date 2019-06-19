import * as express from "express";
import { router as r } from './persons/persons.route'
import * as path from 'path'


export var router = express.Router();   

/* GET home page. */
router.use("/api/persons", r)
router.get("/", (req, res, next) => {
    let filePath = path.join(__dirname + '/../index.html')
    res.sendFile(filePath)
});
