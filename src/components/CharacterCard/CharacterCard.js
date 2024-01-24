import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  HStack,
  Spinner,
} from '@chakra-ui/react';
import styles from './CharacterCard.module.scss';
import ImageFallback from '../ImageFallback/ImageFallback';

const CharacterCard = ({ name, image, }) => {
  return (
    <Card
      maxW='sm'
      borderRadius="10"
      border="0px"
      outline="0px"
      boxShadow="rgba(0, 0, 0, 0.35) 10px 10px 10px"
      width="340px"
    >
      <CardBody>
        <Image
          width={"100%"}
          height={"300px"}
          src={image}
          alt={name}
          borderRadius='lg'
          fallback={
            <ImageFallback />
          }
        />
        <Stack
          mt='6'
          spacing='3'
        >
          <Heading
            size='md'
          >
            {name}
          </Heading>
        </Stack>
      </CardBody>
    </Card>
  );
}
CharacterCard.propTypes = {};

CharacterCard.defaultProps = {};

export default CharacterCard;
