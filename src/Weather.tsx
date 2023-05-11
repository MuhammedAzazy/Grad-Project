import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const API_KEY = '68dfb449c7fb322d6bc15efc398f8fc5';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=${API_KEY}`;

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  async function fetchWeatherData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <Text>Loading weather data...</Text>;
  }

  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  const {weather} = weatherData;
  const {icon} = weather[0];

  let iconName;
  switch (icon) {
    case '01d':
      iconName = 'sunny-outline';
      break;
    case '02d':
      iconName = 'partly-sunny-outline';
      break;
    case '03d':
      iconName = 'cloud-outline';
      break;
    case '04d':
      iconName = 'cloudy-outline';
      break;
    case '09d':
    case '10d':
      iconName = 'rainy-outline';
      break;
    case '11d':
      iconName = 'thunderstorm-outline';
      break;
    case '13d':
      iconName = 'snow-outline';
      break;
    case '50d':
      iconName = 'cloudy-outline';
      break;
    default:
      iconName = 'partly-sunny-outline';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weatherData.name}</Text>
      <Icon name={iconName} size={128} color="white" />
      <Text style={styles.weatherDescription}>
        {weatherData.weather[0].description}
      </Text>
      <View style={styles.Line}></View>
      <Text style={styles.temperature}>
        {Math.round(weatherData.main.temp - 273.15)}°C
      </Text>
    </View>
  );
}
/**
|--------------------------------------------------
|                   StyleSheet
|--------------------------------------------------
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
  cityName: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  weatherDescription: {
    fontSize: 24,
    marginBottom: 8,
    color: 'white',
  },
  temperature: {
    fontSize: 64,
    // fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  Line: {
    borderWidth: 1,
    borderColor: 'white',
    width: '40%',
  },
});
