import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { add_todo, get_todo } from '../Redux/action';
import { ADD_TODO_SUCCESS } from '../Redux/actionTypes';
const TodoInput = ({getTodos}) => {
  const dispatch= useDispatch();
  const [title, setTitle]=useState("");


  const handleAdding=()=>{
    const payload={
      title,
      status:false,
    };
    console.log(payload)
    setTitle("");
    dispatch(add_todo(payload))
    .then((r) => {
      if(r == ADD_TODO_SUCCESS){
        dispatch(get_todo())
      }
    })
  }

  return (
  
    <div>
      <input style={{height:"20px",fontSize:"18px", width:"300px",padding:"0.5rem"}} value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button style={{height:"38px",fontWeight:"bold",widht:"130px",backgroundColor:"red",color:"aliceblue"}} onClick={handleAdding}> ADD</button>
    </div>
  
    
  )
}

export default TodoInput

