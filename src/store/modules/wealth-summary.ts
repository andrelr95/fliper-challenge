/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WealthSummaryState {
  id: number;
  total: number;
  profitability: number;
  hasHistory: boolean;
  gain: number;
  cdi: number;
}

const INITIAL_STATE: WealthSummaryState = {
  cdi: 0,
  gain: 0,
  hasHistory: false,
  id: 0,
  profitability: 0,
  total: 0,
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
