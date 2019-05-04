import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';

import { Container } from './styles';

const TabIcon = ({ tintColor }) => <Icon name="magnify" size={20} color={tintColor} />;

const Search = () => (
  <Container>
    <Header title="Busca" />
  </Container>
);

Search.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Search;
