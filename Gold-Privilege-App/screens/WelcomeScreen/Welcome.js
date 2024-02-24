import React from 'react'
import { View, Text, FlatList, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import Slide from './Slides';

// Style components======
import 
{ 
  Colors,
 
  OnboardingButtonContainer,
  FullAuthBtn,
  AuthButtonText,
  OnboardContent,
  BorderAuthBtn

} from '../../styles/Style';

const {width, height} = Dimensions.get('window')

const WelcomeSlides = [
{
  id: 1,
  welcomeImage: require('../../assets/images/welcom1.jpg'),
  title: "Lorem Ipsum is simply dummy text of the.",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
},
{
  id: 2,
  welcomeImage: require('../../assets/images/welcom2.jpg'),
  title: "Lorem Ipsum is simply dummy text of the.",
   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

},
{
  id: 3,
  welcomeImage: require('../../assets/images/welcom3.jpg'),
  title: "Lorem Ipsum is simply dummy text of the.",
   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

},
]



const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={ {flex: 1, backgroundColor: Colors.cardsBg}}>
      <StatusBar backgroundColor={Colors.primary}/>

          <FlatList
            horizontal 
            pagingEnabled
            data={WelcomeSlides}
              showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slide item={item} />}
          />
        <OnboardContent>
      
        <OnboardingButtonContainer>
                <FullAuthBtn>
                    <AuthButtonText>Get Started</AuthButtonText>
                </FullAuthBtn>
                <BorderAuthBtn>
                    <AuthButtonText>Login</AuthButtonText>
                </BorderAuthBtn>
        </OnboardingButtonContainer>
      </OnboardContent>
    </SafeAreaView>
  )
}

export default Welcome