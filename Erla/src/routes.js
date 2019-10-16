import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen/index';
import LoginScreen from './screens/LoginScreen/index';

const Routes = createStackNavigator({
    HomeScreen,
    LoginScreen,
});

const RoutesCtn = createAppContainer(Routes);

export default RoutesCtn;