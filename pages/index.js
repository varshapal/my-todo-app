import TodoList from '@/components/TodoList';
import Todo from '../components/Todo';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';

const HomePage = (props) => {

    const addTodoHandler = async(enteredTodoData) => {
        const response = await fetch('/api/new-todo', {
            method: 'POST',
            body: JSON.stringify(enteredTodoData),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        console.log(data);
    }

    const editTodoHandler = async(todoId) => {
        const response = await fetch(`/api/edit-todo?todoId=${todoId}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: props.title,
                status: 'complete',
            })
        })
        const data = await response.json();
        console.log(data);
    }

    const deleteTodoHandler = async (todoId) => {
        console.log(todoId);
        try{
            const response = await fetch(`/api/delete-todo?todoId=${todoId}`, {
                method: 'DELETE',
            } );
            const data = await response.json();
            console.log(data);
            console.log("deleted");
        } catch(error) {
            console.log(error);
        }
        
    }
    return(
        <Fragment>
            <Todo onAddTodo={addTodoHandler}/>
            <TodoList todos={props.todos} onDeleteTodo={deleteTodoHandler} onEditTodo={editTodoHandler}/>
        </Fragment>
        
    )
};

export const getStaticProps = async () => {
    //fetch data from API
    const client = await MongoClient.connect('mongodb+srv://varsha25pal:oJmm3u0dBtHGSj3q@cluster0.ovpoxp1.mongodb.net/mytodos?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const todosCollection = db.collection('todos');
        const todos = await todosCollection.find().toArray();

        client.close();

        return {
            props: {
                todos: todos.map((todo) => ({
                    title: todo.title,
                    status: todo.status,
                    id: todo._id.toString(),
                }))
            },
            revalidate: 1
        }
}

export default HomePage;