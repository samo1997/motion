import { SET_TOKEN } from '../../helpers/constants'
import baseUrl from "../../helpers/baseUrl";

// action creator
export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token,
    }
} 

export const authAction = (email, password) => async (dispatch, getState) => {        
    const url = `${baseUrl}auth/token/`;
    const config = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({email, password})
    };

    const response = await fetch(url, config)
    const data = await response.json();
    dispatch(setToken(data.access)); //token
    localStorage.setItem("token", data.access);
    return data
};