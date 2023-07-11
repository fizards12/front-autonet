const LOG_IN = "LOGIN";
const LOG_OUT = "LOGOUT";
export const login = (user)=> ({
    type: LOG_IN,
    payload: {
        isLogged : true,
        user: user
    }
})
export const logout = ()=> ({
    type: LOG_OUT,
    payload: {
        isLogged : false,
        user: {}
    }
})


const initialState = {
    isLogged : false,
    user: {}
}

const statusReducer = (state = initialState, action)=>{
    switch (action.type){
        case LOG_IN:
            return {
                ...action.payload
            }
        case LOG_OUT:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}

export default statusReducer;