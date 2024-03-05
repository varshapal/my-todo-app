import { useRouter } from "next/router";

const TodoItem = (props) => {
    console.log(props);

    const editTodoHandler = (id) => {
        console.log(id);
        //props.onEditData(id);
    }

    // const todoDeleteHandler = async(id) => {
    //     console.log(id);
    //     try{
    //         await fetch.delete(`/api/todos/${id}`);
    //     }

    // }
    return(
        <li>
            <div>
                <p>{props.title}</p>
                <button onClick={() => todoDeleteHandler(props.todoData.id)}>Delete</button>
                <button onClick={() => editTodoHandler(props.id)}>Edit</button>
            </div>
        </li>
    )
};

export const getStaticProps = async (context) => {

    const todoId = context.params.todoId;

    const client = await MongoClient.connect('mongodb+srv://varsha25pal:xqkeEkbJiuqIl1rE@cluster0.ovpoxp1.mongodb.net/mytodos?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const todosCollection = db.collection('todos');

        const selectedTodo = await todosCollection.findOne({
            _id: new ObjectId(todoId),
        });

        console.log(selectedTodo);
        client.close();

        return {
            props: {
                todoData: {
                    id: selectedTodo._id.toString(),
                    title: selectedTodo.title,

                }
            }
        }
    }
export default TodoItem;