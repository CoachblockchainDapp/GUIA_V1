import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ReusableText, PlaceNameScreen, HeightSpacer, RandomStatesScreen } from '../../components/index';
import { COLORS, SIZES } from '../../constants/theme';
import { IMAGES } from '../../constants/images';
import { useNavigation } from '@react-navigation/native';
import Svg, { Polygon } from 'react-native-svg';
import styles from "./slides.style";
import { AntDesign } from "@expo/vector-icons";

const WelcomeScreen = ({ item }) => {
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1 }}>
      <Svg style={StyleSheet.absoluteFill}>
        <Polygon
          points={`${SIZES.width * 0.6},${0} ,${SIZES.width},${0} ,${SIZES.width},${SIZES.height + 100}, ${SIZES.width * 0.1},${SIZES.height + 100}`}
          fill={COLORS.green}
        />
      </Svg>

      <HeightSpacer height={'10%'} />

      <ReusableText
        text={" ¡BIENVENIDO!"}
        size={SIZES.xLarge}
        color={COLORS.yellow}
        align="right"
        marginHorizontal={SIZES.width * 0.009}
      />



      <View style={styles.container}>
        <HeightSpacer height={'15%'} />
        <Image source={IMAGES.logo_white} style={styles.logo} />
        <HeightSpacer height={'20%'} />

        <ReusableText
          text={"Lo que buscas, ¡aquí está!"}
          size={SIZES.xLarge}
          color={COLORS.yellow}
          align="right"
          marginHorizontal={SIZES.width * 0.45}
          style={{ marginRight: "40%" }}
        />
        <HeightSpacer height={'10%'} />


        <View style={styles.containerSocial}>

          <HeightSpacer height={'10%'} />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
            <AntDesign name="search1" size={26} color={COLORS.black} style={styles.icon} />
            <Text style={styles.text}>Búsqueda</Text>
          </TouchableOpacity>
          <HeightSpacer height={'120%'} />

          <RandomStatesScreen />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
