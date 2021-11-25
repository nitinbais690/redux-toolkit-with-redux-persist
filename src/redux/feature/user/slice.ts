import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import UserServices from './services';

export type UserItem = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export interface UserState {
  list: Array<UserItem>;
  status: 'idle' | 'loading' | 'failed';
  success: boolean;
  error: typeof Error | undefined;
}

const initialState: UserState = {
  list: [],
  status: 'idle',
  error: undefined,
  success: false,
};

const retrieveUsers = createAsyncThunk('users/retrieve', async () => {
  const res = await UserServices.getAll();
  return res.data;
});

const registerUser = createAsyncThunk(
  '/register',
  async ({email, password}: {email: string; password: string}) => {
    console.log(`value ${email} ${password}`);
    const res = await UserServices.register(email, password);
    console.log('res', res);
    return res.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(retrieveUsers.pending, state => {
        state.status = 'loading';
      })
      .addCase(retrieveUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.list = [];
        state.error = action.error;
      })
      .addCase(retrieveUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload.data;
      })
      .addCase(registerUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.success = false;
        state.error = action.error;
      })
      .addCase(registerUser.fulfilled, state => {
        state.status = 'idle';
        state.success = true;
      });
  },
});

const selectUser = (state: RootState): UserState => state.user;

export default userSlice.reducer;

export {selectUser, retrieveUsers, registerUser};
