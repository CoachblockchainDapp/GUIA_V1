import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

// Escala relativa para el texto
const SCALE = Math.min(height, width) / 360; // Puedes ajustar el valor 360 según tus necesidades


const COLORS = {
    blue: "#171796",
    red: "#EB6A58",
    green: "#638D4E",
    white: "#FBFBFB",
    lightWhite: "#FFFFFF",
    lightBlue: "#6885C1",
    lightRed: "#EB9C9B",
    lightGreen: "#73ADA1",
    black: '#121212',
    dark: '#3D3A45',
    gray: '#8C8896',
    lightGrey: '#D1CFD5',
    pink:"#CB1665",
    yellow:"#EAAC1B",
};


const SIZES = {
    xSmall: 10* SCALE,
    small: 12* SCALE,
    medium: 16* SCALE,
    large: 20* SCALE,
    xLarge: 24* SCALE,
    xxLarge: 44* SCALE,
    height,
    width
};


const TEXT = {
    xxSmall: 11 * SCALE,
    xSmall: 13 * SCALE,
    small: 15 * SCALE,
    medium: 17 * SCALE,
    large: 21 * SCALE,
    xLarge: 27 * SCALE,
    xxLarge: 32 * SCALE,
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};


export { COLORS, SIZES, SHADOWS, TEXT };