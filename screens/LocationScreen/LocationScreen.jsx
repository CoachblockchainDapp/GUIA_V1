import React, { useEffect, useState } from "react";
import {  View, Text, Image, StyleSheet, FlatList } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as LocationService from "expo-location";
import apikey from "../../utils/APIKEY"

const LocationScreen = ({ searchCriteria }) => {
  const [zapaterias, setZapaterias] = useState([]);

  useEffect(() => {
    // Llamada a la API de Google Places para buscar zapaterías en una ubicación específica
    fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Zapaterias&location=latitud,longitud&radius=1000&key=TU_CLAVE_API`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.results && data.results.length > 0) {
          setZapaterias(
            data.results.map((place) => ({
              title: place.name,
              latitude: place.geometry.location.lat,
              longitude: place.geometry.location.lng,
              image: place.photos ? place.photos[0].getUrl() : null,
            }))
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching zapaterias:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <MapView>
        {zapaterias.map((zapateria, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: zapateria.latitude,
              longitude: zapateria.longitude,
            }}
            title={zapateria.title}
          />
        ))}
      </MapView>

      <FlatList
        data={zapaterias}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.zapateriaInfo}>
            {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: 300,
  },
  zapateriaInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default LocationScreen;
