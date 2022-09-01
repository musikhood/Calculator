import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CalcState {
  currValue: string;
  prevValue: string;
  done: boolean;
}

const initialState: CalcState = {
  currValue: "",
  prevValue: "",
  done: false,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    addNumber: (state, action: PayloadAction<string>) => {
      if (state.currValue.length >= 25) {
        return;
      }
      if (state.done) {
        state.currValue = "";
        state.done = false;
      }
      if (state.currValue === "Infinity") {
        state.currValue = action.payload;
        return;
      }
      if (
        (state.currValue.includes(".") && action.payload === ".") ||
        (state.currValue === "" && action.payload === ".")
      ) {
        return;
      }
      if (action.payload === "0" && state.currValue === "0") {
        return;
      }
      if (state.currValue === "0" && action.payload !== ".") {
        state.currValue = action.payload;
        return;
      }
      state.currValue += action.payload;
    },
    reset: (state) => {
      state.currValue = "";
      state.prevValue = "";
    },
    addAction: (state, action: PayloadAction<string>) => {
      if (state.currValue === "" && state.prevValue === "") {
        return;
      }
      if (state.currValue[state.currValue.length - 1] === ".") {
        state.currValue = state.currValue.slice(0, -1);
      }
      if (state.currValue === "") {
        state.prevValue = state.prevValue.slice(0, -1);
        state.prevValue += action.payload;
        return;
      }
      if (state.prevValue === "") {
        state.prevValue = state.currValue + action.payload;
        state.currValue = "";
        return;
      }

      state.prevValue = String(
        eval(state.prevValue + state.currValue) + action.payload
      );
      state.currValue = "";
    },
    evaluate: (state) => {
      if (state.currValue === "" || state.prevValue === "") {
        return;
      }
      state.done = true;
      state.currValue = String(eval(state.prevValue + state.currValue));
      state.prevValue = "";
    },
    del: (state) => {
      if (state.currValue === "Infinity") {
        state.currValue = "";
        return;
      }
      state.currValue = state.currValue.slice(0, -1);
    },
  },
});

export const { addNumber, reset, addAction, evaluate, del } = calcSlice.actions;

export default calcSlice.reducer;
