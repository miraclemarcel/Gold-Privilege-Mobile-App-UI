import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NoticeData } from './NotificationData';


import { InnerContainer, NotificationContent, NotificationsContainer, PageTitle, PageTitleHeader, StyledContainer } from '../../styles/Style';



const Notification = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Notification</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
              <ScrollView>
                <NotificationsContainer>
                  <NotificationContent>
                    <Text>Helloooooo</Text>
                  </NotificationContent>
                </NotificationsContainer>
              </ScrollView>
            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default Notification
