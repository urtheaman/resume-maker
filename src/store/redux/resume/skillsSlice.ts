import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {} as SkillState,
  reducers: {},
});

const { reducer: skillsReducer, actions } = skillsSlice;
export const {} = actions;
export default skillsReducer;
