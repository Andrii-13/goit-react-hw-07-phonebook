import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'redux/operations';

const handlePanding = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;  
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
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

  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => { 
        const index = state.contacts.items.findIndex(
          item => item.id === action.payload.id
          );
        state.contacts.items.splice(index, 1);
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {state.contacts.items = action.payload})
      .addCase(fetchContacts.rejected, handleRejected)                                         //для одного запиту
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending, deleteContact.pending),handlePanding) // якщо хочаб один запиn відбувається, то виконується
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected, deleteContact.rejected),handleRejected)
      .addMatcher(isAnyOf(addContact.fulfilled, deleteContact.fulfilled, fetchContacts.fulfilled),handleFulfilled)
  },
});

export const contactReducer = contactSlice.reducer;
