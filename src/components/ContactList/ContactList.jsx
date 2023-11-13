import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectorContactItems, selectorFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectorContactItems);
  const filterContacts = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };


  const findContact = () => {
    const filterContact = contacts.filter(({ name }) => {
      return name.includes(filterContacts);
    });
    return filterContact;
  };
  return (
    <List>
      {[
        findContact().map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
          );
        }),
      ]}
    </List>
  );
};
