import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654bf4b05b38a59f28eff58b.mockapi.io/api'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    // console.log(thunkAPI)
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
      console.log(thunkAPI.rejectWithValue(error.message));
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/sendContact',
  async (values, thunkAPI) => {
    try {
      const { data } = await axios.post(`/contacts`,
        values
      );
      console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);





// const customMidle = state => {
//   return next => {
//     return action => {
//       console.log(action);
//       return next(action);
//     };
//   };
// };

// export const getContactsThunk = () => {
//   const resp = async dispatch => {
//     try {
//       dispatch(contactSlice.actions.fetchingInProgress());
//       const data = await fetchContacts();
//       dispatch(contactSlice.actions.fetchingSuccess(data));
//     } catch (error) {
//       dispatch(contactSlice.actions.fetchingError(error));
//     }
//   };
//   return resp;
// };
