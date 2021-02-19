import React, { useState } from 'react';
import { FcApproval } from "react-icons/fc";
import TodoForm from './TodoForm';

import './todoforn.css';




const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const [checked, setChecked] = useState(false);
  const[allcomplete, setAllcompete]=useState(false)
  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete main-div-yes' : 'todo-row not-complete main-div-yes'}
      
      key={index}
    >
      <div key={todo.id}  className="col-10 mx-auto output-text bilal">
        {todo.text} 
      </div>

      <div className='icons'>
       
      
      <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked
      onClick={() => completeTodo(todo.id)}
      
          checked={checked}
          onChange={(event) => {
            setChecked(event.target.checked);
          }}
      
     />
      <label class="form-check-label" for="flexCheckDefault">
         done?
     </label>
        
        <button
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        >Delete</button> 
        
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon '
        >update</button>
      <button
      onClick={() => todo.isComplete? {allcomplete}: ''}
      allcomplete={allcomplete}
      onChange={(event)=>
      {
        setAllcompete(event.target.allcomplete);
      }}
      >all complete</button>
      </div>

    </div>
  ));
};

export default Todo;