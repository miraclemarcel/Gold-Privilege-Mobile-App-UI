import React, { useState } from "react";
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

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

const ResetPassword = ({ navigation }) => {
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
        <AuthPageTitleText>Create New Password</AuthPageTitleText>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
            <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                <Text style={{ textAlign: 'center' }}>
                Password must contain at least 1 letter, 1 number, and a special character. Minimum length is 8 characters
                </Text>
            </View>
            </View>
            <View style={{ marginTop: 20, }}>
                <StyledTextInput style={{ width: '100%' }}
                keyboardType="default"
                placeholder="New password"
                />
                <StyledTextInput style={{ width: '100%' }}
                keyboardType="default"
                placeholder="Confirm Password"
                />
            </View>
        <OtpButtonBottom>
          
          <StyledButton>
            
              <ButtonText>Change my password</ButtonText>
            </StyledButton>
        
          {/* <StyledButton onPress={handleVerify} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color={Colors.white} />
            ) : (
              <ButtonText>Change my password</ButtonText>
            )} */}
          {/* </StyledButton> */}
        </OtpButtonBottom>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default ResetPassword;
