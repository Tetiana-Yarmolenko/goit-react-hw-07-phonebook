import { Component } from 'react';
import {CSSTransition} from 'react-transition-group'

import './App.css';
import s from "./App.module.css"

import Container from './Container/Container'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

import titleTransition from './Transition/titleAppear.module.css'

function App() {
  return (
    <>
      <Container>
        <CSSTransition
        in
        timeout={500}
        classNames={titleTransition}
         appear
         unmountOnExit>
        <h1 className={s.title}>Phonebook</h1>
      </CSSTransition>
        <ContactForm />
        <h2 className={s.contacts}>Contacts</h2>
        <Filter />
        <ContactList />
</Container>
    </>
  )
}

export default App;
