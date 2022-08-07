import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { udpate_todo } from '../Redux/action';
import { UPDATE_TODO_SUCCESS } from '../Redux/actionTypes';

const EditPage = () => {
  const [data, setData] = useState("");

  const {id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      axios.get(`http://localhost:8080/todos/${id}`)
     .then((r) => {
      setData(r.data.title)
     })
    }
  },[id])

  const handleUpdate = () => {
    dispatch(udpate_todo(data,id))
    .then((r) => {
      if(r == UPDATE_TODO_SUCCESS){
        navigate(`/todo/${id}`)
      }
    }) 
  }

  return (
    <div>
    <h1>Edit Your Page</h1>
    <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
    <button onClick={handleUpdate}>Update</button>
    <button onClick={() => navigate("/")}>Go to HomePage</button>
    </div>
  )
}

export default EditPage
