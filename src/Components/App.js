import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';

import './App.css';
import s from "./App.module.css"

import Container from './Container/Container'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'

import titleTransition from './Transition/titleAppear.module.css'
import contactOperations from '../Redux/contacts-operations';
import contactsSelectors from '../Redux/contacts-selector';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
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
          {this.props.isLoading && <Loader
            type="Circles"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={2000} //2 secs
          />}
        <ContactList />
</Container>
    </>
  )
 }
}
const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(contactOperations.getContacts()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
