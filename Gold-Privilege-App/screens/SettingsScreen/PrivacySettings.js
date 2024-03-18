import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


import { AllSupportContainer, ButtonText, Colors, InnerContainer, NotificationOptions, NotificationOptionsContainer, PageTitle, PageTitleHeader, StyledButton, StyledContainer, SupportIcon, SupportLeft, SupportOption, SupportOptions, SupportRightIcon } from '../../styles/Style';
import { Ionicons, Octicons } from '@expo/vector-icons';



const PrivacySettings = () => {
  const [isFaceID, setIsFaceID] = useState(false);
  const [isShareContact, setIsShareContact] = useState(false);
 


  const toggleFaceID = () => {
    setIsFaceID(previousState => !previousState);
  };
  const toggleShareContact = () => {
    setIsShareContact(previousState => !previousState);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Privacy & Security</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
            <NotificationOptionsContainer>
          {/* ================Notification ========== */}

          <SupportOptions activeOpacity={0.7}>
              <SupportLeft>
                <SupportOption>Change Password</SupportOption>
              </SupportLeft>
                <SupportRightIcon>
                <Ionicons name='chevron-forward' size={24} color={Colors.darkColor}/>
                </SupportRightIcon>
            </SupportOptions>
          {/* ================FaceID Sign in ========== */}
          
          <SupportOptions activeOpacity={0.7}>
              <SupportLeft>
                <SupportOption>Sign in with Face ID</SupportOption>
              </SupportLeft>
              <TouchableOpacity onPress={toggleFaceID}>
                <SupportRightIcon>
                <Switch
                  trackColor={{ false: Colors.inputPlaceholder, true: Colors.inputPlaceholder }}
                  thumbColor={isFaceID ? Colors.primary : Colors.whiteColor}
                  ios_backgroundColor={Colors.inputPlaceholder}
                  onValueChange={toggleFaceID}
                  value={isFaceID}
                />
                </SupportRightIcon>
              </TouchableOpacity>
            </SupportOptions>
          {/* ================Share my contacts ========== */}
          <SupportOptions activeOpacity={0.7}>
              <SupportLeft>
               <View>
                <SupportOption>Share my contacts</SupportOption>
                <Text style={{fontSize: 13}}>Allow Gold Privilege to access my contacts</Text>
               </View>
              </SupportLeft>
              <TouchableOpacity onPress={toggleShareContact}>
                <SupportRightIcon>
                <Switch
                  trackColor={{ false: Colors.inputPlaceholder, true: Colors.inputPlaceholder }}
                  thumbColor={isShareContact ? Colors.primary : Colors.whiteColor}
                  ios_backgroundColor={Colors.inputPlaceholder}
                  onValueChange={toggleShareContact}
                  value={isShareContact}
                />
                </SupportRightIcon>
              </TouchableOpacity>
            </SupportOptions>
              </NotificationOptionsContainer>
            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default PrivacySettings
