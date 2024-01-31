import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.green,
        alignItems:'center'
    },
    inputWrapper: (borderColor)=> ({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        height: 50,
        borderRadius: 12,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center"
    }), 
    wrapper: {
        marginBottom: 20
    },
    label: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        marginBottom: 5,
        marginEnd: 5,
        textAlign: "right"
    },
    errorMessage: {
       color: COLORS.red,
       fontSize: SIZES.small,
       fontFamily: 'regular',
       marginTop: 5,
       marginLeft: 5,
    },

    textContainer:{
        marginTop:20,
        color:COLORS.yellow,
        fontSize:25,
        textAlign:'center',
    },

    imageContainer: {
        width:300,
        height: 150, // Ajusta el alto de acuerdo a tus necesidades
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        marginRight: '-10%',
        marginTop:20
      },
      checkboxContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginVertical: 10,
      },
      checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      label: {
        marginLeft: 8,
      },

})


export default styles