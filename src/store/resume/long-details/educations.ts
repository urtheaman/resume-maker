import { createSlice } from '@reduxjs/toolkit';
import { LongDetailState } from '../../../../vite-env';
import {
  Fcreate,
  Fdelete,
  FsetBeingUsed,
  FsetDescContent,
  FsetDescHeading,
  FsetFrom,
  FsetHeading,
  FsetLocation,
  FsetOrderDown,
  FsetOrderUp,
  FsetPrimary,
  FsetSecondary,
  FsetTo,
} from '../functions';

const init: LongDetailState['data'][string] = {
  primary: '',
  secondary: '',
  from: '',
  to: '',
  location: '',
  description: {
    heading: 'Courses',
    contents: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': '',
    },
  },
};

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    beingUsed: false,
    heading: 'Education',
    data: {
      '25cc658a-0a87-4196-8579-354d8ab33df8': init,
    },
    order: ['25cc658a-0a87-4196-8579-354d8ab33df8'],
  } as LongDetailState,
  reducers: {
    createEl: Fcreate(init),
    deleteEl: Fdelete,
    setBeingUsed: FsetBeingUsed,
    setDescContent: FsetDescContent,
    setDescHeading: FsetDescHeading,
    setFrom: FsetFrom,
    setHeading: FsetHeading,
    setLocation: FsetLocation,
    setOrderDown: FsetOrderDown,
    setOrderUp: FsetOrderUp,
    setPrimary: FsetPrimary,
    setSecondary: FsetSecondary,
    setTo: FsetTo,
  },
});

const { reducer: educationsReducer, actions } = educationSlice;
export default actions;
export { educationsReducer };
