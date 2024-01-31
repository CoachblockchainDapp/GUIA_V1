import { View, ScrollView } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registration, Signin } from "../screens";
import { COLORS } from "../constants/theme";
import {  HeightSpacer } from "../components";

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.green }}>
      <ScrollView style={{ flex: 1 }}>
        <HeightSpacer height={"5%"} />


        <View style={{height: 1000}}>
        <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: COLORS.green},
          labelStyle: { fontWeight: 'bold', fontSize: 16 },
          activeTintColor: COLORS.white, // Color del texto cuando está seleccionado
          inactiveTintColor: COLORS.pink, // Color del texto cuando no está seleccionado
          indicatorStyle: { backgroundColor: COLORS.white, height: 4 } 
        }}
      >
            <Tab.Screen name="Ingresar" component={Signin} />
            <Tab.Screen name="Registrarse" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;
