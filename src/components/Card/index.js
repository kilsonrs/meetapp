import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Cover, Details, Info, Title, Subscribers, Button,
} from './styles';

const Card = () => (
  <Container>
    <Cover source={{ uri: 'http://10.10.10.4:3333/files/1' }} />
    <Details>
      <Info>
        <Title>Meetup React Native</Title>
        <Subscribers>120 membros</Subscribers>
      </Info>
      <Button onPress={() => {}}>
        <Icon name="keyboard-arrow-right" size={20} color="#FFF" />
      </Button>
    </Details>
  </Container>
);

export default Card;
