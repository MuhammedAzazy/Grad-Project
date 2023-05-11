import {View, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
const Map = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        userInterfaceStyle="dark"
        mapType="terrain"
        userLocationPriority="high"
        userLocationUpdateInterval={5000}>
        {/* <Marker coordinate={{latitude: 30.0444, longitude: 31.2357}} /> */}
      </MapView>
    </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    // width: '75%',
    // height: '40%',
    ...StyleSheet.absoluteFillObject,
  },
});
export default Map;
