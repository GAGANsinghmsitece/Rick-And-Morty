import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageFallback.module.scss';
import { Spinner, Stack } from '@chakra-ui/react';

const ImageFallback = () => (
  <Stack
    height="300px"
    justifyContent={"center"}
    alignItems={"center"}
  >
    <Spinner
      size="xl"
      color="blue.500"
      thickness="4px"
    />
  </Stack>
);

ImageFallback.propTypes = {};

ImageFallback.defaultProps = {};

export default ImageFallback;
