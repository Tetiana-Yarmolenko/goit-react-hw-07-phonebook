import axios from 'axios';
import {
    getContactRequest,
    getContactSuccess,
    getContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3223';


const getContacts = () => async dispatch => {
    dispatch(getContactRequest());

    try {
        const { data } = await axios.get('/contacts');
        dispatch(getContactSuccess(data));
    } catch (error) {
        dispatch(getContactError(error));
    }
}


const addContact = (name, phone) => dispatch => {
    const contact = {name, phone };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
    
}

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
}


export default { getContacts, addContact, deleteContact };