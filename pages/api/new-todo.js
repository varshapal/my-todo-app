import { MongoClient } from "mongodb";

// /api/new-todo
//POST /api/new-todo


const handler = async(req, res) => {
    if(req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://varsha25pal:o8PCAfVGeyWk8u4W@cluster0.ovpoxp1.mongodb.net/mytodos?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const todosCollection = db.collection('todos');
        const result = await todosCollection.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({ message: 'Todo inserted!'});
    }

    
}


export default handler;