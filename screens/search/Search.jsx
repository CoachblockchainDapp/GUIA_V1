import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style';
import {Feather, AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme';
import ReusableTile from '../../components/Reusable/ReusableTile';
import { ReusableText, PlaceNameScreen, HeightSpacer, RandomStatesScreen } from '../../components/index';

const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const search = [
    {
      title: "Zapaterias",
      searchCriteria: "Shoe stores",
    },
    {
      title: "Articulos de Piel",
      searchCriteria: "Leather goods",
    },
    {
      title: "Restaurantes",
      searchCriteria: "Restaurants",
    },
    {
      title: "Hoteles",
      searchCriteria: "Hotels",
    },
    {
      title: "Centro Comerciales",
      searchCriteria: "Shopping malls",
    },
    {
      title: "Búsqueda por Marca",
      searchCriteria: "Brand search",
    },
    {
      title: "Ferias y Convenciones",
      searchCriteria: "Fairs and conventions",
    },
    {
      title: "Eventos del Mes",
      searchCriteria: "Events of the month",
    },
    {
      title: "Cajeros Automáticos",
      searchCriteria: "ATMs",
    },
    {
      title: "Gasolineras",
      searchCriteria: "Gas stations",
    },
    {
      title: "Clínicas y Hospitales",
      searchCriteria: "Clinics and hospitals",
    },
    {
      title: "Agencias de Viajes",
      searchCriteria: "Travel agencies",
    },
    {
      title: "Museos",
      searchCriteria: "Museums",
    },
    {
      title: "Templos",
      searchCriteria: "Temples",
    },
    {
      title: "Otros Destinos",
      searchCriteria: "Other destinations",
    },
    {
      title: "Llamar al 911",
      searchCriteria: "Call 911",
    },
  ];
  
  


  const handleNavigation = (searchItem) => {
    navigation.navigate('ListScreen', { cityId: 1, searchCriteria: searchItem.title });

  };



  return (
   <SafeAreaView style={styles.container}>
     <Image style={{ width: 80, height: 40 }} source={require("../../assets/images/logos/whiteLogo.png")}></Image>
    <View style={styles.searchContainer}>
     
      <View style={styles.searchWrapper}>
      
         

        <TextInput 
        style={styles.input}
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder='¿Qué buscas?'
        />
      </View>

      <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate('Location')}>
        <Feather name='search' size={24} color={COLORS.white}/>
      </TouchableOpacity>
    </View>

    {search.length === 0 ? (
      <View>
        <HeightSpacer height={'20%'}/>
        <Image 
        source={require('../../assets/images/search.png')}
        style={styles.searchImage}
      />
      </View>
    ): (
      <FlatList 
      data={search}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handleNavigation(item.searchCriteria)}>
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
    )}

   </SafeAreaView>
  )
}

export default Search