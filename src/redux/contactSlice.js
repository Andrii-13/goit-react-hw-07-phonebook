import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from 'components/apiContacts';

const handlePanding = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = action.payload;
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

  reducers: {
    // addContacts(state, action) {
    //   state.contacts.items.push({
    //     id: action.payload.id,
    //    ,
    //   });
    // },
    deleteContact(state, action) {
      state.contacts.items = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload; 
        state.contacts.items.push(action.payload)
    })
      .addCase(fetchContacts.fulfilled, handleFulfilled) 
      .addCase(fetchContacts.rejected, handleRejected)                                           //для одного запиту
      .addMatcher(isAnyOf(fetchContacts.pending, addContact.pending), handlePanding) // якщо хочаб один запиn відбувається, то виконується
      .addMatcher(isAnyOf(fetchContacts.rejected, addContact.rejected), handleRejected)
    } ,
});

export const { addContacts, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
