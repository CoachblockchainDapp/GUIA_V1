import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AssetImage, HeightSpacer, ReusableBtn, ReusableText } from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const Failed = ({navigation}) => {
    const hotel = {
        _id: "64c67442776ed29f19727fd7",
        country_id: "64c62bfc65af9f8c969a8d04",
        title: "Courtyard by Marriott Leon at The Poliforum",
        imageUrl:
          "https://d326fntlu7tb1e.cloudfront.net/uploads/4fdc30c2-08c5-4bca-b05c-d8b8a60b020f-luxury1.webp",
        rating: 4.7,
        review: "1204 Reviews",
        location: "León,Guanajuato",
      };
      return (
        <View>
          <View style={{ marginTop: "40%" }}>
            <AssetImage
              data={require("../../assets/images/Falied.png")}
              width={"100%"}
              height={200}
              mode={"contain"}
            />
    
            <HeightSpacer height={40} />
    
            <View style={{ alignItems: "center" }}>
              <ReusableText
                text={"Error en la reserva"}
                family={"medium"}
                size={TEXT.xLarge}
                color={COLORS.black}
              />
              <HeightSpacer height={20} />
    
              <ReusableText
                text={"Puede encontrar los detalles de su reserva a continuación"}
                family={"regular"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
              <HeightSpacer height={20} />
            </View>
            <View style={{ margin: 20 }}>
              <ReusableText
                text={"Detalles de la habitación"}
                family={"bold"}
                size={SIZES.medium}
                color={COLORS.dark}
              />
    
              <HeightSpacer height={20} />
    
              <ReusableTile item={hotel}/>
    
              <HeightSpacer height={40} />
    
              <ReusableBtn
              onPress={() => navigation.goBack()}
              btnText={"Trata de nuevo"}
              width={SIZES.width - 50}
              backgroundColor={COLORS.blue}
              borderColor={COLORS.blue}
              borderWidth={0}
              textColor={COLORS.white}
            />
    
            </View>
          </View>
        </View>
      );
}

export default Failed

const styles = StyleSheet.create({})