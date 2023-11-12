import { createSlice} from '@reduxjs/toolkit';
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
      // .addCase(sendContactsThunk.pending, handlePanding)
      .addCase(getContactsThunk.pending, handlePanding) //для одного запиту
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected);
    //.addMatcher(isAnyOf(getContactsThunk.pending, getContactsThunk.rejected, handleRejected), handlePanding)   // якщо хочаб один запи відбувається, то виконується
  },
});

export const { addContacts, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
