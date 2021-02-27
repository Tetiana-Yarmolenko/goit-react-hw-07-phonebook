import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './contacts-actions';
import initialContacts from '../data/contacts.json';


const items = createReducer( initialContacts, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload
})

export default combineReducers({
   items,
   filter 
})