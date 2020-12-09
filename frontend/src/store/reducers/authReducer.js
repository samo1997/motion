import { SET_TOKEN } from '../../helpers/constants'

const initialState = { 
    token: null, //localStorage.getItem("token")
}

export default function authReducer (state = initialState, action) {
console.log('in da: authReducer -> state', state)
console.log('in da: authReducer -> action', action)


    switch (action.type) {
        case SET_TOKEN: {
            const newState = {...state}
            newState.token = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}
