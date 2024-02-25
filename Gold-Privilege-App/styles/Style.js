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
    primary: "#e5ad04",
    primaryHover: "#144FE1",
    backgroundColor: "#020817",
    homeHeaderBg: "#102249",
    darkBlue: "#071e56",
    cardsBg: "#17203D",
    cardsBorder: "#2E3852",
    whiteColor: "#ffffff",
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
    

  
export const OnboardingContainer = styled.View`
`;
export const OnboardContent = styled.View`
    position: absolute;
    bottom: 50px;
    padding: 20px;
    width: 100%;
`;
export const OnboardTextContent = styled.View`
    position: absolute;
    bottom: 200px;
    padding: 20px;
    width: 100%;
`;
export const OnboardingTextContainer = styled.View`
   
 
`;
export const OnboardingTextTitle = styled.Text`
    fontSize: 35px;
    fontWeight: 600;
    color: ${onBordingText};
    width: 80%;
`;
export const OnboardingTextDesc = styled.Text`
    fontSize: 20px;
    color: ${onBordingText};
`;

export const OnboardingButtonContainer = styled.View`
    gap: 10px;
    paddingTop: 20px;
   
`;
export const FullAuthBtn = styled.View`
    background: ${primary};
    padding: 8px;
    width: 100%;
    height: 50px;
    borderRadius: 8px;
    justifyContent: center;

`;
export const BorderAuthBtn = styled.View`
    border: 2px;
    borderColor: ${primary};
    padding: 8px;
    width: 100%;
    height: 50px;
    borderRadius: 8px;
    justifyContent: center;

`;
export const AuthButtonText = styled.Text`
    color: ${onBordingText};
    textAlign: center;
`;
export const Indicator = styled.View`
    flexDirection: row;
    justifyContent: center;
    marginTop: 20px;
`;

export const IndicatorDots = styled.View`
    height: 10px;
    width: 10px;
    backgroundColor: ${onBordingText};
    marginHorizontal: 3px;
    borderRadius: 50px;
`;