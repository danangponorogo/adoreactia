import React from 'react'

const Test = (props: { nama: string }) => {
    const todos = [
        { id: 1, title: 'Eat' },
        { id: 2, title: 'Sleep' },
        { id: 3, title: 'Code' }
    ]

    const todo = todos[2].title

    const showTodos = () => {
        console.log(todo);
    }

    return (
        <div>
            Hello {props.nama} from inertia
            <p>{todo}</p>
            <button onClick={showTodos}>Show {todo} in the console log</button>
        </div>
    )
}

export default Test