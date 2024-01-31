import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Alert,SafeAreaView } from 'react-native';
import { HeightSpacer, ReusableText, ReusableBtn, PlaceNameScreen } from '../../components/index';
import { COLORS, SIZES } from '../../constants/theme';
import { IMAGES } from '../../constants/images';
import { useNavigation } from '@react-navigation/native';
import Svg, { Polygon } from 'react-native-svg';
import * as LocationService from 'expo-location';
import SocialMedia from '../Buttons/SocialMedia';
import styles from "./slides.style";

const Slides = ({ item }) => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [isLocationUpdating, setIsLocationUpdating] = useState(false);


  const icons = [
    { name: 'Facebook', icon: IMAGES.facebook_icon },
    { name: 'gmail', icon: IMAGES.gmail_icon },
    { name: 'arrow', icon: IMAGES.arraw_icon },
  ];

  const handlePressGo = async () => {
    try {
      const { status } = await LocationService.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setIsLocationUpdating(true);
        const location = await LocationService.getCurrentPositionAsync({});
        setLocation(location);
        setIsLocationUpdating(false);
        navigation.navigate('Location');
      } else {
        Alert.alert('Error', 'No se pudo obtener la ubicación');
      }
    } catch (err) {
      console.warn(err);
      Alert.alert('Error', 'No se pudo obtener la ubicación');
    }
  };

  useEffect(() => {
    handlePressGo(); // Llama a la función cuando se monta el componente
  }, []);



  
  const goToChat = () => {
    if (location) {
      navigation.navigate('Chat');
    } else {
      Alert.alert('Ubicación', 'Por favor, espera mientras se actualiza la ubicación.');
      handlePressGo(); // Actualiza la ubicación y luego redirige a la pantalla de chat
    }
  };

  const goToRegistroScreen = () => {
    navigation.navigate('Registro');
  };

  return (

    <SafeAreaView style={{ flex: 1 }}>
      

      <Image source={item.image} style={styles.image} />
      <Svg style={StyleSheet.absoluteFill}>
        <Polygon
          points={`${SIZES.width * 0.6},${0} ,${SIZES.width},${0} ,${SIZES.width},${SIZES.height+100}, ${SIZES.width * 0.1},${SIZES.height+100}`}
          fill={COLORS.green}
        />
      </Svg>
      <PlaceNameScreen />
      <View style={styles.container}>
        <Image source={IMAGES.logo_white} style={styles.logo} />
        <HeightSpacer height={'12%'} />
        <ReusableText
          text={item.title}
          family="aAntara"
          size={SIZES.xxLarge}
          color={COLORS.white}
          align="right"
          marginHorizontal={SIZES.width * 0.45}
        />
        <HeightSpacer height={'15%'} />
        <ReusableText
          text={item.subtitle}
          size={SIZES.xLarge}
          color={COLORS.yellow}
          align="right"
          marginHorizontal={SIZES.width * 0.45}
        />
        <View style={styles.containerSocial}>
          <ReusableBtn onPress={goToChat} btnText="Iniciar sesión" width={SIZES.width / 1.8} backgroundColor={COLORS.pink} borderColor={COLORS.red} borderWidth={0} textColor={COLORS.white} marginRight="-30%" />
          <ReusableBtn onPress={goToChat} btnText="Registrarse" width={SIZES.width / 1.8} backgroundColor={COLORS.yellow} borderColor={COLORS.red} borderWidth={0} textColor={COLORS.white} marginRight="-30%" />
          <HeightSpacer height={'10%'} />
          <SocialMedia socialIcons={icons} handlePress={handlePressGo} />
        </View>
      </View>
    </SafeAreaView>
   
  );
};

export default Slides;

