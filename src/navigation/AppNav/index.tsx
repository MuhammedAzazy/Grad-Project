import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
  HOME,
    SETTINGS,
      APPNAV
} from '../../config/navNames';
import {colors} from '../../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../Home';
import Settings from '../../Screens/Settings';
import { APPNAV, HOME, SETTINGS } from '../../config/navNames';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const AppNav = (navigation, route) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name={HOME}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Settings}
        name={SETTINGS}
        options={{headerShown: false}}
      />
       {/* <Stack.Screen
        component={PackageScreen}
        name={PACKAGESCREEN}
        options={{headerShown: false}}
      />
       <Stack.Screen
        component={GymAddScreen}
        name={GYMADDSCREEN}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};
export default function NestedNav() {
  return (
    <NavigationContainer>
          <Drawer.Navigator>
          <Drawer.Screen name="APPNAV" component={A} />
        <Drawer.Screen name="HOME" component={Home} />
        <Drawer.Screen name="SETTINGS" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};   