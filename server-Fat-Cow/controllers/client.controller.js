import db from "../models/index.js";


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
        res.status(400).send({ message: 'Internal Server Error' });
    }
}

export async function deleteOneClient (req, res) {
    try {
        let id = await req.params.id;
        await db.Result.destroy({ where: { clientId: id } });
        await db.Client.destroy({ where: { id: id } })
        res.status(200).send({ message: 'Client deleted' });
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: 'Internal Server Error' });
    }
}

export async function addClient (req, res) {
    try {
        let client = req.body;
        console.log(client)
        let newClient = await db.Client.create(client)
        res.status(201).send(newClient)
    } catch (err) {
        console.log(err)
        res.status(400).send({ message: 'Internal Server Error' });
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
        res.status(400).send({ message: 'Internal Server Error' });
    }
}

export async function getOnlyClients (req, res) {
    try {
        let allClients = await db.Client.findAll();
        res.status(200).send(allClients);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: 'Internal Server Error' });
    }
}