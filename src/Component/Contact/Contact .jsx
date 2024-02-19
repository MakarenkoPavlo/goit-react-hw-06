const Contact = ({ name, number, onDelete }) => {
  return (
    <div>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;
