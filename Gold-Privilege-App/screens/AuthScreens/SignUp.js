import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';

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
  AuthSubTitle,
  InputLabelText,
  ToSignupPageBoxSignUp,
  FirstAndLast,
  FirstAndLastInput,
  NameInputContainer,
} from "../../styles/Style";

// Destructure constants from the Colors object
const { inputPlaceholder, backgroundColor, primary } = Colors;

// Define the Login component
const SignUp = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setConfirmHidePassword] = useState(true);
  const [data, setData] = useState({ firstName: '', lastName: '',  email: '',  phoneNumber: '', dateOfBirth: '', password: '', confirmPassword: ''});
  const [loading, setLoading] = useState(false); // Define loading state
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  // ====actual date of birth of the user to be sent===
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  }

  const showDatePicker = () => {
    setShow(true);
  }

  const handleSignUp = async () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); // Set loading to false when the login process completes
      navigation.navigate('SignUpOtp');
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
              <AuthHeadingTextLeft>Welcome to,</AuthHeadingTextLeft>
              <AuthHeadingTextRight>Gold Privilege!</AuthHeadingTextRight>
            </AuthHeadingTextContainer>
          </AuthHeaderContainer>
          <ScrollView>
          <AuthInnerContainer>
            <AuthSubTitle>START FOR FREE</AuthSubTitle>
            <AuthTitle>Create an account</AuthTitle>
                {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={date}
                  is24Hour={true}
                  onChange={onChange}
                />
              )}

            <StyledFormArea>
              <FirstAndLast>
                <NameInputContainer>
                  <InputLabelText>First name</InputLabelText>
                  <FirstAndLastInput 
                    value={data.firstName}
                    keyboardType="default"
                    onChangeText={(text) => setData({...data, firstName: text})}
                  />
                </NameInputContainer>
                <NameInputContainer>
                  <InputLabelText>Last name</InputLabelText>
                  <FirstAndLastInput 
                    value={data.lastName}
                    keyboardType="default"
                    onChangeText={(text) => setData({...data, lastName: text})}
                  />
                </NameInputContainer>
              
              </FirstAndLast>
            <InputLabelText>Email</InputLabelText>
              <StyledTextInput
                value={data.email}
                onChangeText={(text) => setData({...data, email: text})}
              />
              <InputLabelText>Date of birth</InputLabelText>
                <StyledTextInput
                  placeholder="YYYY - MM - DD"
                  placeholderTextColor={inputPlaceholder}
                  value={dob ? dob.toDateString() : ''}
                  isDate={true}
                  showDatePicker={showDatePicker}
                  editable={false}
                />
                
              <InputLabelText>Phone Number</InputLabelText>
              <StyledTextInput
                value={data.email}
                keyboardType="numeric"
                onChangeText={(text) => setData({...data, phoneNumber: text})}
              />
              <InputLabelText>Password</InputLabelText>
              <MyTextInput
                // placeholder="Password"
                // placeholderTextColor={inputPlaceholder}
                value={data.password}
                secureTextEntry={hidePassword}
                togglePasswordVisibility={() => setHidePassword(!hidePassword)}
                onChangeText={(text) => setData({...data, password: text})}
              />
              <InputLabelText>Confirm assword</InputLabelText>
              <MyTextInput
                // placeholder="Password"
                // placeholderTextColor={inputPlaceholder}
                value={data.confirmPassword}
                secureTextEntry={hideConfirmPassword}
                togglePasswordVisibility={() => setConfirmHidePassword(!hideConfirmPassword)}
                onChangeText={(text) => setData({...data, confirmPassword: text})}
              />

              {/* ==========Button========= */}
              {!loading ? (
                <StyledButton onPress={handleSignUp}>
                  <ButtonText>SIGN UP</ButtonText>
                </StyledButton>
              ) : (
                <StyledButton disabled={true}>
                  <ActivityIndicator size="large" color={inputPlaceholder} />
                </StyledButton>
              )}
              <ToSignupPageBoxSignUp>
                <ToSignupPageText>
                  Don't have an account already?
                </ToSignupPageText>
                <TextLink onPress={() => navigation.navigate("Login")}>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ToSignupPageBoxSignUp>
            </StyledFormArea>
          </AuthInnerContainer>
          </ScrollView>
        </AuthContainer>
    </SafeAreaView>
  );
};

const MyTextInput = ({ icon, togglePasswordVisibility, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      {isDate ? (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      ) : (
        <StyledTextInput {...props} />
      )}
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


export default SignUp;