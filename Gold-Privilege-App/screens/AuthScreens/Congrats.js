import React from 'react'
import { Text, View } from 'react-native'
import { 
    CongratsContainer, 
    CongratsImage, 
    StyledContainer,
    CongratsTop,
    CongratsImageContainer,
    CongratsText,
    CongratsBottom,
    CongratsTextBody,
    GoldText,
    CongratsBtn,
    CongratsBtnText
} from '../../styles/Style'


export default function Congrats({ navigation }) {
  return (
    <StyledContainer>
        <CongratsContainer>
            <CongratsTop>
                <CongratsImageContainer>
                    <CongratsImage source={require("../../assets/images/Congratulations.png")}/>
                </CongratsImageContainer>
                <CongratsText>Congratulations</CongratsText>
            </CongratsTop>
            <CongratsBottom>
                <CongratsTextBody>You have successfully created your {""}<GoldText>Gold Privilege Account </GoldText> </CongratsTextBody>
            {/* <CongratsBtn onPress={() => navigation.navigate("Login")}>
                <CongratsBtnText>Continue to home</CongratsBtnText>
            </CongratsBtn> */}
            </CongratsBottom>
        </CongratsContainer>
    </StyledContainer>
       
  )
}
