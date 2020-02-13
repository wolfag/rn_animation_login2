import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SigninComponent from './SigninComponent';
import SignupComponent from './SignupComponent';
import SplashComponent from './SplashComponent';

const StackNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashComponent,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignupScreen: {
    screen: SignupComponent,
    navigationOptions: {
      headerShown: false,
    },
  },
  SigninScreen: {
    screen: SigninComponent,
    navigationOptions: {
      headerShown: false,
    },
  },
});

export default createAppContainer(StackNavigator);
