import React from 'react';
import { ErrorText } from './ErrMessage.styled';
import { useSelector } from 'react-redux';
import { selectContactError } from 'redux/selectors';

const ErrMessage = () => {
  const error = useSelector(selectContactError)
  console.log(error)
  return <ErrorText> {error.message} </ErrorText>;
};

export default ErrMessage;
