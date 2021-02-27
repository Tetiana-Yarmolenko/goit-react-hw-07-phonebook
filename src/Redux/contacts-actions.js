import { createAction } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid';

const addContact = createAction('contacts/add', (newName, phone) => {
    return {
        payload: {
            id: uuid(),
            name: newName,
            phone,
        },
    }})

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };