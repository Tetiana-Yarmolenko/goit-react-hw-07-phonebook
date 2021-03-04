import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import s from "./Filter.module.css";

import * as contactActions from '../../Redux/contacts-actions';
import contactsSelectors from '../../Redux/contacts-selector';
import  fadeTransition from '../Transition/fadeTransition.module.css'
const Filter = ({ value, onChange, items }) => {
    return (
        <CSSTransition
            in={items.length > 0}
        timeout={250}
        classNames={fadeTransition}
        unmountOnExit
      >
         <label className={s.filter}>
        Find contacts by name
        <input
        className={s.input}
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Enter name for Search'/>
            </label>
        </CSSTransition>)
}


const mapStateToProps = (state) => ({
    value: contactsSelectors.getFilter(state),
    items: contactsSelectors.getVisibleContacts(state),
})

const mapDispatchToProps = dispatch => ({
 onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps )(Filter)