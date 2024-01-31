import { StyleSheet } from "react-native";
import {SIZES,COLORS} from "../../constants/theme"


const styles = StyleSheet.create({
 
    stack: {
        position: "absolute",
        bottom: 0,
        marginBottom: 60,
        marginHorizontal: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column',
       
      },
      containerSocial: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: -0.0000009*SIZES.height, // Actualización del estilo usando valores proporcionales
      },
      image: {
        width: SIZES.width,
        height: SIZES.height,
        resizeMode: 'cover',
        position: 'absolute',
      },
      logo: {
        width: 0.35 * SIZES.width,
        height: 0.2 * SIZES.height,
        resizeMode: 'contain',
        marginLeft: 0.6 * SIZES.width,
        marginTop: -0.45*SIZES.height,
      },
      button: {
        flexDirection: 'row',
        width: 0.5* SIZES.width,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height:5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight:'-30%',
      },
      icon: {
        marginRight: 8,
      },
      text: {
        color: COLORS.black,
        fontSize: 16,
        fontWeight: 'bold',
      },
})

export default styles