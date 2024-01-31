import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  Profile, Location } from "../screens";
import CustomDrawer from './CustomDrawer.jsx';


// Suponiendo que los componentes como BookNewEvent y UserProfile están definidos o importados correctamente

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />} // Asegúrate de definir o importar CustomDrawer
      screenOptions={{
        drawerActiveBackgroundColor: '#2B6EB5',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
      }}
    >
      
      <Drawer.Screen
        name="profile"
        component={Profile} // Asegúrate de importar o definir correctamente el componente BookNewEvent
        options={{
          title: 'Perfil',
         
        }}
      />
      <Drawer.Screen
        name="Location"
        component={Location} // Asegúrate de importar o definir correctamente el componente UserProfile
        options={{
          title: 'Map',
         
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;

