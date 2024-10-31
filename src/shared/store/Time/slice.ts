import { createSlice } from "@reduxjs/toolkit";

interface TimeState {
  isLittleTime: boolean;
  isPopular: boolean;
  isDiscount: boolean;
}

const initialState: TimeState = {
  isLittleTime: false,
  isPopular: false,
  isDiscount: false
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
    isDiscountSwitch: (state) => {
      state.isDiscount = !state.isDiscount;
    },
    timeSwitchByAmount: (state, action) => {
      [state.isLittleTime] = action.payload;
    }
  }
});

export const { isLittleTimeSwitch, isPopularSwitch, isDiscountSwitch, timeSwitchByAmount } = timeSlice.actions;

export default timeSlice.reducer;
