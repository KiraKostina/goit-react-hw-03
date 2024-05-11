import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
})

export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    // console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form>
        <div>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field type="text" name="name" id={`${fieldId}-name`} />
          <ErrorMessage name="name" component="span"/>
        </div>
        <div>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field type="tel" name="number" id={`${fieldId}-number`} />
          <ErrorMessage name="number" component="span"/>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
