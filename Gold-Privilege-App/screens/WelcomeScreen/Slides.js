
import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';


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
    <OnboardingContainer >
      <Image source={item.welcomeImage} style={{ height: '100%', resizeMode: 'cover', width }} />
       <OnboardTextContent>
            <OnboardingTextContainer>
                <OnboardingTextTitle>{item.title}</OnboardingTextTitle>
                <OnboardingTextDesc>{item.description}</OnboardingTextDesc>
            </OnboardingTextContainer>
        </OnboardTextContent>
    </OnboardingContainer>
  );
};

export default Slide;
