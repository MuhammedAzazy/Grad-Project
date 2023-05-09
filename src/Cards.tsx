// import {
//   View,
//   Text,
//   ImageBackground,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import {deviceHeight, deviceWidth} from './Dimension';

// const Cards = ({name, image}) => {
//   return (
//     <TouchableOpacity style={styles.TouchableImgs} onPress={() => {}}>
//       <ImageBackground
//         source={image}
//         style={styles.imgs}
//         imageStyle={{borderRadius: 16}}
//       />

//       <View style={styles.viewTxt}>
//         <Text style={styles.nameTxt}> {name} </Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// //================================== STYLESHEET ==================================

// const styles = StyleSheet.create({
//   imgs: {
//     height: deviceHeight / 5,
//     width: deviceWidth / 2 - 50,
    
//   },
//   TouchableImgs: {
//     marginHorizontal: 10,
//     marginTop: 10,
//   },
//   viewTxt: {
//     position: 'absolute',
//     height: '100%',
//     width: '100%',
//   },
//   nameTxt: {
//     fontSize: 22,
//     width: '100%',
//     height: '100%',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     color: 'black',
//     fontWeight: 'bold',
//   },
// });
// export default Cards;
