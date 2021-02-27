import { Component } from 'react'
import { connect } from 'react-redux';
import {CSSTransition} from 'react-transition-group'
import contactActions from '../../Redux/contacts-actions';

import s from "./ContactForm.module.css"
import Alert from '../Alert/Alert'
import alertTransition from '../Transition/alertTransition.module.css'


class ContactForm extends Component {
    state = {
    name: '',
    phone: '',
    massage: '',
    showAlert: false,
    }

    toggleAlert = message => {
    this.setState({ showAlert: true, massage: message });
    setTimeout(() => this.setState({showAlert: false}), 1500);
  };

    handleChangeForm = ({ target }) => {
        const { name,  value } = target
        this.setState({[name]: value})
    } 
    
    handleFormSubmit = (event) => {
        event.preventDefault()
        const { name, phone } = this.state;
        const { contacts } = this.props;
        
        if (!name || !phone) {
            this.setState({ showAlert: true, massage: 'Some field is empty' });
            setTimeout(() => this.setState({ showAlert: false }), 1500);
            return; }

       if (contacts.find(({ name }) => name.toLowerCase() === this.state.name.toLowerCase(),
       )) {
           this.toggleAlert('Contact is already exist');
           this.resetForm();
      return;} 
    
        this.props.onSubmit(name, phone);
        this.resetForm();
    }

    resetForm = () => this.setState({
        name: '',
        phone: ''
    });


    render() {
        const {name, phone, massage, showAlert} = this.state
        return (<>
            <CSSTransition
          in={showAlert}
          timeout={250}
          classNames={alertTransition}
                unmountOnExit>
          <Alert massage={massage}/>
        </CSSTransition>
            <form className={s.form}
            onSubmit={this.handleFormSubmit}>
            <label className={s.label}>
                Name
            <input
                    className={s.input}
                    text='text' name='name'
                    placeholder="Enter name"
                    value={name}
                    onChange={this.handleChangeForm} />
            </label>
            <label className={s.label}>
                Phone
            <input
                    className={s.input}
                    text='tel' name='phone'
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={this.handleChangeForm} />
                </label>
            <button className={s.button} type="submit">Add contact</button>
            </form>
        </>)
    }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (newName, phone) => dispatch(contactActions.addContact(newName,  phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);