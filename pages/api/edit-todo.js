import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function PUT(request, context) {
    const todoId = context.params.todoId;
    const record = {_id: todoId}
    const payload = await request.json();
    const client = await MongoClient.connect('mongodb+srv://varsha25pal:oJmm3u0dBtHGSj3q@cluster0.ovpoxp1.mongodb.net/mytodos?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const todosCollection = db.collection('todos');
    const result = await todosCollection.updateOne(record, {$set: { status: 'complete'}});
    return NextResponse.json({ result, success: true})
}

