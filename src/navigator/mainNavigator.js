import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps188577Navigator from '../features/Maps188577/navigator';
import Additem188576Navigator from '../features/Additem188576/navigator';
import Maps188572Navigator from '../features/Maps188572/navigator';
import UserProfile188568Navigator from '../features/UserProfile188568/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps188577: { screen: Maps188577Navigator },
Additem188576: { screen: Additem188576Navigator },
Maps188572: { screen: Maps188572Navigator },
UserProfile188568: { screen: UserProfile188568Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
