import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NoticeData } from './NotificationData';
import { Colors, DateDemarcation, InnerContainer, NoticeIcon, NotificationContent, NotificationContentCenter, NotificationContentDescText, NotificationContentLeft, NotificationContentTime, NotificationContentTitleText, NotificationsContainer, PageTitle, PageTitleHeader, StyledContainer } from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';

const Notification = () => {
  // Function to format the date as 'Today', 'Yesterday', or default date format
  const formatDate = (dateString) => {
    const dateParts = dateString.split('/');
    const formattedDate = new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (formattedDate.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (formattedDate.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return formattedDate.toLocaleDateString();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Notification</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <NotificationsContainer>
              {NoticeData.map((notification, index) => (
                <React.Fragment key={notification.id}>
                  {index === 0 || formatDate(notification.notificationDate) !== formatDate(NoticeData[index - 1].notificationDate) ? (
                    <DateDemarcation style={{ marginVertical: 10, paddingHorizontal: 10 }}>
                      <Text style={{ fontFamily: "PoppinsRegular", fontSize: 13 }}>{formatDate(notification.notificationDate)}</Text>
                    </DateDemarcation>
                  ) : null}
                  <NotificationContent>
                    <NotificationContentLeft>
                      <NoticeIcon>
                        <Ionicons name='information-circle' size={24} color={Colors.black}/>
                      </NoticeIcon>
                      <NotificationContentCenter>
                        <NotificationContentTitleText>{notification.notificationTitle}</NotificationContentTitleText>
                        <NotificationContentDescText>{notification.notificationDesc}</NotificationContentDescText>
                      </NotificationContentCenter>
                    </NotificationContentLeft>
                    <View>
                      <NotificationContentTime>{notification.notificationTime}</NotificationContentTime>
                    </View>
                  </NotificationContent>
                </React.Fragment>
              ))}
            </NotificationsContainer>
          </ScrollView>
        </InnerContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default Notification;
