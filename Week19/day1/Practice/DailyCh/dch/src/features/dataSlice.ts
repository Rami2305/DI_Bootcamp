import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamStatisticsResponse } from '../types/types'

interface DataState {
    data: TeamStatisticsResponse | null;
    loading: boolean;
    error: string | null;

}
  
const initialState: DataState = {
    data: null,
    loading: false,
    error: null
};
  
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setTeamsData(state, action: PayloadAction<TeamStatisticsResponse>) {
        state.data = action.payload;
        },
        setTeamsLoading(state, action: PayloadAction<boolean>) {
        state.loading = action.payload;
        },
        setTeamsError(state, action: PayloadAction<string | null>) {
        state.error = action.payload;
        }
    }
});
  
export const { setTeamsData, setTeamsLoading, setTeamsError } = dataSlice.actions;
export default dataSlice.reducer;