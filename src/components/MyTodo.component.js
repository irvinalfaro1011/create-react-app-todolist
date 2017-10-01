import React from 'react';
import Proptypes from 'prop-types';



const MyTodo = ({ onClick, completed, text }) => (
    <li onClick={onClick} style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}>{text}</li>
)
MyTodo.Proptypes  = {
    onClick: Proptypes.func.isRequired,
    completed: Proptypes.bool.isRequired,
    text: Proptypes.string.isRequired
}

export default MyTodo;

