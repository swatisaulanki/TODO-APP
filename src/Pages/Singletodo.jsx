import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Singletodo = () => {
  const [data, setData] = useState({})

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if(id){
      axios.get(`http://localhost:8080/todos/${id}`)
     .then((r) => {
      setData(r.data)
     })
    }
  },[id])

  const handleEdit = () => {
    navigate(`todo/${id}/edit`)
  }

  console.log(data)
  return (
    <div> 
    <h1>Single TODO</h1>
    <h1>{data.title}</h1> 
    <Link to={`/todo/${id}/edit`}><button>Edit</button></Link>
    </div>
  )
}

export default Singletodo
