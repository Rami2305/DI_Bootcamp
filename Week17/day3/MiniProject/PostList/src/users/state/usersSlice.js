
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  status: '', // loading, success, failed
}

export const fetchUsers = createAsyncThunk('users/fetchusers', async () =>{
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await result.json();
  return data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addusers: (state, action) => {
      const { id, name } = action.payload
      console.log(id, name)
      const user = state.users.find(item => item.id === id)
      if(user) {
        user.name = name;
      }
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  }

})

export const users = (state) => state.usersReducer.users
export const status = (state) => state.usersReducer.status
export const state = (state) => state.usersReducer


export const {} = usersSlice.actions
export default usersSlice.reducer