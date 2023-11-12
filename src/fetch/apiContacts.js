import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://654bf4b05b38a59f28eff58b.mockapi.io/api/contacts'
  );
  return data;
};

export const sendContacts = async values => {
  console.log(values);
  await axios.post(
    'https://654bf4b05b38a59f28eff58b.mockapi.io/api/contacts',
    JSON.stringify(values),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
