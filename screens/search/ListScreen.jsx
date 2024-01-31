import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import { COLORS } from '../../constants/theme';

const ListScreen = ({ navigation, route }) => {
  const { cityId, searchCriteria } = route.params;

  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore();

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);

        const storesRef = collection(db, 'PlacesCollection'); // Reemplaza 'store00000001' con tu ID real
        const querySnapshot = await getDocs(storesRef);

        const fetchedStores = [];
        querySnapshot.forEach((doc) => {
          const storeData = doc.data();
          const category = storeData.category || ''; // Asegúrate de ajustar este campo si el nombre del campo es diferente
          fetchedStores.push({ id: doc.id, category, ...storeData });
        });

        setStores(fetchedStores);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener tiendas:', error);
        setLoading(false);
      }
    };

    fetchStores();
  }, [cityId, searchCriteria]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
     
      <FlatList
        data={stores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Navegar a la pantalla ReusablePage y pasar los datos de la zapatería
              navigation.navigate('StorePage', { storeData: item });
            }}
          >
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.yellow,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListScreen;
