import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


import { AllSupportContainer, Colors, InnerContainer, PageTitle, PageTitleHeader, StyledContainer, SupportIcon, SupportLeft, SupportOption, SupportOptions, SupportRightIcon } from '../../styles/Style';
import { Ionicons, Octicons } from '@expo/vector-icons';



const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(previousState => !previousState);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Settings</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
            <AllSupportContainer>
                {/* ===========Notification=========== */}
                <SupportOptions activeOpacity={0.7}>
                    <SupportLeft>
                      <SupportIcon>
                        <Ionicons name='notifications' size={24} color={Colors.black}/>
                      </SupportIcon>
                      <SupportOption>Notifications</SupportOption>
                    </SupportLeft>
                    <SupportRightIcon>
                      <Ionicons name='chevron-forward' size={24} color={Colors.black}/>
                    </SupportRightIcon>
                </SupportOptions>
                {/* =====Security========= */}
                <SupportOptions activeOpacity={0.7} >
                    <SupportLeft>
                      <SupportIcon>
                        <Ionicons name='shield' size={24} color={Colors.black}/>
                      </SupportIcon>
                      <SupportOption>Privacy and Security</SupportOption>
                    </SupportLeft>
                    <SupportRightIcon>
                      <Ionicons name='chevron-forward' size={24} color={Colors.black}/>
                    </SupportRightIcon>
                </SupportOptions>
                {/* ================ call option========== */}
                <SupportOptions activeOpacity={0.7} >
                    <SupportLeft>
                      <SupportIcon>
                        <Ionicons name='information-circle' size={24} color={Colors.black}/>
                      </SupportIcon>
                      <SupportOption>Contact Us</SupportOption>
                    </SupportLeft>
                    <SupportRightIcon>
                      <Ionicons name='chevron-forward' size={24} color={Colors.black}/>
                    </SupportRightIcon>
                </SupportOptions>
          {/* ================ Dark theme mode========== */}
          <SupportOptions activeOpacity={0.7}>
              <SupportLeft>
                <SupportIcon>
                  <Ionicons name={isDarkMode ? 'moon' : 'moon-outline'} size={24} color={Colors.black} />
                </SupportIcon>
                <SupportOption>Dark mode</SupportOption>
              </SupportLeft>
              <TouchableOpacity onPress={toggleDarkMode}>
                <SupportRightIcon>
                <Switch
                  trackColor={{ false: Colors.inputPlaceholder, true: Colors.inputPlaceholder }}
                  thumbColor={isDarkMode ? Colors.black : Colors.whiteColor}
                  ios_backgroundColor={Colors.inputPlaceholder}
                  onValueChange={toggleDarkMode}
                  value={isDarkMode}
                />
                </SupportRightIcon>
              </TouchableOpacity>
            </SupportOptions>
                {/* ================Privacy policy========== */}
                <SupportOptions activeOpacity={0.7} >
                    <SupportLeft>
                      {/* <SupportIcon>
                        <Ionicons name='moon' size={24} color={Colors.black}/>
                      </SupportIcon> */}
                      <SupportOption>Privacy policy</SupportOption>
                    </SupportLeft>
                    <SupportRightIcon>
                      <Ionicons name='chevron-forward' size={24} color={Colors.black}/>
                    </SupportRightIcon>
                </SupportOptions>
              </AllSupportContainer>

            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default Settings
