import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUpOtp = () => {
  const [otp, setOTP] = useState(["", "", "", ""]); // Array to store OTP digits
  const inputRefs = useRef([]); // Ref for input fields

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Verify OTP</Text>
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
    width: 40,
    height: 40,
    marginHorizontal: 5,
    textAlign: "center",
  },
});

export default SignUpOtp;







