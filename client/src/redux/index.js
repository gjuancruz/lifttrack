import { configureStore } from '@reduxjs/toolkit'
import users from './slices/users/index'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    users
  }
})

export default store