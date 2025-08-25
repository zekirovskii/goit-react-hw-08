// src/components/ContactList/ContactList.jsx
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

export default function ContactList({ contacts: fromProps }) {
  const dispatch = useDispatch();
  const fromStore = useSelector(selectFilteredContacts);
  const contacts = fromProps ?? fromStore; 

  return (
    <ul className={css.list}>
      {contacts.map(c => (
        <li key={c.id} className={css.item}>
          <div className={css.info}>
            <span className={css.name}>{c.name}</span>
            <span className={css.number}>{c.number ?? c.phone}</span>
          </div>
          <button className={css.button} onClick={() => dispatch(deleteContact(c.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
