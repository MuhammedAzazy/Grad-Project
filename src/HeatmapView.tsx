import {View, StyleSheet} from 'react-native';
import React from 'react';
import MapView, {Heatmap} from 'react-native-maps';

const heatMapData = [
  {latitude: 24.7136, longitude: 46.6753}, //Riyadh, Saudi Arabia
  {latitude: 25.2048, longitude: 55.2708}, //Dubai, United Arab Emirates
  {latitude: 25.2854, longitude: 51.531}, //Doha, Qatar
  {latitude: 30.0444, longitude: 31.2357}, //Cairo, Egypt
  {latitude: 35.6892, longitude: 51.389}, //Tehran, Iran
  {latitude: 33.8938, longitude: 35.5018}, //Beirut, Lebanon
  {latitude: 31.9632, longitude: 35.9307}, //Amman, Jordan
  {latitude: 41.0082, longitude: 28.9784}, //Istanbul, Turkey
  {latitude: 33.5731, longitude: 7.5898}, //Casablanca, Morocco
  {latitude: 36.7529, longitude: 3.042}, //Algiers, Algeria
];
const gradient = {
  colorMapSize: 256,
  colors: ['#8BC34A', '#FF9800', '#F44336'],
  startPoints: [0.2, 0.5, 0.8],
};
const HeatMap = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Heatmap
          points={heatMapData}
          radius={50}
          opacity={0.7}
          gradient={gradient}
        />
      </MapView>
    </View>
  );
};

// const HEATMAP_DATA_URL =
//   'https://maps.googleapis.com/maps/api/place/heatmap/json?location=25.2048,55.2708&radius=1000000&type=restaurant&key=AIzaSyA27ZrEreG95s-DXYoQoO9ZU1zTrpStd3o';

// export default function LiveHeatmap() {
//   const heatMapData = [
//     {latitude: 24.7136, longitude: 46.6753}, //Riyadh, Saudi Arabia
//     {latitude: 25.2048, longitude: 55.2708}, //Dubai, United Arab Emirates
//     {latitude: 25.2854, longitude: 51.531}, //Doha, Qatar
//     {latitude: 30.0444, longitude: 31.2357}, //Cairo, Egypt
//     {latitude: 35.6892, longitude: 51.389}, //Tehran, Iran
//     {latitude: 33.8938, longitude: 35.5018}, //Beirut, Lebanon
//     {latitude: 31.9632, longitude: 35.9307}, //Amman, Jordan
//     {latitude: 41.0082, longitude: 28.9784}, //Istanbul, Turkey
//     {latitude: 33.5731, longitude: 7.5898}, //Casablanca, Morocco
//     {latitude: 36.7529, longitude: 3.042}, //Algiers, Algeria
//   ];

//   const [heatmapData, setHeatmapData] = useState([]);

//   useEffect(() => {
//     // Fetch the initial heatmap data
//     fetchHeatmapData();

//     // Set up a timer to update the heatmap data every 5 seconds
//     const timerId = setInterval(fetchHeatmapData, 5000);

//     // Clean up the timer on unmount
//     return () => clearInterval(timerId);
//   }, []);

//   async function fetchHeatmapData() {
//     try {
//       const response = await fetch(HEATMAP_DATA_URL);
//       const data = await response.json();
//       setHeatmapData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   const gradient = {
//     colorMapSize: 256,
//     colors: ['#8BC34A', '#FF9800', '#F44336'],
//     startPoints: [0.2, 0.5, 0.8],
//   };

//   return (
//     <View style={styles.container}>
//       <MapView style={styles.map}>
//         <Heatmap
//           points={heatmapData}
//           gradient={gradient}
//           radius={50}
//           opacity={0.8}
//         />
//       </MapView>
//     </View>
//   );
// }

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
export default HeatMap;
