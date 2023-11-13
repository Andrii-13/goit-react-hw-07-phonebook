import React from 'react';
import { ErrorText } from './ErrMessage.styled';
import { useSelector } from 'react-redux';
import { selectorContactError } from 'redux/selectors';

const ErrMessage = () => {
  const error = useSelector(selectorContactError)
  console.log(error)
  return <ErrorText> {error.message} </ErrorText>;
};

export default ErrMessage;
