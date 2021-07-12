/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WealthSummaryState } from './types.store';

const INITIAL_STATE: WealthSummaryState = {
  payload: {
    cdi: 0,
    gain: 0,
    hasHistory: false,
    id: 0,
    profitability: 0,
    total: 0,
  },
  loading: 'idle',
};

export const wealthSummarySlice = createSlice({
  name: 'counter',
  initialState: INITIAL_STATE,
  reducers: {
    storeData: (state, action: PayloadAction<WealthSummaryState>) => {
      state = { ...action.payload };
    },
  },
});

export const { storeData } = wealthSummarySlice.actions;
export default wealthSummarySlice.reducer;
