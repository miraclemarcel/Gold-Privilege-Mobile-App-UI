import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


import { AllSupportContainer, ButtonText, Colors, InnerContainer, NotificationOptions, NotificationOptionsContainer, PageTitle, PageTitleHeader, StyledButton, StyledContainer, SupportIcon, SupportLeft, SupportOption, SupportOptions, SupportRightIcon } from '../../styles/Style';
import { Ionicons, Octicons } from '@expo/vector-icons';



const NotificationsSettings = () => {
  const [isPushNotification, setIsPushNotification] = useState(false);
  const [isSmsNotification, setIsSmsNotification] = useState(false);
  const [isPhoneNotification, setIsPhoneNotification] = useState(false);


  const togglePushNotification = () => {
    setIsPushNotification(previousState => !previousState);
  };
  const toggleSmsNotification = () => {
    setIsSmsNotification(previousState => !previousState);
  };
  const togglePhoneNotification = () => {
    setIsPhoneNotification(previousState => !previousState);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Notifications</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
            <NotificationOptionsContainer>
          {/* ================Notification ========== */}
          <NotificationOptions activeOpacity={0.7}>
              <SupportLeft>
                <SupportOption>Push notifications</SupportOption>
              </SupportLeft>
              <TouchableOpacity onPress={togglePushNotification}>
                <SupportRightIcon>
                <Switch
                  trackColor={{ false: Colors.inputPlaceholder, true: Colors.inputPlaceholder }}
                  thumbColor={isPushNotification ? Colors.primary : Colors.whiteColor}
                  ios_backgroundColor={Colors.inputPlaceholder}
                  onValueChange={togglePushNotification}
                  value={isPushNotification}
                />
                </SupportRightIcon>
              </TouchableOpacity>
            </NotificationOptions>
          {/* ================SMS Notification ========== */}
          <NotificationOptions activeOpacity={0.7}>
              <SupportLeft>
                <SupportOption>SMS Notification</SupportOption>
              </SupportLeft>
              <TouchableOpacity onPress={toggleSmsNotification}>
                <SupportRightIcon>
                <Switch
                  trackColor={{ false: Colors.inputPlaceholder, true: Colors.inputPlaceholder }}
                  thumbColor={isSmsNotification ? Colors.primary : Colors.whiteColor}
                  ios_backgroundColor={Colors.inputPlaceholder}
                  onValueChange={toggleSmsNotification}
                  value={isSmsNotification}
                />
                </SupportRightIcon>
              </TouchableOpacity>
            </NotificationOptions>
          {/* ================Phone notifications ========== */}
          <NotificationOptions activeOpacity={0.7}>
              <SupportLeft>
                <SupportOption>Phone notifications</SupportOption>
              </SupportLeft>
              <TouchableOpacity onPress={togglePhoneNotification}>
                <SupportRightIcon>
                <Switch
                  trackColor={{ false: Colors.inputPlaceholder, true: Colors.inputPlaceholder }}
                  thumbColor={isPhoneNotification ? Colors.primary : Colors.whiteColor}
                  ios_backgroundColor={Colors.inputPlaceholder}
                  onValueChange={togglePhoneNotification}
                  value={isPhoneNotification}
                />
                </SupportRightIcon>
              </TouchableOpacity>
            </NotificationOptions>
            <View style={{marginTop: 60}}>
                <StyledButton activeOpacity={0.9}>
                    <ButtonText>Save Changes</ButtonText>
                </StyledButton>
            </View>
              </NotificationOptionsContainer>
            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default NotificationsSettings
