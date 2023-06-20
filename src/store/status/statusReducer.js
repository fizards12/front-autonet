const LOG_IN = "LOGIN";
const LOG_OUT = "LOGOUT"
export const login = ()=> ({
    type: LOG_IN,
    payload: true
})
export const logout = ()=> ({
    type: LOG_OUT,
    payload: false
})

const initialState = {
    isLogged : false
}

const statusReducer = (state = initialState, action)=>{
    switch (action.type){
        case LOG_IN:
            return {
                isLogged: action.payload
            }
        case LOG_OUT:
            return {
                isLogged: action.payload
            }
        default:
            return state;
    }
}

export default statusReducer;