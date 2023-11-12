import React from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';
import { Section } from './Section/Section.styled';
import { Loader } from './Loader/loader';
import { selectorContactError, selectorContactIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';
import ErrMessage from './ErrMessage/ErrMessage';

export const App = () => {
  const isLoading = useSelector(selectorContactIsLoading);
  const error = useSelector(selectorContactError);
  return (
    <Container>
      <Section>
        <TitlePhonebook title="Phonebook" />
        <ContactForm />
      </Section>
      <Section>
        <TitleContacts title="Contacts" />
        <Filter />
        <ContactList />
       {isLoading && <Loader/>}
       {error && <ErrMessage/>}
      </Section>
    </Container>
  );
};
