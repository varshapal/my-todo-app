// import { NextResponse } from "next/server";

// export async function DELETE(request, context) {
//     const todoId = context.params.todoId;
//     const record = {_id: todoId}
//     const client = await MongoClient.connect('mongodb+srv://varsha25pal:oJmm3u0dBtHGSj3q@cluster0.ovpoxp1.mongodb.net/mytodos?retryWrites=true&w=majority&appName=Cluster0');
//     const db = client.db();
//     const todosCollection = db.collection('todos');
//     const result = await todosCollection.deleteOne(record);
//     return NextResponse.json({ result, success: true})
// }

