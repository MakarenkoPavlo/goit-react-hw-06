import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const phoneSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={phoneSchema} onSubmit={onSubmit}>
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />

        <Field type="text" name="number" placeholder="Number" />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
