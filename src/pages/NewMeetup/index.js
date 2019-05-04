import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '~/components/Header';
import { Container } from './styles';

const TabIcon = ({ tintColor }) => <Icon name="plus-box" size={20} color={tintColor} />;

const NewMeetup = () => (
  <Container>
    <Header title="Novo meetup" />
  </Container>
);

NewMeetup.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default NewMeetup;
