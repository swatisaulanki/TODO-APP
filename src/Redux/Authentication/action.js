import * as types from "./actionType"

const login = (payload) => (dispatch) => {
    console.log(payload)
    dispatch({type:types.LOGIN_REQUEST})
    return axios.patch("https://reqres.in/api/login" ,{payload})
    .then((r) => {
       console.log(r)
       dispatch({type:types.LOGIN_SUCCESS})
       return types.LOGIN_SUCCESS
    })
    .catch((err) => {
       dispatch({type:types.LOGIN_FAILURE})
    })
 }
 export {login}