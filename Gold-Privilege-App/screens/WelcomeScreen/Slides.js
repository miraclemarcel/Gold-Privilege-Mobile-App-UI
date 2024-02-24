
import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';


import { 
    OnboardingTextContainer, 
    OnboardingTextDesc, 
    OnboardingTextTitle 

} from '../../styles/Style';

const { width } = Dimensions.get('window');

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={item.welcomeImage} style={{ height: 250, resizeMode: 'contain', width }} />
      <OnboardingTextContainer>
        <OnboardingTextTitle>{item.title}</OnboardingTextTitle>
        <OnboardingTextDesc>{item.description}</OnboardingTextDesc>
      </OnboardingTextContainer>
    </View>
  );
};

export default Slide;
