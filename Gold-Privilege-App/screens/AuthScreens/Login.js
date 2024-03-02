import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";

// Import styles and constants from another file
import {
  StyledContainer,
  InnerContainer,
  StyledFormArea,
  StyledTextInput,
  ButtonText,
  StyledButton,
  Colors,
  ToSignupPageBox,
  ToSignupPageText,
  TextLink,
  TextLinkContent,
  RightIcon,
  AuthImageContainer,
  AuthImage,
  AuthContainer,
  AuthHeaderContainer,
  AuthHeadingTextContainer,
  AuthHeadingTextLeft,
  AuthHeadingTextRight,
  AuthTitle,
  AuthInnerContainer,
  FormSelection,
  FormTab,
  FormTabText,
  InputLabelText,
  CtaTextContainer,
  CtaText,
} from "../../styles/Style";

// Destructure constants from the Colors object
const { inputPlaceholder, backgroundColor, primary } = Colors;

// Define the Login component
const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [data, setData] = useState({ email: '', password: '', phoneNumber: ''});
  const [loading, setLoading] = useState(false); // Define loading state
  const [activeTab, setActiveTab] = useState("email"); // State to track active tab

  const handleSignin = async () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); // Set loading to false when the login process completes
      navigation.navigate('MainContent');
    }, 2000); // Change 2000 to the time it takes to complete the login process
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthContainer>
        <StatusBar style="light" backgroundColor={primary} />
        <AuthHeaderContainer>
          <AuthImageContainer>
            <AuthImage source={require("../../assets/images/welcom1.jpg")} />
          </AuthImageContainer>
          <AuthHeadingTextContainer>
            <AuthHeadingTextLeft>Hello,</AuthHeadingTextLeft>
            <AuthHeadingTextRight>Welcome Back!</AuthHeadingTextRight>
          </AuthHeadingTextContainer>
        </AuthHeaderContainer>
        <AuthInnerContainer>
          <AuthTitle>Sign In</AuthTitle>
          <FormSelection>
            <TouchableOpacity onPress={() => setActiveTab("email")} style={activeTab === "email" ? styles.activeTab : null}>
              <FormTab >
              <FormTabText style={activeTab === "email" ? styles.activeTabText : null}>Email</FormTabText>
              </FormTab>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("phoneNumber")} style={activeTab === "phoneNumber" ? styles.activeTab : null}>
              <FormTab >
                <FormTabText style={activeTab === "phoneNumber" ? styles.activeTabText : null}>Phone Number</FormTabText>
              </FormTab>
            </TouchableOpacity>
          </FormSelection>
          <StyledFormArea>
            {activeTab === "email" && (
              <>
                <InputLabelText>Email</InputLabelText>
                <StyledTextInput
                  placeholder="Enter email"
                  placeholderTextColor={inputPlaceholder}
                  value={data.email}
                  onChangeText={(text) => setData({...data, email: text})}
                />
              </>
            )}
            {activeTab === "phoneNumber" && (
              <>
                <InputLabelText>Phone Number</InputLabelText>
                <StyledTextInput
                  placeholder="Enter phone number"
                  placeholderTextColor={inputPlaceholder}
                  value={data.phoneNumber}
                  keyboardType="numeric"
                  onChangeText={(text) => setData({...data, phoneNumber: text})}
                />
              </>
            )}
            <InputLabelText>Password</InputLabelText>
            <MyTextInput
              placeholder="Password"
              placeholderTextColor={inputPlaceholder}
              value={data.password}
              secureTextEntry={hidePassword}
              togglePasswordVisibility={() => setHidePassword(!hidePassword)}
              onChangeText={(text) => setData({...data, password: text})}
            />

            {/* ==========Button========= */}
            <CtaTextContainer onPress={() => navigation.navigate("ResetOptions")}>
              <CtaText>Forgot password?</CtaText>
            </CtaTextContainer>
            {!loading ? (
              <StyledButton onPress={handleSignin}>
                <ButtonText>LOG IN</ButtonText>
              </StyledButton>
            ) : (
              <StyledButton disabled={true}>
                <ActivityIndicator size="large" color={inputPlaceholder} />
              </StyledButton>
            )}
            <ToSignupPageBox>
              <ToSignupPageText>
                Don't have an account already?
              </ToSignupPageText>
              <TextLink onPress={() => navigation.navigate("SignUp")}>
                <TextLinkContent>Signup</TextLinkContent>
              </TextLink>
            </ToSignupPageBox>
          </StyledFormArea>
        </AuthInnerContainer>
      </AuthContainer>
    </SafeAreaView>
  );
};

const MyTextInput = ({ icon, togglePasswordVisibility, ...props }) => {
  return (
    <View>
      <StyledTextInput {...props} />
      {props.value.length > 0 && (
        <RightIcon onPress={togglePasswordVisibility}>
          <Octicons
            name={props.secureTextEntry ? "eye-closed" : "eye"}
            size={17}
            color={inputPlaceholder}
          />
        </RightIcon>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  activeTab: {
    borderBottomColor: primary,
    borderBottomWidth: 2,
  },
  activeTabText: {
    color: primary,
  },
});


export default Login;
