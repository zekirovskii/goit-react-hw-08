import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const q = filter.trim().toLowerCase();
    return contacts.filter(
      c =>
        c.name.toLowerCase().includes(q) ||
        (c.number ?? c.phone ?? '').toLowerCase().includes(q)
    );
  }
);
