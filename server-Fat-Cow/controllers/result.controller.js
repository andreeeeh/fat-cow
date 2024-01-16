import db from "../models/index.js";
import { result } from "./util.controller.js"


export async function getNutriInfo (req, res) {
    try {
        let info = await req.body;
        let resultData = result(info);
        const resInfo = await db.Result.create(resultData)
        res.status(201).send(resInfo)
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: 'Internal Server Error' });
    }
}

export async function deleteOneResult (req, res) {
    try {
        let id = await req.params.id;
        console.log(id)
        await db.Result.destroy({ where: { id: id } })
        res.status(200).send({ message: 'Result deleted' });
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: 'Internal Server Error' });
    }
}
