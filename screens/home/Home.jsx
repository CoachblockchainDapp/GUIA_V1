import {ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import { ReusableText, HeightSpacer, Recommendations } from "../../components";
import Places from '../../components/Home/Places'
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import BestHotels from "../../components/Home/BestHotels";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../../assets/images/LEONGTO.png")} // Ruta de tu imagen de fondo
      style={stylesI.background}
    >
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Bienvenido!"}
            family={"regular"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={SIZES.xLarge} />

        <ReusableText
          text={"Lugares de Interes"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />
        
        <Places />

        <HeightSpacer height={15}/>

        <Recommendations />

        <HeightSpacer height={30}/>

        <BestHotels />

        
      </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

const stylesI = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  // Otros estilos que puedas necesitar
});

export default Home;