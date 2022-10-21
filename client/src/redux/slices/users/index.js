import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const userSlice = createSlice({
    name: 'users',
    initialState:{
        allUsers: []
    },
    reducers:{
        getAllUsers: (state, action) =>{
            state.allUsers = action.payload
        }
    }
})

const {getAllUsers} = userSlice.actions

export function getAllUsersAPI(){
    return async function(dispatch){
        let users = await axios.get("http://localhost:3001/admin");
        console.log(users)
       return dispatch(getAllUsers(users.data))
    }
}

export default userSlice.reducer