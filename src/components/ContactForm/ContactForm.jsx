import { FieldEl, FormEl } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactSlice';
import { Formik } from 'formik';
import { object, string, number } from 'yup';
import FormError from 'components/FormError/FormError';

const schema = object({
  name: string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  number: number('must be a number').min(2, 'Too Short!').required('Required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    console.log(values);
    if (
      contacts.find(
        ({ name: contactName }) =>
          contactName.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(
      addContacts({ id: nanoid(5), name: values.name, number: values.number })
    );
  };

  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormEl autoComplete="off">
        <label htmlFor="name">Name</label>
        <div>
          <FieldEl
            type="text"
            id="name"
            name="name"
            placeholder="Enter name ..."
          />
          <FormError name="name" />
        </div>

        <label htmlFor="number">Number</label>
        <div>
          <FieldEl
            type="tel"
            name="number"
            id="number"
            placeholder="tel: xxx-xx-xx"
          />
          <FormError name="number" />
        </div>
        <button type="submit">Add contact</button>
      </FormEl>
    </Formik>
  );
};
