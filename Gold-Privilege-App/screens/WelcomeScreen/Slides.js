
import React from 'react';
import { View, Text, Dimensions, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { 
    OnboardTextContent,
    OnboardingContainer,
    OnboardingTextContainer, 
    OnboardingTextDesc, 
    OnboardingTextTitle,

} from '../../styles/Style';

const { width } = Dimensions.get('window');

const Slide = ({ item }) => {
  return (
    <OnboardingContainer>
      <ImageBackground
        source={item.welcomeImage}
        style={{ height: '100%', resizeMode: 'cover', width }}
      >
        <LinearGradient
          colors={['rgba(255, 255, 255, 0) 0%', 'rgba(0, 0, 0, 0.8) 68.23%']}
          style={{ flex: 1, justifyContent: 'flex-end' }} 
        >
          <OnboardTextContent>
            <OnboardingTextContainer>
              <OnboardingTextTitle>{item.title}</OnboardingTextTitle>
              <OnboardingTextDesc>{item.description}</OnboardingTextDesc>
            </OnboardingTextContainer>
          </OnboardTextContent>
        </LinearGradient>
      </ImageBackground>
    </OnboardingContainer>
  );
};

export default Slide;
