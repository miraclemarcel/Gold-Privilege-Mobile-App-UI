import React from 'react'
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
  welcomeImage: require('../../assets/images/welcom1.jpg'),
  title: "Lorem Ipsum is simply dummy text of the page 1",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
},
{
  id: 2,
  welcomeImage: require('../../assets/images/welcom2.jpg'),
  title: "Lorem Ipsum is simply dummy text of the page 2",
   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

},
{
  id: 3,
  welcomeImage: require('../../assets/images/welcom3.jpg'),
  title: "Lorem Ipsum is simply dummy text of the page 3",
   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

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
           <FullAuthBtn>
               <AuthButtonText>Get Started</AuthButtonText>
           </FullAuthBtn>
           <BorderAuthBtn>
               <AuthButtonText>Login</AuthButtonText>
           </BorderAuthBtn>
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
    <SafeAreaView style={ {flex: 1, backgroundColor: Colors.cardsBg}}>
      <StatusBar backgroundColor={Colors.primary}/>

          <FlatList
            onMomentumScrollEnd={updateCurrentSlideIndex}
            horizontal 
            pagingEnabled
            data={WelcomeSlides}
              showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Slide item={item} />}
          />
          <GetStartedfooter/>
    </SafeAreaView>
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