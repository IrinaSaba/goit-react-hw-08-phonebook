import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', newUser);
      token.set(data.token);
      return data;
    } catch (error) {}
  }
);

export const logIn = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});
