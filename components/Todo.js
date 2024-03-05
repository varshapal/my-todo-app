import { useRef } from 'react';

const Todo = (props) => {

    const titleInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;

        const todoData = {
            title: enteredTitle,
            status: 'incomplete',
        }

        props.onAddTodo(todoData);
        

    }
    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder=" Enter your Todo Task" ref={titleInputRef}/>
            <button>Add Todo</button>
        </form>
    )
};

export default Todo;