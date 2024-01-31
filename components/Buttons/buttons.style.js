
import { StyleSheet } from 'react-native';
import { SIZES,COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
    container: () => ({
        flexDirection: 'row',
        marginRight: "-30%",
    }),
    btnText: (textColor) => ({
        fontSize: SIZES.medium,
        color: textColor,
    }),
    btnStyle: (width, backgroundColor, borderWidth, borderColor, marginRight) => ({
        width: width,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        height: calculatedHeight,
        borderRadius: SIZES.small,
        borderColor: borderColor,
        borderWidth: borderWidth,
        marginRight: marginRight,
        marginTop: calculatedMarginTop,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // Esto se usa para Android

    }),
    icon: {
        width: SIZES.width * 0.1,
        height: SIZES.height * 0.05,
        marginHorizontal: '2%',

    },
});