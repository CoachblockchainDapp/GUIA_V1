import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
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

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const country = {
    _id: "64c62bfc65af9f8c969a8d04",
    country: "Mexico",
    description:
      "León, Guanajuato, es una ciudad vibrante y culturalmente rica en el centro de México. Con una historia que se remonta a la época colonial, la ciudad es conocida por su industria del calzado de renombre mundial y su impresionante arquitectura. Los visitantes pueden disfrutar de una variedad de experiencias, desde explorar sus majestuosas catedrales y museos históricos hasta disfrutar de la vibrante vida nocturna y la deliciosa cocina local. Con su cálido clima y su gente acogedora, León es un destino turístico popular para viajeros de todo el mundo.",
    imageUrl:
      "https://www.mexicodesconocido.com.mx/wp-content/uploads/2012/01/leon-cosas-que-hacer-pueblo-magico-1600.jpg",
    popular: [
      {
        _id: "64c631650298a05640539adc",
        title: "Catedral Basílica Metropolitana de León",
        imageUrl:
          "https://github.com/MarquezFigueroa/LOGOS_BK/blob/main/01%20%20Catedral%20%20JPG.jpg?raw=true",
        rating: 4.7,
        review: "1204 Reseñas",
        location: "León, Guanajuato, México",
      },
      {
        _id: "64d062a3de20d7c932f1f70a",
        title: "Plaza Principal de León",
        imageUrl:
          "https://github.com/MarquezFigueroa/LOGOS_BK/blob/main/03%20%20Presidencia%20Municipal%20%20JPG.jpg?raw=true",
        rating: 4.8,
        review: "1452 Reseñas",
        location: "León, Guanajuato, México",
      },
    ],
    region: "León Guanajuato, México",
  };
  
  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={country.country}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={country.description} />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />

          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Destinos populares"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={country.popular} />

          <ReusableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Encuentra Hoteles"}
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
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
