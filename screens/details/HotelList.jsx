import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const HotelList = ({ navigation }) => {
  const hotels =  [
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "HS HOTSSON Hotel Leon",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/0c/74/f5/exterior-view.jpg?w=600&h=-1&s=1",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "León,Guanajuato"
    },
    {
        "_id": "64c675183cfa5e847bcd5433",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hampton Inn by Hilton Leon Guanajuato",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/7f/db/76/barlounge.jpg?w=1100&h=-1&s=1",
        "rating": 4.5,
        "review": "12024 Reviews",
        "location": "León,Guanajuato"
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "City Express By Marriott León",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/1f/19/bf/exterior.jpg?w=1400&h=-1&s=1",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "León,Guanajuato"
    },
    {
        "_id": "64c675be3cfa5e847bcd5439",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel San Francisco leon",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/9e/bb/25/hotel-san-francisco-leon.jpg?w=1400&h=-1&s=1",
        "rating": 4.6,
        "review": "12854 Reviews",
        "location": "León,Guanajuato"
    },
    {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Courtyard by Marriott Leon at The Poliforum",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/34/eb/bd/outdoor-pool.jpg?w=1400&h=-1&s=1",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "León,Guanajuato"
    }
]
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
         top={10}
         left={0}
         right={0}
          title={"Hoteles Cerca"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> navigation.navigate('HotelSearch')}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile
                item={item}
                onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HotelList;
