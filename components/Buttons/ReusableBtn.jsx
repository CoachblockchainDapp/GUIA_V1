import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";


// Calculando la altura y el margen superior en porcentajes
const calculatedHeight = SIZES.height * 0.05; // Por ejemplo, el 10% de la altura de la pantalla
const calculatedMarginTop = SIZES.height * 0.02; // Por ejemplo, el 2% de la altura de la pantalla

const ReusableBtn = ({
  onPress,
  btnText,
  textColor,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
  marginRight,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor,marginRight)}
    >
      <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (width, backgroundColor, borderWidth, borderColor,marginRight) => ({
    width: width,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    height: calculatedHeight,
    borderRadius: SIZES.small,
    borderColor: borderColor,
    borderWidth: borderWidth,
    marginRight:marginRight,
    marginTop:calculatedMarginTop,
   
  }),
});
