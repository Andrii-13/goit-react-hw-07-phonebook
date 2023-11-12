import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContactsThunk, sendContactsThunk } from '../fetch/operations';

const handlePanding = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = false;
  state.contacts.items = action.payload;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = true;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },

  reducers: {
    addContacts(state, action) {
      state.contacts.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact(state, action) {
      state.contacts.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendContactsThunk.fulfilled, (state) => {
        state.contacts.isLoading = false;
        state.contacts.error = false;    
    })
      .addCase(getContactsThunk.fulfilled, handleFulfilled) 
      .addCase(getContactsThunk.rejected, handleRejected)                                           //для одного запиту
      .addMatcher(isAnyOf(getContactsThunk.pending, sendContactsThunk.pending), handlePanding) // якщо хочаб один запиn відбувається, то виконується
      .addMatcher(isAnyOf(getContactsThunk.rejected, sendContactsThunk.rejected), handleRejected)
    } ,
});

export const { addContacts, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
