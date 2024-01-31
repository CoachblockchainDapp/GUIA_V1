import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OptionsScreen = () => {
  const navigation = useNavigation();

  const options = [
    { title: 'Zapaterías', screen: 'ZapateriasScreen' },
    { title: 'Artículos de Piel', screen: 'ArticulosPielScreen' },
    // ... otras opciones ...
    { title: 'Llamar al 911', screen: 'Llamar911Screen' },
  ];

  const handleOptionPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleOptionPress(item.screen)}
    >
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        style={styles.flatlist}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  flatlist: {
    width: '100%',
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default OptionsScreen;
