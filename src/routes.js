import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Main from '~/pages/Main';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

import NewMeetup from '~/pages/NewMeetup';
import Search from '~/pages/Search';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        SignUp,

        User: createBottomTabNavigator(
          {
            NewMeetup,
            Main,
            Search,
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255, 0.3)',
              style: {
                backgroundColor: '#e5556e',
              },
            },
          },
        ),
      },
      {
        initialRouteName: isLoggedIn ? 'User' : 'SignIn',
      },
    ),
  );
}

// {
//   defaultNavigationOptions: {
//     header: null,
//   },
// },
