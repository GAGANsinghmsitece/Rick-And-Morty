import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.scss';
import { Alert, AlertIcon, AlertTitle, Stack } from '@chakra-ui/react';

const ErrorMessage = ({ error }) => (
  <Stack padding="10px">
    <Alert status='error' borderRadius="10px">
      <AlertIcon />
      <AlertTitle>{error}</AlertTitle>
    </Alert>
  </Stack>
);

ErrorMessage.propTypes = {};

ErrorMessage.defaultProps = {};

export default ErrorMessage;
