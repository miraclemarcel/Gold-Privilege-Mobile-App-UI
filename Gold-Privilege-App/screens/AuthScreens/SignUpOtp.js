import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Text, ActivityIndicator, Modal } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import Congrats from "./Congrats";


import { 
  Colors,
  AuthPageTitleText,
  StyledContainer,
  SignUpVerification,
  SignUpOtpText,
  SignUPOtpImageConatainer,
  SignUPOtpImage,
  OtpButtonBottom,
  StyledButton,
  ButtonText,
  OtpVerficationCountdown,
  ResendOtpTextBtn,
  ResendOtpText,
  ResendBox,

} from "../../styles/Style";

const SignUpOtp = ( { navigation} ) => {
  const [loading, setLoading] = useState(false); // Define loading state
  const [otp, setOTP] = useState(["", "", "", ""]); // Array to store OTP digits
  const inputRefs = useRef([]); // Ref for input fields
  const [showCongrats, setShowCongrats] = useState(false); // State to manage congrats component visibility

  // Function to handle OTP input change
  const handleOTPChange = (index, value) => {
    if (isNaN(value)) return; // Only allow numeric input
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);
    if (value !== "") {
      // Move focus to the next input field
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Function to handle OTP input focus
  const handleFocus = index => {
    if (otp[index] === "") {
      // Clear input field if it's empty
      const newOTP = [...otp];
      newOTP[index] = "";
      setOTP(newOTP);
    }
  };

    // Function to handle verify button click
    const handleVerify = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowCongrats(true);
      }, 2000);
    };
    
      // Function to handle modal close
  const handleCloseModal = () => {
    setShowCongrats(false);
  };

  // Redirect to home after 2 seconds
  useEffect(() => {
    if (showCongrats) {
      const timeout = setTimeout(() => {
        setShowCongrats(false);
        // Redirect to home
        navigation.navigate('MainContent');
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showCongrats]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <StyledContainer>
      <AuthPageTitleText>OTP Verification</AuthPageTitleText>
        <SignUpVerification>
            <SignUpOtpText>Enter the verification code that was sent to your phone number</SignUpOtpText>
            <SignUPOtpImageConatainer>
              <SignUPOtpImage source={require("../../assets/images/Otp.png")} />
            </SignUPOtpImageConatainer>
        </SignUpVerification>
      <View style={styles.container}>
          {/* Render OTP input fields */}
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={value => handleOTPChange(index, value)}
              onFocus={() => handleFocus(index)}
            />
          ))}
        </View>
        <OtpButtonBottom>
            <StyledButton onPress={handleVerify} disabled={loading}>
              <ButtonText>{loading ? 'Verifying...' : 'Verify'}</ButtonText>
            </StyledButton>
            <ResendBox>
              <OtpVerficationCountdown>Resend OTP in 30s</OtpVerficationCountdown>
              <ResendOtpTextBtn>
                <ResendOtpText>Resend OTP</ResendOtpText>
              </ResendOtpTextBtn>
            </ResendBox>
        </OtpButtonBottom>

        {/* ========modal pop up==== */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCongrats}
          onRequestClose={handleCloseModal}
        >
          <Congrats onClose={handleCloseModal} />
        </Modal>
    </StyledContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 10,
    width: 70,
    height: 70,
    marginHorizontal: 5,
    textAlign: "center",
  },
});

export default SignUpOtp;







