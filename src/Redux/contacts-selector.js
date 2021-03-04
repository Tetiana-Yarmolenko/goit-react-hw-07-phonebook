// import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.items;

const getVisibleContacts = state => {
  const allContacts = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  
  return allContacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
}

const selectors = { getLoading, getAllContacts, getFilter, getVisibleContacts };

export default selectors;