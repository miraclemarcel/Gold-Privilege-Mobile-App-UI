import React, { useState } from "react";
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import Congrats from "./Congrats";

import { 
  Colors,
  AuthPageTitleText,
  StyledContainer,
  OtpButtonBottom,
  StyledButton,
  ButtonText,
  ResendOtpTextBtn,
  ResendBox,
  StyledTextInput,
  InputLabelText,
} from "../../styles/Style";

const ForgotPassword = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  // Function to handle verify button click
  const handleVerify = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('ResetPasswordOTP');
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledContainer>
        <AuthPageTitleText>Forgot Password</AuthPageTitleText>
            <View style={{ alignItems: 'center' }}>
            <View style={{ marginTop: 40 }}>
                <Image source={require("../../assets/images/forgot-pass.png")} />
            </View>
            <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                <Text style={{ textAlign: 'center' }}>Enter the email address associated with your account and we’ll send you a OTP code to verify your email</Text>
            </View>
            </View>
            <View style={{ marginTop: 20, }}>
                <InputLabelText>Email</InputLabelText>
                <StyledTextInput style={{ width: '100%' }}
                keyboardType="default"
                />
            </View>
        <OtpButtonBottom>
          
          <StyledButton onPress={handleVerify} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color={Colors.white} />
            ) : (
              <ButtonText>Continue</ButtonText>
            )}
          </StyledButton>
          <ResendBox>
            <ResendOtpTextBtn>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: "row" }}>
                  <Text style={{ fontFamily: 'PoppinsMedium', }}>   Don't have an account?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ fontFamily: 'PoppinsMedium', color: Colors.primary }}> Sign In</Text>
                    </TouchableOpacity>
                </View>
               
            </ResendOtpTextBtn>
          </ResendBox>
        </OtpButtonBottom>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default ForgotPassword;
