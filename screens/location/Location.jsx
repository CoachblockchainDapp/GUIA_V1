import { StyleSheet, View, TTextInput, Button, Keyboard, SafeAreaView} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as LocationService from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections from "react-native-maps-directions";

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchedLocation, setSearchedLocation] = useState(null);
  const API_KEY = "AIzaSyAazzCzNpP0Ky6yHHOAfwuJnkWO9iiAxAU";

  useEffect(() => {
    (async () => {
      let { status } =
        await LocationService.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await LocationService.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    })();
  }, []);

  const handlePlaceSearch = async (query) => {
    try {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${query}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.status === "OK" && data.predictions.length > 0) {
        // Obtener el lugar seleccionado por el usuario
        const placeId = data.predictions[0].place_id;
        const placeDetailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${placeId}`;
        const detailsResponse = await fetch(placeDetailsUrl);
        const detailsData = await detailsResponse.json();
        if (detailsData.status === "OK") {
          const { lat, lng } = detailsData.result.geometry.location;
          const nearestLocation = { latitude: lat, longitude: lng };
          setSearchedLocation(nearestLocation);
          // Aquí puedes utilizar currentLocation y searchedLocation para realizar operaciones, como trazar la ruta
        
        }
      }
    } catch (error) {
      console.error("Error al buscar el establecimiento más cercano:", error);
    }
  };

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
    <View style={styles.container}>
      {currentLocation && (
        <MapView
          initialRegion={{
            latitude: currentLocation ? currentLocation.latitude : 0,
            longitude: currentLocation ? currentLocation.longitude : 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={styles.mapStyle}
          provider={MapView.PROVIDER_GOOGLE} // Agrega esta línea si estás utilizando Expo
          customMapStyle={[]}
          showsUserLocation
          followsUserLocation
          loadingEnabled
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsMyLocationButton
          showsCompass
          zoomEnabled
          minZoomLevel={10}
          maxZoomLevel={20}
          mapType="standard"
          // Asegúrate de reemplazar "TU_API_KEY" con tu propia clave de API de Google Maps
          apiKey="AIzaSyAazzCzNpP0Ky6yHHOAfwuJnkWO9iiAxAU"
        >
          {currentLocation && (
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="My Location"
            />
          )}
          {searchedLocation && (
            <Marker
              draggable
              coordinate={{
                latitude: searchedLocation.latitude,
                longitude: searchedLocation.longitude,
              }}
              onDragEnd={(e) => {
                const newCoords = e.nativeEvent.coordinate;
                // Actualizar el estado con las nuevas coordenadas
                setSearchedLocation(newCoords);
              }}
              title="Searched Location"
              pinColor="red"
            />
          )}
          {searchedLocation&&(<MapViewDirections
            origin={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            destination={{
              latitude: searchedLocation.latitude,
                longitude: searchedLocation.longitude,
            }}
           
            apikey="AIzaSyAazzCzNpP0Ky6yHHOAfwuJnkWO9iiAxAU"
            strokeColor="blue"
            strokeWidth={8}
          />)}
        </MapView>
      )}

      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'data' contiene la descripción del lugar seleccionado
          // 'details' contiene más detalles sobre el lugar si fetchDetails está configurado en true
          const selectedPlace = data.description;
          handlePlaceSearch(selectedPlace);
        }}
        query={{
          key: "AIzaSyAazzCzNpP0Ky6yHHOAfwuJnkWO9iiAxAU",
          language: "en",
        }}
        styles={{
          textInputContainer: {
            backgroundColor: "white",
            padding: 2,
            width: "100%",
  
          },
          textInput: {
            width: "100%",
            height: "auto",
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    position: "absolute",
    top:14,
    left: 16,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    marginTop:150,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Location;
