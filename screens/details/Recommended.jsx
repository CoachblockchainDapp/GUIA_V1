import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const Recommended = ({ navigation }) => {
  const recommendations = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Catedral de León",
      location: "León, Guanajuato, México",
      imageUrl: "https://github.com/MarquezFigueroa/LOGOS_BK/blob/main/01%20%20Catedral%20%20JPG.jpg?raw=true",
      rating: 4.7,
      review: "1204 Reseñas",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Jardín Principal",
      location: "León, Guanajuato, México",
      imageUrl: "https://cdn.mexicodestinos.com/tours/recorrido-por-leon-guananuato-plaza-de-los-martires-min.jpg",
      rating: 4.8,
      review: "1452 Reseñas",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Presidencia Municipal de León",
      location: "León, Guanajuato, México",
      imageUrl: "https://github.com/MarquezFigueroa/LOGOS_BK/blob/main/03%20%20Presidencia%20Municipal%20%20JPG.jpg?raw=true",
      rating: 4.6,
      review: "2145 Reseñas",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Museo de Arte e Historia de Guanajuato",
      location: "León, Guanajuato, México",
      imageUrl: "https://agendacultural.guanajuato.gob.mx/wp-content/uploads/2021/10/001-INICIO.png",
      rating: 4.8,
      review: "24455 Reseñas",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      imageUrl: "http://www.peterktravels.com/wp-content/uploads/2019/09/DSC06489-lr.jpg",
      title: "Plaza Principal de León",
      location: "León, Guanajuato, México",
      rating: 4.8,
      review: "24455 Reseñas",
    },
  ];

  
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
          top={10}
          left={0}
          right={0}
          title={"Recomendaciones"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> navigation.navigate('Search')}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile
                item={item}
                onPress={() => navigation.navigate("PlaceDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Recommended;
