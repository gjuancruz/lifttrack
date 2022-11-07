import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        allUsers: []
    },
    reducers: {
        getAllUsers: (state, action) => {
            state.allUsers = action.payload
        }
    }
})

const { getAllUsers } = userSlice.actions

export function getAllUsersAPI() {
    return async function (dispatch) {
        try {
            let users = await axios.get("http://192.168.1.12:3001/admin");
            return dispatch(getAllUsers(users.data))
        } catch (error) {
            return console.log('flow', (error))
        }

    }
}


export function register(payload) {
    return async function () {
        try {
            var json = await axios.post(`http://192.168.1.12:3001/auth/register`, payload)
            return json
        } catch (error) {
            return console.log('adolf', error)
        }
    }
}

export function postRoutine(payload){
    return async function(){
        try {
            var json = await axios.post(`http://192.168.1.12:3001/routines`, payload)
            return json
        } catch (error) {
            console.log(error)
        }
    }
  }

export default userSlice.reducer