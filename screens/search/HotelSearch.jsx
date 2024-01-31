import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native';
import apiKey from '../../utils/APIKEY'; // Ruta al archivo de la clave de API

const HotelSearch = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=latitude,longitude&radius=1000&type=lodging&keyword=${searchKey}&key=${apiKey}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Resto del código del componente...
};

export default HotelSearch;
