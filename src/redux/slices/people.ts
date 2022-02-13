import {createSlice} from '@reduxjs/toolkit';
import {PeopleItemListType} from '../../screens/People/types';
import {RootState} from '../hook';

export interface PeopleState {
  list: Array<PeopleItemListType>;
  error: typeof Error | undefined;
  loading: boolean;
  page: number;
}

const initialState: PeopleState = {
  list: [],
  error: undefined,
  loading: false,
  page: 1,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {
    getTask: (state, action) => {
      return {...state, loading: true, page: action.payload};
    },
    getTaskError: (state, action) => {
      return {...state, error: action.payload, list: [], loading: false};
    },
    getTaskSuccess: (state, action) => {
      // const list =
      //   state.page === 1 ? action.payload : [state.list, action.payload];
      return {...state, list: action.payload, error: undefined, loading: false};
    },
  },
});

export const peopleActions = peopleSlice.actions;
export const peopleReducer = peopleSlice.reducer;
export const peopleSelector = (state: RootState): PeopleState => state.people;
