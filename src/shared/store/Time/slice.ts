import { createSlice } from "@reduxjs/toolkit";

interface TimeState {
  isLittleTime: boolean;
}

const initialState: TimeState = {
  isLittleTime: false
};

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    isLittleTimeSwitch: (state) => {
      state.isLittleTime = !state.isLittleTime;
    },
    timeSwitchByAmount: (state, action) => {
      [state.isLittleTime] = action.payload;
    }
  }
});

export const { isLittleTimeSwitch, timeSwitchByAmount } = timeSlice.actions;

export default timeSlice.reducer;
