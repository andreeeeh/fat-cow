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
        res.sendStatus(400)
    }
}

export async function getResultsByClient (req, res) {
    try {
        let id = await req.params.id;
        let allResults = await db.Client.findAll({
            include: [{
                model: db.Result,
                as: 'Result'
            }],
            where: { id: id }
        });
        res.status(200).json(allResults);
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

export async function deleteOneResult (req, res) {
    try {
        let id = await req.params.id;
        console.log(id)
        await db.Result.destroy({ where: { id: id } })
        res.status(200).json('deleted');
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: 'Error occurred' }); // Send a JSON response with error status
    }
}

export async function addOneClient (req, res) {
    try {
        let info = await req.body;
        await db.Client.create(info)
        res.status(201).json({ message: 'created' })
    } catch (err) {
        console.log(err)
        res.status(400)
    }
}