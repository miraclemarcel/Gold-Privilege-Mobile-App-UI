import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import { 
  ButtonText,
  InnerContainer, 
  PageTitle, 
  PageTitleHeader, 
  ProfileButtonContainer, 
  ProfileInputLabelSmall, 
  ProfileInputLabelText, 
  StyledButton, 
  StyledContainer, 
  StyledFormArea,
  StyledProfileInput,
} from '../../styles/Style'

const UpdateProfile = () => {
  const [data, setData] = useState( {firstName: "", lastName: "", email: "", phoneNumber: ""})


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Profile Details</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
      <StyledFormArea>
        <ProfileInputLabelText>First name</ProfileInputLabelText>
        <StyledProfileInput
          placeholder='First Name'
          value={data.firstName}
          onChangeText={(text) => setData({...data, firstName: text})}
          keyboardType='default'
        />
        <ProfileInputLabelText>Last name</ProfileInputLabelText>
        <StyledProfileInput
          placeholder='Last Name'
          value={data.lastName}
          onChangeText={(text) => setData({...data, lastName: text})}
          keyboardType='default'
        />
        <ProfileInputLabelText>Email Address</ProfileInputLabelText>
        <ProfileInputLabelSmall>Your registered email address</ProfileInputLabelSmall>
        <StyledProfileInput
          placeholder='Email Address'
          value={data.email}
          onChangeText={(text) => setData({...data, email: text})}
          keyboardType='default'
        />
        <ProfileInputLabelText>Phone Number</ProfileInputLabelText>
        <ProfileInputLabelSmall>Your registered phone number</ProfileInputLabelSmall>
        <StyledProfileInput
          placeholder='Phone Number'
          value={data.phoneNumber}
          onChangeText={(text) => setData({...data, phoneNumber: text})}
          keyboardType='numeric'
        />
        <ProfileButtonContainer>
          <StyledButton>
            <ButtonText>Save Changes</ButtonText>
          </StyledButton>
        </ProfileButtonContainer>
      </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
     
    </SafeAreaView>
  )
}

export default UpdateProfile
