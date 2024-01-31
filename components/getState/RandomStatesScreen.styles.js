import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '10%', // Ajusta el 10% del margen superior
    right: '-5%', // Ajusta el 10% del margen derecho
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 20,
    width: screenWidth * 0.8, // Usa el 80% del ancho de la pantalla
    height: screenHeight*0.3, // Usa la altura completa de la pantalla
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  stateText: {
    color: 'white',
    fontSize: 18,
    margin: 5,
  },
});

export default styles;

