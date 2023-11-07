import React from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container.styled';
import { Section } from './Section/Section.styled';

export const App = () => {
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
      </Section>
    </Container>
  );
};
