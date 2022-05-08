import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const experiencesSlice = createSlice({
  name: "experiences",
  initialState: {
    beingUsed: false,
    heading: "Work Experience",
    data: [
      {
        description: {
          heading: "Achievements/Tasks",
          contents: [""],
        },
      },
    ],
  } as ExperienceState,
  reducers: {
    setBeingUsed: (state, action: PayloadAction<boolean>) => {
      state.beingUsed = action.payload;
    },
    createExpDesc: (state, action: PayloadAction<{ expId: number }>) => {
      const contents = state.data[action.payload.expId].description.contents;
      if (contents.length === 1) contents.push("");
      else if (contents.at(-2)) contents.push("");
    },
    setExpDesc: (
      state,
      action: PayloadAction<{ expId: number; descId: number; content: string }>
    ) => {
      state.data[action.payload.expId].description.contents[
        action.payload.descId
      ] = action.payload.content;
    },
    setFrom: (
      state,
      action: PayloadAction<{
        expId: number;
        from: Period;
      }>
    ) => {
      state.data[action.payload.expId].from = action.payload.from;
    },
    setTo: (
      state,
      action: PayloadAction<{
        expId: number;
        to: Period;
      }>
    ) => {
      state.data[action.payload.expId].to = action.payload.to;
    },
    setLocation: (
      state,
      action: PayloadAction<{ expId: number; location: string }>
    ) => {
      state.data[action.payload.expId].location = action.payload.location;
    },
  },
});

const { reducer: experiencesReducer, actions } = experiencesSlice;
export const {
  setBeingUsed,
  createExpDesc,
  setExpDesc,
  setFrom,
  setTo,
  setLocation,
} = actions;
export default experiencesReducer;
export type ExperienceType = ReturnType<
  typeof experiencesReducer
>["data"][number];
