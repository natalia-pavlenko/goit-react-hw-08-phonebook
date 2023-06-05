import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (number, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', number);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (numberId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${numberId}`);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
