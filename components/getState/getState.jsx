import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import MexicoStates from './MexicoStates';
import MexicoCities from './MexicoCities';
import styles from './RandomStatesScreen.styles'; // Importa los estilos
import { HeightSpacer} from '../../components/index';

// Combinar las listas de estados en un solo array
const allEstados = [...MexicoStates, ...MexicoCities];

// Función para obtener una muestra aleatoria de 12 estados
const getRandomStates = () => {
  const shuffledStates = allEstados.sort(() => 0.5 - Math.random());
  return shuffledStates.slice(0, 12);
};

const RandomStatesScreen = () => {
    const randomStates = getRandomStates();
    const screenWidth = Dimensions.get('window').width; // Obtener el ancho de la pantalla
  
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          {randomStates.map((state, index) => (
            <Text key={index} style={styles.stateText}>
              {state},
            </Text>
          ))}
        </View>
      </View>
    );
  };
  
  export default RandomStatesScreen;

