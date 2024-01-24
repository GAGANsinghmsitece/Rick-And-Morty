import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './HomePage.module.scss';
import { Spinner, Grid, GridItem, HStack, Input, Button, Stack, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons'
import { useIsVisible } from 'react-is-visible';
import useFetchCharacters from '../../hooks/useFetchCharacters';
import CharacterCard from '../CharacterCard/CharacterCard';
import useFilterCharacters from '../../hooks/useFilterCharacters';
import CharacterGrid from '../CharacterGrid/CharacterGrid';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
const HomePage = () => {
  const [character, fetchCharacters, fetchCharactersByPage] = useFetchCharacters();
  const [input, setInput, filteredCharacters, , fetchNextPage] = useFilterCharacters();

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className={styles.HomePage} data-testid="HomePage">
      <div className={styles.HomePage__Header}>
        Rick And Morty
      </div>
      <Stack
        padding="10px"
      >
        <HStack
          gap="0px"
          border="2px solid #2b2b3a"
          borderRadius="10px"
          overflow="0px"
        >
          <Input
            border="0px"
            outline="0px"
            placeholder="Search Characters"
            _placeholder={{ color: '#2b2b3a' }}
            borderRadius={"0px"}
            borderLeftRadius={"10px"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            leftIcon={<Search2Icon />}
            background="transparent"
            borderRadius="0px"
            borderRightRadius="10px"
          />
        </HStack>
      </Stack>

      {
        input != "" ?
          filteredCharacters.error == "" ?
            <CharacterGrid
              data={filteredCharacters?.characters}
              totalPages={filteredCharacters?.totalPage}
              currentPage={filteredCharacters?.currentPage}
              onNextPage={fetchNextPage}
              loading={filteredCharacters?.loading}
              error={filteredCharacters?.error}
            /> : <ErrorMessage error={filteredCharacters.error} />
          : character.error == "" ? <CharacterGrid
            data={character?.characters}
            totalPages={character?.totalPages}
            currentPage={character?.currentPage}
            onNextPage={fetchCharactersByPage}
            loading={character?.loading}
            error={character?.error}
          /> : <ErrorMessage error={character.error} />
      }

    </div >
  );

}
HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
