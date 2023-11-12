import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, sendContacts } from 'fetch/apiContacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    return await fetchContacts();
  }
);

export const sendContactsThunk = createAsyncThunk(
  'contacts/sendContact',
  async (values) => {
    return await sendContacts(values);
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
