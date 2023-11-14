import { createSelector } from "@reduxjs/toolkit";

export const selectContactItems = state => state.contacts.contacts.items;
export const selectContactIsLoading = state => state.contacts.contacts.isLoading;
export const selectContactError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector([ selectContactItems, selectFilter],
    (contacts, filter) => {
        console.log('first')
      return contacts.filter(contact => contact.name.toLowerCase()
       .includes(filter.toLowerCase()))
    }
   )