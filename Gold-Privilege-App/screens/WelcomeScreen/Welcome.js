import React from 'react'
import { View, Text, FlatList, Dimensions, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import Slide from './Slides';

// Style components======
import 
{ 
  Colors,
  OnboardingTextContainer,
  OnboardingTextDesc,
  OnboardingTextTitle


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

export const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={item.welcomeImage} style={{height: 250, resizeMode: 'contain', width}}/>
      <OnboardingTextContainer>
        <OnboardingTextTitle>{item.title}</OnboardingTextTitle>
        <OnboardingTextDesc>{item.description}</OnboardingTextDesc>
      </OnboardingTextContainer>

    </View>
  );
};


const Welcome = () => {
  return (
    <SafeAreaView style={ {flex: 1}}>
      <StatusBar backgroundColor={Colors.primary}/>
            <FlatList 
            data={WelcomeSlides} 
            // contentContainerStyle={{ height: height * 0.75}} 
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item} />}
            />
    </SafeAreaView>
  )
}

export default Welcome