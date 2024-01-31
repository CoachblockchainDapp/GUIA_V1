import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  AppBar,
  DescriptionText,
  HeightSpacer,
  HotelMap,
  NetworkImage,
  ReusableBtn,
  ReusableText,
  ReviewsList,
} from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./hotelDetails.style";
import reusable from "../../components/Reusable/reusable.style";
import { Rating } from "react-native-stock-star-rating";
import {Feather} from '@expo/vector-icons'

const HotelDetails = ({ navigation }) => {
  const hotel = {
    "availability": {
        "start": "2023-08-10T00:00:00.000Z",
        "end": "2023-08-17T00:00:00.000Z"
    },
    "coordinates": {
      "latitude": 21.1234,
      "longitude": -101.6789
  },
    "_id": "64d34be53295a816648298d0",
    "country_id": "64d2fd32618522e2fb342eec",
    "title": "HS HOTSSON Hotel Leon",
    "description": "El HS HOTSSON Hotel León ofrece una estancia cómoda y conveniente en el corazón de León. Nuestras habitaciones están equipadas con TV de pantalla plana, minibar y aire acondicionado, además de wifi gratuito. Disfruta de servicios como recepción las 24 horas, conserjería y servicio a la habitación. Nuestra ubicación cercana a lugares emblemáticos como el Ayuntamiento Del Municipio De León y el Templo Inmaculado Corazón De María hace que el HS HOTSSON Hotel León sea una opción popular. Además, podrás explorar los restaurantes cercanos, como Sirloin Stockade, Mr. Pampas León y Restaurante Grants - La Cocina del Mundo, para una deliciosa experiencia gastronómica durante tu estadía en León.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/48/ca/d5/habitacion-terraza-doble.jpg?w=1400&h=-1&s=1",
    "rating": 4.7,
    "review": "253425 Reviews",
    "location": "León, Guanajuato",
    "price": 200,
    "__v": 1,
    "reviews": [
        {
            "_id": "64d38ff59af9119acfab0ece",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
            "rating": 4.6,
            "user": {
                "_id": "64c5d95adc7efae2a45ec376",
                "username": "John Doe",
                "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg"
            },
            "updatedAt": "2023-08-09"
        },
        {
            "_id": "64d797efa5628cedef4fce58",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
            "rating": 4.6,
            "user": {
                "_id": "64c5d95adc7efae2a45ec376",
                "username": "Zoe Doe",
                "profile": "https://d326fntlu7tb1e.cloudfront.net/uploads/4c004766-c0ad-42ed-bef1-6a7616b24c11-vinci_11.jpg"
            },
            "updatedAt": "2023-08-09"
        }
    ]
}

  let coordinates = {
    id: hotel._id,
    title: hotel.title,
    latitude: hotel.coordinates.latitude,
    longitude: hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }

 

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={hotel.imageUrl}
            width={"100%"}
            height={220}
            radius={25}
          />

          <View style={styles.titleContainer}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={hotel.title}
                family={"medium"}
                size={SIZES.xLarge}
                color={COLORS.black}
              />

              <HeightSpacer height={10} />
              <ReusableText
                text={hotel.location}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <HeightSpacer height={15} />

              <View style={reusable.rowWithSpace("space-between")}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={"#FD9942"}
                />

                <ReusableText
                  text={`(${hotel.review})`}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Descripción"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={hotel.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text={"Lugar"}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={15} />

          <ReusableText
            text={hotel.location}
            family={"regular"}
            size={SIZES.small+2}
            color={COLORS.gray}
          />

          <HotelMap coordinates={coordinates}/>

          <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText
            text={'Reviews'}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <TouchableOpacity>
            <Feather name='list' size={20}/>
          </TouchableOpacity>
          </View>

          <HeightSpacer height={10}/>

          <ReviewsList reviews={hotel.reviews}/>

        </View>
        <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
          <View>
          <ReusableText
            text={`\$ ${hotel.price}`}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />
          <HeightSpacer height={5} />

          <ReusableText
            text={"Jan 01 - Dec 25"}
            family={"medium"}
            size={SIZES.medium}
            color={COLORS.gray}
          />
          </View>

          <ReusableBtn
          onPress={() => navigation.navigate("SelectRoom")}
          btnText={"Seleccionar"}
          width={(SIZES.width - 50)/2.2}
          backgroundColor={COLORS.blue}
          borderColor={COLORS.blue}
          borderWidth={0}
          textColor={COLORS.white}
        />
          </View>

      </View>
    </ScrollView>
  );
};

export default HotelDetails;
