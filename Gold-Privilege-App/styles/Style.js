import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Pressable } from 'react-native';


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
    inputBorder: "#B9B6B6"
}

const {primary, primaryHover, backgroundColor, homeHeaderBg, 
    cardsBg, cardsBorder, white, black, inputBg, 
    inputBorderFocus, inputPlaceholder, success, danger, darkBlue, inputBorder,  onBordingText, whiteColor} = Colors;
    

// =====GENERAL STYLES===========

export const StyledContainer = styled.View`
    flex: 1;
    padding: 20px;
    backgroundColor: ${whiteColor};
`;
export const AuthContainer = styled.View`
    flex: 1;
`;
export const AuthInnerContainer = styled.View`
    flex: 1;
    padding: 20px;
`;
export const AuthHeaderContainer = styled.View`
`;
export const AuthHeadingTextContainer = styled.View`
    position: absolute;
    flexDirection: row;
    gap: 5px;
    bottom: 20px;
    padding: 20px;
    left: 0;
`;
export const AuthTitle = styled.Text`
    fontSize: 27px;
    color: ${cardsBg};
    fontWeight: 500;
`;
export const AuthSubTitle = styled.Text`
    fontSize: 18px;
    color: ${primary};
`;
export const AuthHeadingTextLeft = styled.Text`
    fontSize: 25px;
    color: ${whiteColor};
    fontWeight: bold;
`;
export const AuthHeadingTextRight = styled.Text`
    fontSize: 25px;
    color: ${primary};
    fontWeight: bold;
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    alignItems: center;
`;
export const PageTitle = styled.Text`
    fontSize: 30px;
    textAlign: center;
    fontWeight: bold;
    color: ${whiteColor};
    padding: 16px;
`;
export const StyledFormArea = styled.View`
    width: 100%;
    paddingTop: 20px;
`;
export const StyledTextInput = styled.TextInput`
  padding: 15px;
  paddingLeft: 25px;
  paddingRight: 15px;
  borderRadius: 8px;
  border: 1px;
  borderColor: ${inputBorder};
  fontSize: 16px;
  height: 50px;
  marginVertical: 3px;
  marginBottom: 10px;
  color: ${inputPlaceholder};

`;
export const ButtonText = styled.Text`
    color: ${whiteColor};
    font-size: 16px;
    textAlign: center;
`;
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background: ${primary};
    justify-content: center;
    border-radius: 8px;
    width: 100%;
    margin-vertical: 50px;
    height: 60px;
`;
export const ToSignupPageBox = styled.View`
    justify-content: center;
    alignItems: center;
    flex-direction: row;
    padding: 10px;
`;
export const ToSignupPageText = styled.Text`
    justify-content: center;
    alignItems: center;
    color: ${whiteColor};
    fontSize: 15px;
`;
export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    alignItems: center;
`;
export const TextLinkContent = styled.Text`
    fontSize: 15px;
    color: ${primary};
    fontWeight: 600;
`;
export const ResetPassword = styled.TouchableOpacity`
    alignItems: center;
`;
export const ResetPasswordText = styled.Text`
    fontSize: 15px;
    color: ${primary};
    fontWeight: 600;
    background: 
`;
export const RightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    right: 15px;
    z-index: 1;
`;
export const StyledTextInputLabel = styled.Text`
    fontSize: 14px;
    color:  ${inputPlaceholder};
    marginBottom: 10px;
    marginTop: 15px;
`;


// ========END OF GENERAL STYLES=============

// =========Onboarding section============

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

// =========Login section===========

export const AuthImageContainer = styled.View`
    width: 100%;
`;
export const AuthImage = styled.Image`
    width: 100%;
    height: 180px;
`;
export const FormSelection = styled.View`
    flexDirection: row;
    gap: 10px;
`;
export const FormTab = styled.View`
`;
export const FormTabText = styled.Text`
    fontSize: 19px;
    color: ${cardsBg};
`;