import { connect } from 'react-redux';
import s from "./Filter.module.css";

import contactActions from '../../Redux/contacts-actions';

const Filter = ({ value, onChange }) => {
    return (
         <label className={s.filter}>
        Find contacts by name
        <input
        className={s.input}
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Enter name for Search'/>
        </label>)
}


const mapStateToProps = (state) => ({
    value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
 onChange: e => dispatch(contactActions.changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps )(Filter)