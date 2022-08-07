import * as types from "./actionTypes"

const initstate={isLoading:false , isError:false, todos:[]}

const reducer = (state=initstate,{type, payload})=>{


switch(type){
    case types.GET_TODO_REQUEST: {
        return{
            isLoading:true,
            isError:false
        }
    }

    case types.GET_TODO_SUCCESS: {
        return{
            todos:payload,
            isLoading:false,
            isError:false,     
        }
    }

    case types.GET_TODO_FAILURE: {
        return{
            isLoading:false,
            isError:true
        }
    }

    default:{
        return state
    }

}
}
export {reducer}