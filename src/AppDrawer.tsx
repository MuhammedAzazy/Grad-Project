import React from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Home from './Home';
import SearchCity from './SearchCity';

const Drawer = createDrawerNavigator();
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Options</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const AppDrawer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Drawer.Navigator
        initialRouteName="Feed"
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          headerStyle: {
            height: 60,
            backgroundColor: '#2f3542',
          },
          drawerStyle: {
            backgroundColor: '#076585',
            width: 240,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabelStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white',
            },
          }}
        />
        <Drawer.Screen
          name="Search"
          component={SearchCity}
          options={{
            drawerLabelStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white',
            },
          }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

/**
|--------------------------------------------------
|                   StyleSheet
|--------------------------------------------------
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#076585',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,

    elevation: 2,
  },
  drawerStyle: {
    backgroundColor: 'black',
  },
  drawerHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default AppDrawer;
