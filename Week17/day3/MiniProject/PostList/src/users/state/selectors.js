import { createSelector } from "@reduxjs/toolkit";

import { users, status, state } from './usersSlice'

export const selectUsers = createSelector([state], (state) => state.users );

export const selectStatus = createSelector([state], (state) => state.state );

