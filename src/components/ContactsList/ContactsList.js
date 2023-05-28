import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  ContactsUl,
} from './ContactsList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import {  fetchContacts } from 'redux/contactsOperation';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsUl>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, phone }) => {
          return (
            <>
              <ContactItem key={id} id={id} name={name} phone={phone} />
            </>
          );
        })}
    </ContactsUl>
  );
};
export default ContactsList;
