import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  FontFamily,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {deviceHeight, deviceWidth} from './Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Map from './Map';
import HeatMap from './HeatmapView';
import WeatherPage from './Weather';

const Home = ({}) => {
  const [city, setCity] = useState('');
  const nav = useNavigation();
  const handlePress = () => {
    nav.navigate('Map');
  };
  const myFont = require('../assets/fonts/Raleway-VariableFont_wght.ttf');

  return (
    <SafeAreaView>
      <LinearGradient colors={['#076585', '#fff']} style={styles.container}>
        <View style={styles.Container}>
          {/* <ScrollView style={styles.Scroll} horizontal={true} pagingEnabled> */}
          <View style={styles.view1}>
            <View style={styles.TopContainer}>
              <TouchableOpacity>
                <Icon
                  name="ellipsis-vertical-outline"
                  size={30}
                  color="white"
                  onPress={() => nav.openDrawer()}
                />
              </TouchableOpacity>
              {/* <Text style={styles.WelcomTxt}>SizzleCast</Text> */}
              <TouchableOpacity>
                <Icon
                  name="location-outline"
                  size={30}
                  color="white"
                  onPress={handlePress}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.WeatherMainContainer}>
              {/* <Image
                  source={require('../assets/Home_icon.png')}
                  style={styles.Home_icon}
                /> */}
              {/* <Icon name="cloudy-night-outline" size={160} color="white" />
                <View style={styles.line}></View>
                <Text style={styles.Degreetxt}>20°C</Text>
                <View style={styles.line2}></View> */}
              <WeatherPage />
            </View>
            {/* Map Container */}
            {/* <View style={styles.containerMap}>
              <View style={styles.mapWindow}>
                <HeatMap />
              </View>
            </View> */}
          </View>
          {/* </ScrollView> */}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

//================================== STYLESHEET ==================================

const styles = StyleSheet.create({
  // bgimg: {
  //   height: deviceHeight,
  //   width: deviceWidth,
  //   backgroundColor: '#2f3542',
  // },
  Scroll: {
    flex: 1,
  },
  Container: {
    height: deviceHeight,
    width: deviceWidth,
    // backgroundColor: '#2f3542',
  },

  view1: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: 'absolute',
  },

  TopContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth - 20,
    alignSelf: 'center',
    marginTop: -5,
  },

  WelcomTxt: {
    fontSize: 20,
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 80,
  },

  Degreetxt: {
    color: 'white',
    fontSize: 54,
    alignSelf: 'center',
    fontFamily: 'myFont',
    paddingVertical: 5,
  },

  WeatherMainContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    height: 500,
    borderWidth: 2,
    borderColor: 'green',
  },
  SearchInput: {
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 16,
    borderWidth: 2,
    borderColor: 'green',
  },
  WeatherContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 16,
    paddingHorizontal: 10,
  },

  mapWindow: {
    width: '80%',
    height: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  containerMap: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '100%',
    // zIndex: 1,
    // marginTop: 20,
    maxHeight: 400,
    // borderWidth: 2,
    // borderColor: 'green',
  },
  Home_icon: {
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: 'blue',
  },
  line: {
    width: '30%',
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 70,
  },
  line2: {
    width: '30%',
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 40,
  },
});

export default Home;
