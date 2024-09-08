import { createSelector } from "@reduxjs/toolkit";

import { posts, status, state, author } from './postsSlice'

export const selectPosts = createSelector([posts, author], (posts, author) => {
    if (author == -1) return posts
    return posts.filter((item) => item.userId == author)
} );

export const selectStatus = createSelector([state], (state) => state.state );
