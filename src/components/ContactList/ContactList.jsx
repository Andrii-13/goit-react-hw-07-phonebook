import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { selectorContactItems, selectorFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectorContactItems);
  const filterContacts = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const remainingContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    dispatch(deleteContact(remainingContacts));
  };


  const findContact = () => {
    console.log(contacts);
    console.log(filterContacts);

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
