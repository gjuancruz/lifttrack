import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ip = '192.168.1.12'
export const userSlice = createSlice({
    name: 'users',
    initialState: {
        allUsers: [],
        currentUserId: ''
    },
    reducers: {
        getAllUsers: (state, action) => {
            state.allUsers = action.payload
        },
        getUserId: (state, action) => {
            state.currentUserId = action.payload
        },
        getUserRoutines: (state, action) => {
            state.routines = action.payload
        }
    }
})

const { getAllUsers } = userSlice.actions

export function getAllUsersAPI() {
    return async function (dispatch) {
        try {
            let users = await axios.get(`http://${ip}:3001/admin`);
            return dispatch(getAllUsers(users.data))
        } catch (error) {
            return console.log('flow', (error))
        }

    }
}



export function register(payload) {
    return async function () {
        try {
            var json = await axios.post(`http://${ip}:3001/auth/register`, payload)
            return json
        } catch (error) {
            return console.log('adolf', error)
        }
    }
}

const { getUserId } = userSlice.actions

export function login(payload) {
    return async function (dispatch) {
        try {
            const data = await axios.post(`http://${ip}:3001/auth/login`, payload);
            if (data.data.token) {
                await AsyncStorage.setItem('sw-token', data.data.token)
            }
            return dispatch(getUserId(data.data.id))
        } catch (error) {
            console.log('wek', error)
        }
    }
}
export function postRoutine(payload) {
    return async function () {
        try {
            var json = await axios.post(`http://${ip}:3001/routines`, payload)
            return json
        } catch (error) {
            console.log(error)
        }
    }
}

const { getUserRoutines } = userSlice.actions

export function getRoutine(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(`http://${ip}:3001/routines/${id}`)
            return dispatch(getUserRoutines(json.data.routines))
        } catch (error) {
            console.log(error)
        }
    }
}

export default userSlice.reducer