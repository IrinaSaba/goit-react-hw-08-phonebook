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

axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {}
});

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, credentials) => {
    try {
      await axios.post('/users/logout');
    } catch (error) {}
  }
);
