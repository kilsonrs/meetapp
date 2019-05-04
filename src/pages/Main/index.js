import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CardContainer, ListTitle } from './styles';

import Header from '~/components/Header';
import Card from '~/components/Card';

const TabIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;

export default class Main extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Header title="Início" />
        <ListTitle>Inscrições</ListTitle>
        <CardContainer>
          <Card />
        </CardContainer>
        <ListTitle>Próximos meetups</ListTitle>
        <CardContainer>
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <ListTitle>Recomendados</ListTitle>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Container>
    );
  }
}
