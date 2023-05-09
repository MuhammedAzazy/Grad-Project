import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {deviceHeight, deviceWidth} from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

const SearchCity = () => {
  const nav = useNavigation();
  return (
    <View style={styles.Container}>
      <View style={styles.TopContainer}>
        <Icon
          name="ellipsis-vertical-outline"
          size={30}
          color="white"
          onPress={() => nav.openDrawer()}
          style={styles.MenuIcon}
        />
      </View>
      <View style={styles.viewTxt}>
        <View style={styles.searchText}>
          <TextInput
            onChangeText={(val: React.SetStateAction<string>) => setCity(val)}
            placeholder="Search City"
            placeholderTextColor="white"
            style={styles.SearchInput}
          />

          <TouchableOpacity onPress={() => {}}>
            <Icon name="search" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

//====== StyleSheet ========

const styles = StyleSheet.create({
  Container: {
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: '#2f3542',
  },
  TopContainer: {
    borderWidth: 2,
    borderColor: 'red',
  },
  view1: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'absolute',
  },
  MenuIcon: {
    marginLeft: 10,
    paddingVertical: 10,
  },

  viewIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 20,
  },

  userImg: {
    height: 46,
    width: 46,
    borderRadius: 16,
  },

  WelcomTxt: {
    fontSize: 40,
    color: 'white',
  },

  SearchTxt: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  viewTxt: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  SearchInput: {
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 16,
  },
  searchText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  locationTxt: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
    marginTop: 160,
  },
});
export default SearchCity;
