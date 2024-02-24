import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { ThemeProvider } from 'styled-components/native';


// expo constants 
import Constants from 'expo-constants';

// styled text input function============

  

// ==== Dimensions =============
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


//  -------- colors--------

export const Colors = {
    primary: "#1350E8",
    primaryHover: "#144FE1",
    backgroundColor: "#020817",
    homeHeaderBg: "#102249",
    darkBlue: "#071e56",
    cardsBg: "#17203D",
    cardsBorder: "#2E3852",
    onBordingText: "#ffffff",
    black: "#000000",
    inputBg: "rgba(19, 80, 232, 0.3)",
    inputBorderFocus: "#1350E8",
    inputPlaceholder: "#8B9CC8",
    success: "#3CDF21",
    danger: "#FF0000",
}

const {primary, primaryHover, backgroundColor, homeHeaderBg, 
    cardsBg, cardsBorder, white, black, inputBg, 
    inputBorderFocus, inputPlaceholder, success, danger, darkBlue, onBordingText} = Colors;
    

    export const GetStartedContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 50px;
  `;
  
export const OnboardingTextContainer = styled.View`
`;
export const OnboardingTextTitle = styled.Text`
    fontSize: 15px;
    fontWeight: 600;
    color: ${onBordingText};
`;
export const OnboardingTextDesc = styled.Text`
    fontSize: 13px;
    color: ${onBordingText};
`;