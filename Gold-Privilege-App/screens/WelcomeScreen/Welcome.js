import React, { useEffect } from 'react'
import { View, Text, FlatList, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";
import Slide from './Slides';
// import GetStartedfooter from './GetStartedfooter';

// Style components======
import 
{ 
  Colors,
 
  OnboardingButtonContainer,
  FullAuthBtn,
  AuthButtonText,
  OnboardContent,
  BorderAuthBtn,
  Indicator,

} from '../../styles/Style';

const {width, height} = Dimensions.get('window')

const WelcomeSlides = [
{
  id: 1,
  welcomeImage: require('../../assets/images/slide-1.png'),
  title: "A World of Privileges at your fingertips",
  description: "A World of Privileges at your fingertips."
},
{
  id: 2,
  welcomeImage: require('../../assets/images/slide-2.png'),
  title: "Premium Services At Great Discounts",
   description: "A World of Privileges at your fingertips"

},
{
  id: 3,
  welcomeImage: require('../../assets/images/slide-3.png'),
  title: "Privileges that give you a satisfactory feeling",
   description: "Gold privileges always leave you with a smile"

},
]





const Welcome = ({navigation}) => {
  const [currrentSlideIndex, setCurrentSlideIndex] = React.useState(0);


  
  const GetStartedfooter = () => {
    return (
      <OnboardContent>
      <Indicator>
          {WelcomeSlides.map((_,index)=> 
            <View key={index} 
            style={[styles.IndicatorDots,  currrentSlideIndex == index && {
              backgroundColor: Colors.whiteColor,
              width: 25,
            }] } />
          )}
      </Indicator>
       <OnboardingButtonContainer>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("SignUp")} >
            <FullAuthBtn>
                <AuthButtonText>Get Started</AuthButtonText>
            </FullAuthBtn>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("Login")} >
            <BorderAuthBtn>
                <AuthButtonText>Login</AuthButtonText>
            </BorderAuthBtn>
          </TouchableOpacity>
       </OnboardingButtonContainer>
  </OnboardContent>
    );
  };

  // =====update current slide index=======
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width)
    setCurrentSlideIndex(currentIndex);

  }

  return (
    // <SafeAreaView style={ {flex: 1, backgroundColor: Colors.cardsBg}}>
    <View>
      <StatusBar backgroundColor={Colors.primary} barStyle="light" />

          <FlatList
            onMomentumScrollEnd={updateCurrentSlideIndex}
            horizontal 
            pagingEnabled
            data={WelcomeSlides}
              showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slide item={item} />}
          />
          <GetStartedfooter/>
      </View>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  IndicatorDots: {
    height: 10,
    width: 10,
    backgroundColor: "#fff",
    marginHorizontal: 3,
    borderRadius: 50,
  }
})
export default Welcome