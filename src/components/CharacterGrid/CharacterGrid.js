import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Spinner, Grid, GridItem, HStack, Input, Button, Stack, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import styles from './CharacterGrid.module.scss';
import CharacterCard from '../CharacterCard/CharacterCard';
import { useIsVisible } from 'react-is-visible';

const CharacterGrid = ({
  data,
  loading,
  totalPages,
  currentPage,
  onNextPage,
  error
}) => {
  const preloaderRef = useRef();
  const isVisible = useIsVisible(preloaderRef);

  useEffect(() => {
    if (isVisible && totalPages != 0 && currentPage >= 2) {
      onNextPage();
    }
  }, [isVisible]);
  return (
    <Stack>
      {
        data.length === 0 ?
          loading == true ? <div
            className={styles.CharacterGrid__Preloader}
          >
            <Spinner
              color="red.500"
              size="xl"
              thickness="4px"
            />
          </div> :
            <div
              className={styles.CharacterGrid__Preloader}
            >
              your search didn't return any result
            </div> :
          <Grid
            h='auto'
            w="100%"
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(3, 1fr)',
              "2xl": 'repeat(4, 1fr)',
            }}
            gap={4}
          >{data?.map((tx) =>
            <GridItem
              colSpan={1}
              key={tx?.id}
              display="flex"
              justifyContent="center"
            >
              <CharacterCard
                key={tx?.id}
                name={tx?.name}
                image={tx?.image}
              />
            </GridItem>
          )}

          </Grid>
      }
      <div ref={preloaderRef} className={styles.HomePage__Preloader}>
        {currentPage < totalPages ?
          <Spinner
            color="red.500"
            size="xl"
            thickness="4px"
          />
          : loading === false && <div>You reached the end</div>
        }
      </div>

    </Stack>
  );

}

CharacterGrid.propTypes = {};

CharacterGrid.defaultProps = {};

export default CharacterGrid;
