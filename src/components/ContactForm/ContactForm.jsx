import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

export default function ContactForm(params) {
    const fieldId = useId();
    const handleSubmit = (values, actions) => { 

        actions.resetForm();
    }

  return (
      <Formik initialValues={{}} onSubmit={handleSubmit}>
      <Form>
        <div>
                  <label htmlFor={`${fieldId}-name`}>Name</label>
                  <Field type="text"
                      name="name"
                      id={`${fieldId}-name`} />
          <ErrorMessage />
              </div>
              <div>
          <label htmlFor="">Number</label>
          <Field />
          <ErrorMessage />
              </div>
              <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
