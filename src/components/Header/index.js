import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container, Profile, Title } from './styles';

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <Profile onPress={() => {}}>
      <Icon name="account-outline" size={24} color="#FFF" />
    </Profile>
  </Container>
);

export default Header;
