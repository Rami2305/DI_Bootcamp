import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  status: '', // loading, success, failed
}

export const fetchUsers = createAsyncThunk('user/fetch', async () =>{
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await result.json();
  return data
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchUsers.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'success'
      state.users = action.payload
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.status = 'failed'
    })
  }

})

export const {} =userSlice.actions
export default userSlice.reducer