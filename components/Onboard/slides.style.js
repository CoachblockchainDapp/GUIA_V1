import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  stack: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerSocial: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -0.0000009 * SIZES.height, // Actualización del estilo usando valores proporcionales
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  logo: {
    width: 0.35 * SIZES.width,
    height: 0.2 * SIZES.height,
    resizeMode: 'contain',
    marginLeft: 0.6 * SIZES.width,
    marginTop: -0.45 * SIZES.height,
  },
});

export default styles;
