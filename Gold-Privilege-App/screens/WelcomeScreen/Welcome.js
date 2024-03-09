import React, { useState, useEffect, useRef } from 'react';
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
  title: "A World of\nPrivileges at\nyour fingertips",
  description: "A World of Privileges at your fingertips."
},
{
  id: 2,
  welcomeImage: require('../../assets/images/slide-2.png'),
  title: "Premium\nServices At\nGreat Discounts",
   description: "A World of Privileges at your fingertips"

},
{
  id: 3,
  welcomeImage: require('../../assets/images/slide-3.png'),
  title: "Privileges that give\nyou a satisfactory\nfeeling",
   description: "Gold privileges always leave you with a smile"

},
]




const Welcome = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef(null);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentSlideIndex < WelcomeSlides.length - 1) { 
  //       flatListRef.current.scrollToIndex({ index: currentSlideIndex + 1 });
  //     } else {
  //       flatListRef.current.scrollToIndex({ index: 0 });
  //     }
  //   }, 2000); // Adjust the interval time as per your preference

  //   return () => clearInterval(interval);
  // }, [currentSlideIndex]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlideIndex < WelcomeSlides.length - 1) {
        flatListRef.current.scrollToIndex({ animated: true, index: currentSlideIndex + 1 });
        setCurrentSlideIndex(prevIndex => prevIndex + 1);
      } else {
        flatListRef.current.scrollToIndex({ animated: true, index: 0 });
        setCurrentSlideIndex(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlideIndex]);


  const GetStartedfooter = () => {
    return (
      <OnboardContent>
      <Indicator>
          {WelcomeSlides.map((_,index)=> 
            <View key={index} 
            style={[styles.IndicatorDots,  currentSlideIndex == index && {
              backgroundColor: Colors.whiteColor,
              width: 10,
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
      <StatusBar translucent backgroundColor="transparent" style="light" />
          <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            data={WelcomeSlides}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slide item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />

          {/* <FlatList
            ref={flatListRef}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            horizontal 
            pagingEnabled
            data={WelcomeSlides}
              showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slide item={item} />}
          /> */}
          <GetStartedfooter/>
      </View>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  IndicatorDots: {
    height: 10,
    width: 10,
    backgroundColor: Colors.labelColor,
    marginHorizontal: 3,
    borderRadius: 50,
  }
})
export default Welcome