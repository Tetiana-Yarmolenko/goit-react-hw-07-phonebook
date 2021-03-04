import React from 'react'
import { connect } from 'react-redux';
import s from './ContactList.module.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import fadeTransition from '../Transition/fadeTransition.module.css'
import contactOperations from '../../Redux/contacts-operations';
import contactsSelectors from '../../Redux/contacts-selector';

function ContactList({ contacts, onRemove }) {
  return (
    < TransitionGroup component="ul" className={s.list}>
      {contacts.length > 0 ?
       (contacts.map(({ name, phone, id }) => (
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
        </CSSTransition>))
      ):(<CSSTransition
          key={1}
          timeout={700}
          classNames="message-empty"
          unmountOnExit
        >
          <p>Contact list empty for now</p>
        </CSSTransition>)}
    </ TransitionGroup>);
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
})
 
const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(contactOperations.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);