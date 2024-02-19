import Contact from '../Contact/Contact ';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} onDelete={() => onDelete(contact.id)} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
