import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const ReusableText = ({ text, family, fontStyle,size, color, align, marginHorizontal }) => {
  return (
    <View style={styles.container( marginHorizontal)}>
      <Text style={styles.textStyle(family, fontStyle, size, color, align)}>
        {text}
      </Text>
    </View>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  container: ( marginHorizontal)=> ({
    width: '50%', // Ancho del contenedor en un 80% de la pantalla
    height: '30%', // Altura fija del contenedor para mostrar 2 o 3 líneas
    marginHorizontal: marginHorizontal, // Establecer el margen horizontal
  }),
  textStyle: (family, fontStyle,size, color, align) => ({
    fontFamily: family, // Usar una fuente similar a cursiva
    fontStyle: fontStyle, // Simular cursiva o estilo inclinado
    fontSize: size,
    color: color,
    textAlign: align, // Establece la alineación del texto
  }),
});
