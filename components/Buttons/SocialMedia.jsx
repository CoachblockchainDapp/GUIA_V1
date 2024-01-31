import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';

const SocialMedia = ({ socialIcons, handlePress }) => {
  return (
    <View style={{ flexDirection: 'row', marginRight:"-30%", }}>
      {socialIcons.map((social, index) => (
        <TouchableOpacity key={index} onPress={() => handlePress(social.link)}>
          <Image source={social.icon} style={styles.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: SIZES.width * 0.1,
    height: SIZES.height * 0.05,
    marginHorizontal: '2%',
   
  },
});

export default SocialMedia;

