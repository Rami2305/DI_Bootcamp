import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  status: '', // loading, success, failed
  author: -1
}

export const fetchPosts = createAsyncThunk('posts/fetchposts', async () =>{
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await result.json();
  return data
})

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addreaction: (state, action) => {
      const { id, name } = action.payload
      console.log(id, name)
      const post = state.posts.find(item => item.id === id)
      if(post) {
        post.reactions[name]++;
      }
    },
    filterAuthor: (state, action) => {
      state.author = action.payload;
    },
    
  },
  extraReducers(builder) {
    builder
    .addCase(fetchPosts.pending, (state) => {
       state.status = 'loading'
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success';
        const newPosts = action.payload.map((post) =>{
          post.reactions = { 
            thumbsUp: 0, 
            heart: 0, 
            wow: 0, 
            rocket: 0, 
            coffee: 0 
          }; 
          return post;
        });
        state.posts = newPosts;
    })
    .addCase(fetchPosts.rejected, (state) => {
        state.status = 'failed';
    })
  }

})

export const posts = (state) => state.postsReducer.posts;
export const status = (state) => state.postsReducer.status;
export const state = (state) => state.postsReducer;
export const author = (state) => state.postsReducer.author;

export const { addreaction, filterAuthor } = postsSlice.actions;
export default postsSlice.reducer;
