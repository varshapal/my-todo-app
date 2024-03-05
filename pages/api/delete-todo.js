// pages/api/deleteTodo.js

import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const todoId = req.query.todoId; // Assuming you're passing todoId as a query parameter
  console.log("todoId", todoId);
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect('mongodb+srv://varsha25pal:o8PCAfVGeyWk8u4W@cluster0.ovpoxp1.mongodb.net/mytodos?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const todosCollection = db.collection('todos');
    

    // Delete the todo
    const result = await todosCollection.deleteOne({ _id: ObjectId(todoId) });

    if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Todo not found' });
      }

    // Close the connection
    client.close();

    // Respond with success message
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
