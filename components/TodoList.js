import Todo from "./Todo";
import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const deleteTodo = async (todoId) => {
        console.log("id", todoId);

        props.onDeleteTodo(todoId);
    }

    const editTodo = async (todoId) => {
        console.log("id", todoId);

        props.onEditTodo(todoId);
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
                    <button onClick={() => editTodo(todo.id)}>Edit</button>
                </li>
            ))}
        </ul>
    )
};

export default TodoList;