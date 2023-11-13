import React from 'react';
import { ErrorText } from './ErrMessage.styled';
import { useSelector } from 'react-redux';
import { selectorContactError } from 'redux/selectors';

const ErrMessage = () => {
  const error = useSelector(selectorContactError)
  return <ErrorText> {error} </ErrorText>;
};

export default ErrMessage;
