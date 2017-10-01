import React from 'react';
import Proptypes from 'prop-types';
import MyTodo from './MyTodo.component';


const MyTodoList = ({ todos, onTodoClick }) => (
        <ul>
        {todos.map(todo => (
        <MyTodo key={todo.id} {...todo} onClick={()=>onTodoClick(todo.id)} /> 
        ))}
        </ul>
    )

MyTodoList.Proptypes = {
    todos: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.number.isRequired,
            completed: Proptypes.bool.isRequired,
            text: Proptypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: Proptypes.func.isRequired
}

export default MyTodoList;