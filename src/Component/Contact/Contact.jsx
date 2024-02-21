import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice.js";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div>
      <span>{contact.name}</span>
      <span>{contact.phoneNumber}</span>
      <button onClick={handleDeleteContact}>Delete</button>
    </div>
  );
}


export default Contact;