import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .matches(/^\+?[0-9\s-]+$/, "Invalid phone number"),
});

export default function ContactForm () {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          const newContact = {
            id: nanoid(),
            name: values.name.replace(/\b\w/g, (l) => l.toUpperCase()),
            number: values.number,
          };

          handleAddContact(newContact);
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field
              type="text"
              name="addUser"
              id={nameId}
            />
            <ErrorMessage
              name="addUser"
              component="span"
            />
          </div>

          <div>
            <label htmlFor={numberId}>Number</label>
            <Field
              type="text"
              name="number"
              id={numberId}
            />
            <ErrorMessage
              name="addNumber"
              component="div"
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}