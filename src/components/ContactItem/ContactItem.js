import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsOperation";
import{
    ContactsItem,
    ContactsText,
    ContactsSpan,
    ContactsBtn,
    ContactsDiv,
} from './ContactItem.styled';

const ContactItem = (name, phone, id) => {
 const dispatch = useDispatch();
    return (   <ContactsItem>
        <ContactsDiv>
          <ContactsText>
            <ContactsSpan> {name}</ContactsSpan>
            <ContactsSpan>{phone}</ContactsSpan>
          </ContactsText>
          <ContactsBtn
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </ContactsBtn>
        </ContactsDiv>
      </ContactsItem>)
  
};
 export default ContactItem;