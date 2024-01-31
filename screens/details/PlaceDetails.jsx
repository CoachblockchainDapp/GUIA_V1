import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  NetworkImage,
  AppBar,
  HeightSpacer,
  ReusableText,
  DescriptionText,
  ReusableBtn,
  PopularList,
} from "../../components/index";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

const PlaceDetails = ({navigation}) => {
    const route = useRoute();
    const id = route.params
    const place = {
      "_id": "64d062a3de20d7c932f1f70a",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "title": "Catedral de León",
      "description": "La Catedral de León, ubicada en el corazón de la ciudad de León, Guanajuato, es un magnífico ejemplo de arquitectura religiosa colonial en México. Construida en el siglo XVIII, esta catedral impresiona con su imponente fachada y sus intrincados detalles interiores. La arquitectura barroca y neoclásica se mezcla para ofrecer a los visitantes una experiencia visual impresionante. La Catedral de León es un importante punto de referencia en la región y atrae a turistas y peregrinos por igual.",
      "contact_id": "64c5d95adc7efae2a45ec376",
      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/48/ca/d5/habitacion-terraza-doble.jpg?w=1400&h=-1&s=1",
      "rating": 4.7,
      "review": "1549 Reseñas",
      "latitude": 21.1234,
      "longitude": -101.6789,
      "location": "León, Guanajuato, México",
      "popular": [
        {
          "_id": "64c675be3cfa5e847bcd5439",
          "title": "Resort Familiar",
          "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/48/ca/d5/habitacion-terraza-doble.jpg?w=1400&h=-1&s=1",
          "rating": 4.6,
          "review": "12854 Reseñas",
          "location": "León,Gto"
        },
        {
          "_id": "64c675793cfa5e847bcd5436",
          "title": "Hotel Boutique Urbano Chic",
          "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/48/ca/d5/habitacion-terraza-doble.jpg?w=1400&h=-1&s=1",
          "rating": 4.8,
          "review": "2312 Reseñas",
          "location": "León,Gto"
        }
      ]
    }
    
  return (
    <ScrollView>
    <View>
      <NetworkImage
        source={place.imageUrl}
        width={"100%"}
        height={350}
        radius={30}
      />

      <AppBar
        top={40}
        left={20}
        right={20}
        title={place.title}
        color={COLORS.white}
        icon={"search1"}
        color1={COLORS.white}
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />
    </View>

    <View style={styles.description}>
      <HeightSpacer height={15} />
      <ReusableText
        text={place.location}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
      />

      <DescriptionText text={place.description} />

      <View style={{ alignContent: "center" }}>
        <HeightSpacer height={20} />

        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Lugares Populares"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity onPress={() => {}}>
            <Feather name="list" size={20} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={20} />

        <PopularList data={place.popular} />

        <ReusableBtn
          onPress={() => navigation.navigate("HotelSearch")}
          btnText={"Find Best Hotels"}
          width={SIZES.width - 40}
          backgroundColor={COLORS.blue}
          borderColor={COLORS.blue}
          borderWidth={0}
          textColor={COLORS.white}
        />
        <HeightSpacer height={50} />
      </View>
    </View>
  </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20
  }
})