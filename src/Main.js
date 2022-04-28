import {createStackNavigator, createAppContainer} from 'react-navigation';
import App from '../App';
import Splash from './Splash';

const MainNavigator = createStackNavigator(
  {
    Splash: {screen: Splash},
    App: {screen: App},
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);
export default createAppContainer(MainNavigator);
