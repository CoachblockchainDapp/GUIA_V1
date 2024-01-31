import React, { useEffect, useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const PlaceNameScreen = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [placeName, setPlaceName] = useState('');

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation(location.coords);
        getPlaceName(location.coords.latitude, location.coords.longitude);
      }
    } catch (error) {
      console.error('Error al obtener la ubicación: ', error);
    }
  };

  const getPlaceName = async (latitude, longitude) => {
    const API_KEY = 'AIzaSyAazzCzNpP0Ky6yHHOAfwuJnkWO9iiAxAU'; // Tu clave de API de Google Maps
  
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
  
        // Buscar el componente que corresponde a la ciudad
        const cityComponent = addressComponents.find(
          (component) => component.types.includes('locality')
        );
  
        // Obtener el nombre de la ciudad
        if (cityComponent) {
          const cityName = cityComponent.long_name;
          setPlaceName(cityName);
        } else {
          setPlaceName('Nombre de ciudad no encontrado');
        }
      } else {
        setPlaceName('Nombre de lugar no encontrado');
      }
    } catch (error) {
      console.error('Error al obtener el nombre del lugar:', error);
      setPlaceName('Error al obtener el nombre del lugar');
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>{placeName}</Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute', // Coloca el componente de forma absoluta
    top: '10%', // Ajusta la distancia desde la parte superior (5% de la altura de la pantalla)
    right: '40%', // Ajusta la distancia desde la derecha (5% del ancho de la pantalla)
    backgroundColor: 'transparent', // Podrías personalizar este estilo
    padding:50,
  },
  textStyle: {
    fontFamily:'aAntara',
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
});



export default PlaceNameScreen;
