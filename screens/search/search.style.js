import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.green
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: SIZES.small,
        borderColor: COLORS.blue,
        borderWidth: 1,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium, 
        height: 50,
        backgroundColor:COLORS.white
    },
    input: {
      fontFamily: 'regular',
      width: "100%",
      height: "100%",
      paddingHorizontal: 50, 
    },
    searchWrapper: {
        flex: 1,
        flexDirection: 'row', 
        borderRadius: SIZES.small,
      },
      
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.blue
    },
    tile: {
        marginHorizontal: 12,
        marginBottom: 10
    },
    card: {
        backgroundColor: COLORS.white,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      cardText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
})

export default styles