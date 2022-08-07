import * as  types from "./actionTypes"
import axios from "axios"
const get_todo = ()=>(dispatch)=>{
dispatch({type:types.GET_TODO_REQUEST})

 axios.get("http://localhost:8080/todos")
 .then ((r) =>{
    console.log("res",r.data)
    dispatch({type:types.GET_TODO_SUCCESS, payload:r.data}) 
 })
 .catch((err)=>{
    dispatch({type:types.GET_TODO_FAILURE})
 })
}

const add_todo = (payload) => (dispatch) => {
   dispatch({type:types.ADD_TODO_REQUEST})
   return axios.post("http://localhost:8080/todos",payload)
   .then((r) => {
      dispatch({type:types.ADD_TODO_SUCCESS})
      return types.ADD_TODO_SUCCESS
   })
   .catch((err) => {
      dispatch({type:types.ADD_TODO_FAILURE})
   })
}
const toggle_todo = (payload, id) => (dispatch) => {
   dispatch({type:types.TOGGLE_TODO_REQUEST})
   return axios.patch(`http://localhost:8080/todos/${id}`,{status:payload})
   .then((r) => {
      dispatch({type:types.TOGGLE_TODO_SUCCESS})
      return types.TOGGLE_TODO_SUCCESS
   })
   .catch((err) => {
      dispatch({type:types.TOGGLE_TODO_FAILURE})
   })
}

const delete_todo = ( id) => (dispatch) => {
   dispatch({type:types.DELETE_TODO_REQUEST})
   return axios.delete(`http://localhost:8080/todos/${id}`)
   .then((r) => {
      dispatch({type:types.DELETE_TODO_SUCCESS})
      return types.DELETE_TODO_SUCCESS
   })
   .catch((err) => {
      dispatch({type:types.DELETE_TODO_FAILURE})
   })
}

const udpate_todo = (payload,id) => (dispatch) => {
   console.log(payload,id)
   dispatch({type:types.UPDATE_TODO_REQUEST})
   return axios.patch(`http://localhost:8080/todos/${id}`,{title:payload})
   .then((r) => {
      console.log(r)
      dispatch({type:types.UPDATE_TODO_SUCCESS})
      return types.UPDATE_TODO_SUCCESS
   })
   .catch((err) => {
      dispatch({type:types.UPDATE_TODO_FAILURE})
   })
}




export{get_todo,add_todo, toggle_todo,delete_todo,udpate_todo}