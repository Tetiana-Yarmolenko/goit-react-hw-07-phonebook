import React from 'react'
import { connect } from 'react-redux';
import s from './ContactList.module.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import fadeTransition from '../Transition/fadeTransition.module.css'
import contactActions from '../../Redux/contacts-actions';

function ContactList({ contacts, onRemove }) {
  return (
    < TransitionGroup component="ul" className={s.list}>
      {contacts.map(({ name, phone, id }) => (
        <CSSTransition key={id} timeout={250} classNames={fadeTransition}>
          <li  className={s.item}>
          {name}: {phone}
          <button
            className={s.button}
            type="button"
            onClick={() => onRemove (id)}>
            Delete
          </button>
        </li>
        </CSSTransition>))}
    </ TransitionGroup>);
}


const getVisibleContacts = (allContacts, filter) => {
   const normalizedFilter = filter.toLowerCase();
   
  return allContacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  }

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
})
 

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactActions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);