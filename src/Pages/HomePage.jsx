import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoInput from '../Components/TodoInput'
import { delete_todo, get_todo, toggle_todo } from '../Redux/action'
import { DELETE_TODO_SUCCESS, TOGGLE_TODO_SUCCESS } from '../Redux/actionTypes'

const HomePage = () => {
    const todos = useSelector(state => state.app.todos)
    const {isLoading, isError}  = useSelector( state => state.app);

    const dispatch= useDispatch() 

    useEffect(()=>{
        dispatch(get_todo())
    },[])

    // console.log('rrrr',todos)
    console.log(isLoading,isError)
    const handleToggle = (newStatus,id) => {
      dispatch(toggle_todo(newStatus,id))
      .then((r) => {
        if(r == TOGGLE_TODO_SUCCESS){
          dispatch(get_todo())
        }
      })
    }
    const handleRemove=(id)=>{
      dispatch(delete_todo(id))
      .then((r) => {
        if(r == DELETE_TODO_SUCCESS){
          dispatch(get_todo())
        }
      })
    }
  return (
    <>
    <h1 style={{color:"blue"}}>TODO</h1>
    <TodoInput/>
    {
    isLoading ? <div>Loading...</div> :
    isError ? <div>Something went Wrong</div> :
    <div>
     {
        todos?.map((item) => {
            return (
              
                <div style={{height:"70px",width:"500px",border:"1px solid grey",margin:"auto",marginTop:"15px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:item.status ? "1px solid green" : null}} key={item.id}>
                <Link to={`/todo/${item.id}`} >
                  <h1>{item.title}</h1>
                </Link>
                  <button onClick={() => handleToggle(!item.status,item.id)} style={{height:"30px",width:"140px",backgroundColor:"black",color:"#fff"}}>{item.status ? "Completed" : "Uncompleted"}</button>
                  <button onClick={() => handleRemove(item.id)} style={{height:"30px",width:"80px",backgroundColor:"black",color:"#fff"}}>Delete</button>
                </div>
              
            )
        })
     }
    </div>
    }
    </>
  )
}

export default HomePage
