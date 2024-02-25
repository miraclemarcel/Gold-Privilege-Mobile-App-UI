import React from 'react'
import { Text, View } from 'react-native'


import 
{ 
  OnboardingButtonContainer,
  FullAuthBtn,
  AuthButtonText,
  OnboardContent,
  BorderAuthBtn

} from '../../styles/Style';

const GetStartedfooter = () => {
  return (
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
  )
}

export default GetStartedfooter
