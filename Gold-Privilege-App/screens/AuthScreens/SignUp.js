import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, ActivityIndicator, TouchableOpacity, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Octicons } from "@expo/vector-icons";
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
  CalendarRightIcon,
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
  const [agreed, setAgreed] = useState(false); // State to manage agreement checkbox


  // ====actual date of birth of the user to be sent===
  const [dob, setDob] = useState();


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    // Check if selectedDate is defined
    if (selectedDate) {
      // Extract month and day from the selected date
      const selectedMonth = currentDate.toLocaleString('default', { month: 'long' });
      const selectedDay = currentDate.getDate();
      // Set the date of birth in the format "Month Day"
      setDob(`${selectedMonth} ${selectedDay}`);
    }
  }

  

  const showDatePicker = () => {
    setShow(true);
  }

  const handleSignUp = async () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false); // Set loading to false when the login process completes
      navigation.navigate('SignUpOtp');
    }, 2000); 
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
            {/* <AuthSubTitle>START FOR FREE</AuthSubTitle> */}
            <AuthTitle>Create an account</AuthTitle>
                {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                display="spinner"
                mode="date"
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
              <MyTextInput
                  icon="mail"
                  placeholder="DD-MM"
                  placeholderTextColor={inputPlaceholder}
                  isDate={true}
                  showDatePicker={showDatePicker}
                  selectedDate={dob} 
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
              <InputLabelText>Confirm Password</InputLabelText>
              <MyTextInput
                // placeholder="Password"
                // placeholderTextColor={inputPlaceholder}
                value={data.confirmPassword}
                secureTextEntry={hideConfirmPassword}
                togglePasswordVisibility={() => setConfirmHidePassword(!hideConfirmPassword)}
                onChangeText={(text) => setData({...data, confirmPassword: text})}
              />
              {/* <View style={{ marginTop: 15}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="checkmark-circle" size={24} color={Colors.primary} />
                  <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 12 }}>I have read and agree to the Terms of Service. 
                    <Text style={{ fontFamily: 'PoppinsRegular', color: Colors.primary, fontSize: 12}}> Gold Privilege's Terms</Text>
                    </Text>
                </View>
              </View> */}
              <View style={{ marginTop: 15}}>
              
                  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <TouchableOpacity onPress={() => setAgreed(!agreed)} activeOpacity={0.6}>
                    <Ionicons name={agreed ? "checkbox" : "checkbox-outline"} size={24} color={Colors.primary} />
                  </TouchableOpacity>
                    <Text style={{ fontFamily: 'PoppinsRegular', fontSize: 12 }}>I have read and agree to the Terms of Service. 
                      <Text style={{ fontFamily: 'PoppinsRegular', color: Colors.primary, fontSize: 12}}> Gold Privilege's Terms</Text>
                    </Text>
                  </View>
               
              </View>
              {/* ==========Button========= */}
              {!loading ? (
                <StyledButton onPress={handleSignUp} activeOpacity={0.9}>
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

// Inside your MyTextInput component


// Inside your MyTextInput component

const MyTextInput = ({ icon, togglePasswordVisibility, isDate, showDatePicker, selectedDate, secureTextEntry, ...props }) => {
  return (
    <View>
     {isDate ? (
       <View >
          <StyledTextInput {...props} value={selectedDate} />
          <CalendarRightIcon onPress={showDatePicker}>
            <Octicons
              name="calendar"
              size={17}
              color={inputPlaceholder}
            />
          </CalendarRightIcon>
        </View>
      ) : (
        <StyledTextInput {...props} secureTextEntry={secureTextEntry} />
      )}
      {!isDate && (
        <RightIcon onPress={togglePasswordVisibility}>
          <Octicons
            name={secureTextEntry ? "eye-closed" : "eye"}
            size={17}
            color={inputPlaceholder}
          />
        </RightIcon>
      )}
    </View>
  );
};


// const MyTextInput = ({ icon, togglePasswordVisibility, isDate, showDatePicker, selectedDate, ...props }) => {
//   return (
//     <View>
//      {isDate ? (
//        <View >
//           <StyledTextInput {...props} value={selectedDate} />
//           <CalendarRightIcon onPress={showDatePicker}>
//             <Octicons
//               name="calendar"
//               size={17}
//               color={inputPlaceholder}
//             />
//           </CalendarRightIcon>
//         </View>
//       ) : (
//         <StyledTextInput {...props} />
//       )}
//       {props.secureTextEntry && (
//         <RightIcon onPress={togglePasswordVisibility}>
//           <Octicons
//             name={props.secureTextEntry ? "eye-closed" : "eye"}
//             size={17}
//             color={inputPlaceholder}
//           />
//         </RightIcon>
//       )}
//     </View>
//   );
// };



export default SignUp;