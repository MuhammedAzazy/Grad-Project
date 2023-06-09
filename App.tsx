import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NestedNav from './src/navigation/AppNav';
import LoadingScreen from './src/loadingScreen';
import AppDrawer from './src/AppDrawer';
import Home from './src/Home';
import Map from './src/Map';
import HeatMap from './src/HeatmapView';
import WeatherPage from './src/Weather';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={AppDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Heatmap" component={HeatMap} />
        {/* <Stack.Screen name="Weather" component={WeatherPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
