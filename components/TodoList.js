import Todo from "./Todo";
import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const deleteTodo = async (todoId) => {
        console.log("id", todoId);
        
            // const response = fetch(`/api/delete-todo?todoId=${todoId}`, {
            //     method: 'DELETE',
            // } );
            // const data = await response.json;
            // console.log(data);
            // console.log("deleted");

            props.onDeleteTodo(todoId);
    }
    
    
    return(
        <ul>
            <h2>Todo List</h2>
            {props.todos.map((todo) => (
                // <TodoItem 
                //     key={todo.id}
                //     id={todo.id}
                //     title={todo.title}
                // />
                <li key={todo.id}>
                    {todo.title}
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
};

export default TodoList;