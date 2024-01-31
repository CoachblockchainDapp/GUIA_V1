import React, { useState, useEffect } from "react";
import { View ,Text, ImageBackground, Image,Dimensions,StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { COLORS } from "../../constants/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { WebView } from 'react-native-webview';


const StorePage = ({ route }) => {
  const { storeData } = route.params;
  const { facebook, whatsapp, instagram } = route.params.storeData;
  const [socialMediaLinks, setSocialMediaLinks] = useState({});

  // Obtener información de la tienda
  const { name, city } = storeData;
  const latitude = 0;
  const longitude = 0;

  const openWebsite = () => {
    Linking.openURL(storeData.web);
  };

  const openFacebook = () => {
    Linking.openURL(storeData.facebook);
  };

  const getStoreLocation = () => {
    try {
      const { latitude, longitude } = storeData.location;
      return { latitude, longitude };
    } catch (error) {
      console.error("Error fetching store location:", error);
      return { latitude: 0, longitude: 0 }; // Valores predeterminados en caso de error
    }
  };

  // Función para obtener los enlaces de redes sociales desde Firestore
  const fetchSocialMediaLinks = async () => {
    const db = getFirestore();
    const storeDocRef = doc(
      db,
      "SocialMediaCollection",
      "socialMediaDocumentId"
    ); // Reemplaza con la referencia real

    try {
      const docSnap = await getDoc(storeDocRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSocialMediaLinks(data);
      } else {
        console.log("No se encontraron datos para redes sociales.");
      }
    } catch (error) {
      console.error("Error al obtener datos de redes sociales:", error);
    }
  };

  useEffect(() => {
    fetchSocialMediaLinks();
  }, []);

  const source = {
    uri: "http://samples.leanpub.com/thereactnativebook-sample.pdf",
    cache: true,
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.green }}>
      {/* Fondo de pantalla con la imagen de la tienda */}
      <ImageBackground
        source={{
          uri: "https://blogdelcalzado.files.wordpress.com/2012/03/image_thumb47.png?w=640",
        }}
        style={{
          flex: 0.35,
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderRadius: 150,
            padding: 40,
            margin: 0,
            alignItems: "center",
          }}
        >
          {/* Logo de la tienda en forma circular */}
          <Image
            source={{
              uri: "https://scontent.fntr10-1.fna.fbcdn.net/v/t39.30808-6/410247473_743821387785831_5982709755555413946_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEsBV-lNpttbyCwhMy7hYe-4LOYEe811-Tgs5gR7zXX5Cgv-OnvOa2wx1LmIvEr_QoBCVA4fnAV14cdZLNna4_E&_nc_ohc=bSYTq4K5avUAX-h6AwF&_nc_oc=AQkWYCi6qca7WehHBb9zRrMVKnVU_BVnoF-5K-SJY4AJs9CzY5429Yb6gz0Uy4Iqrl92e8lMGstjpkR5gOjdXST4&_nc_ht=scontent.fntr10-1.fna&oh=00_AfADARbYs9rOX9q8Z3TjSlRb_lCwmHQuQqV87Hdt53f-YQ&oe=658844AE",
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
            }}
          />
          {/* Botones de redes sociales */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size={30}
              color="green"
              onPress={() => {
                if (socialMediaLinks.whatsapp) {
                  // Abrir enlace de WhatsApp
                  Linking.openURL(socialMediaLinks.whatsapp);
                }
              }}
            />

            <FontAwesomeIcon
              icon={faFacebook}
              size={30}
              color="blue"
              onPress={() => {
                if (socialMediaLinks.facebook) {
                  // Abrir enlace de Facebook
                  Linking.openURL(socialMediaLinks.facebook);
                }
              }}
            />

            <FontAwesomeIcon icon={faInstagram} size={30} color="purple" />
          </View>
        </View>
        {/* Nombre de la tienda en la esquina inferior izquierda */}
        <Text
          style={{
            color: "white",
            fontSize: 40,
            margin: 10,
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          {name}
        </Text>
      </ImageBackground>

    
      <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }}/>
      
       
      

      {/* Recuadro con el mapa de Google */}
      <View
        style={{
          flex: 0.25,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          elevation: 8,
        }}
      >
        <MapView
          style={{ flex: 1, borderRadius: 20 }}
          initialRegion={{
            latitude: getStoreLocation().latitude,
            longitude: getStoreLocation().longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          <Marker
            coordinate={{
              latitude: getStoreLocation().latitude,
              longitude: getStoreLocation().longitude,
            }}
            title={name}
            description={city}
          />
        </MapView>
      </View>
    </View>
  );
};

export default StorePage;
const styles = StyleSheet.create({
  container: {
    flex: 0.40,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
