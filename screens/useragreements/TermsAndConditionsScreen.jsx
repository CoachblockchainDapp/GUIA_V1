import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { logo_blue} from '../../constants/images' 

const TermsAndConditionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={logo_blue} // Reemplaza con la ruta de tu imagen
          style={styles.image}
        />
      </View>
      <Text style={styles.heading}>Términos y Condiciones</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Introducción</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis id odio nec
          sollicitudin. Nulla facilisi.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Responsabilidades</Text>
        <Text>
          Vestibulum auctor magna nec lorem tincidunt, quis facilisis eros tempus. Nam euismod
          lectus nec feugiat.
        </Text>
      </View>
      {/* Agrega más secciones y contenido según sea necesario */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: SIZES.padding * 2, // Ajusta el margen superior según sea necesario
  },
  image: {
    width: 200, // Ajusta el tamaño de la imagen según tu diseño
    height: 200, // Ajusta el tamaño de la imagen según tu diseño
    resizeMode: 'cover', // Ajusta el modo de redimensionamiento según tus necesidades
  },
  heading: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    marginBottom: SIZES.padding,
    textAlign: 'center',
  },
  section: {
    marginBottom: SIZES.padding * 2,
  },
  sectionTitle: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    marginBottom: SIZES.padding,
  },
});

export default TermsAndConditionsScreen;
