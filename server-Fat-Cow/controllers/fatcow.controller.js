import db from "../models/index.js";
import { result } from "./util.controller.js"
// import info from "../info.js";

export async function getNutriInfo (req, res) {
    try {
        let info = await req.body;
        let resultData = result(info);
        const resInfo = await db.Result.create(resultData)
        res.status(201).send(resInfo)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}