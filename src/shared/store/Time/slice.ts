import { createSlice } from "@reduxjs/toolkit";

interface TimeState {
  isLittleTime: boolean;
  isPopular: boolean;
}

const initialState: TimeState = {
  isLittleTime: false,
  isPopular: true
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    isLittleTimeSwitch: (state) => {
      state.isLittleTime = !state.isLittleTime;
    },
    isPopularSwitch: (state) => {
      state.isPopular = !state.isPopular;
    },
    timeSwitchByAmount: (state, action) => {
      [state.isLittleTime] = action.payload;
    }
  }
});

export const { isLittleTimeSwitch, isPopularSwitch, timeSwitchByAmount } = timeSlice.actions;

export default timeSlice.reducer;
