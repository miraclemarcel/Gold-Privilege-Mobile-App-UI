import React from 'react'
import { View, Text, FlatList, Dimensions, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import Slide from './Slides';

// Style components======
import 
{ 
  Colors,

} from '../../styles/Style';

const {width, height} = Dimensions.get('window')

const WelcomeSlides = [
{
  id: 1,
  welcomeImage: require('../../assets/images/welcom1.jpg'),
  title: "Heading Title",
  description: "bottm text"
},
{
  id: 2,
  welcomeImage: require('../../assets/images/welcom2.jpg'),
  title: "Heading Title",
  description: "bottm text"
},
{
  id: 3,
  welcomeImage: require('../../assets/images/welcom3.jpg'),
  title: "Heading Title",
  description: "bottm text"
},
]



const Welcome = () => {
  return (
    <SafeAreaView style={ {flex: 1}}>
      <StatusBar backgroundColor={Colors.primary}/>

          <FlatList
            data={WelcomeSlides}
              // contentContainerStyle={{ height: height * 0.75}} 
              showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slide item={item} />}
            keyExtractor={item => item.id.toString()}
          />
     
    </SafeAreaView>
  )
}

export default Welcome