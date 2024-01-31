import { StyleSheet,  FlatList } from 'react-native'
import React from 'react'
import Slides from '../../components/Onboard/Slides'

const Onboarding = () => {
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/LEONGTO.png'),
            messege:"BIENVENIDO",
            title: "Vayas a donde vayas",
            subtitle:"Lo que buscas, ¡aquí está!"
        },
        
    ]
 /* return (
  /*  <FlatList 
        pagingEnabled
        horizontal
        showHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> <Slides item={item}/>}
    />)*/
    return slides.map((item) => <Slides key={item.id} item={item} />)
 
}

export default Onboarding

