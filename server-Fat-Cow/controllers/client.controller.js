import db from "../models/index.js";
import { result } from "./util.controller.js"


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
        res.status(400).json({ message: 'error' });
    }
}

export async function addOneClient (req, res) {
    try {
        let info = await req.body;
        await db.Client.create(info)
        res.status(201).json({ message: 'created' })
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: 'error' });
    }
}

export async function getAllClientsResults (req, res) {
    try {
        let allClients = await db.Client.findAll({
            include: [{
                model: db.Result,
                as: 'Result'
            }]
        });
        res.status(200).json(allClients);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'error' });
    }
}