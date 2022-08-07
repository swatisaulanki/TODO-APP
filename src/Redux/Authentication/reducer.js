import * as types from "./actionTypes"

const initstate={isLoading:false , isError:false, token:"", isAuth:false}

const reducer = (state=initstate,{type, payload})=>{


switch(type){
    case types.LOGIN_REQUEST: {
        return{
            isLoading:true,
            isError:false
            
        }
    }

    case types.LOGIN_SUCCESS: {
        return{
           token :payload,
            isAuth:true,
            isLoading:false,
            isError:false,     
        }
    }

    case types.LOGIN_FAILURE: {
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