import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SocialMediaIcons = () => {
  const socialMedia = [
    { name: 'Facebook', icon: require('../../assets/images/icons/google_96px.png') },
    { name: 'gmail', icon: require('../../assets/images/icons/facebook_96px.png')},
  ];

  const handlePress = (link) => {
    // Lógica para abrir el enlace en el navegador o en la aplicación correspondiente
    // Aquí podrías usar Linking.openURL() de React Native para abrir el enlace
  };

  return (
    <View style={styles.container}>
      {socialMedia.map((social, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(social.link)}>
          <Image source={social.icon} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default SocialMediaIcons;
