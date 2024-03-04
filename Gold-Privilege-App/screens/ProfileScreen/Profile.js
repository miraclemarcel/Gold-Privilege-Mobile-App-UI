import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import { 
    Colors,
    PageTitle,
    PageTitleHeader,
    ProfileContainer, ProfileHeaderSection, ProfileInnerContainer, ProfileOption, ProfileOptionContainer, ProfileOptionLeft, ProfileOptionLeftText, ProfileOptionRightIcon, ProfileTitleHeader, UserAvatar, UserAvatarContainer, UserID, UserName, UserPointBtn, UserPointText,
} from '../../styles/Style'
import { Ionicons } from '@expo/vector-icons'

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <ProfileTitleHeader/>
        <ProfileContainer>
            <ProfileInnerContainer>
                <ProfileHeaderSection>
                    <UserAvatarContainer>
                        <UserAvatar source={require("../../assets/images/Avatar-Img.png")}/>
                    </UserAvatarContainer>
                    <UserName>Miracle Marcel</UserName>
                    <UserID>GP24266357</UserID>
                    <UserPointBtn>
                        <Ionicons name="trophy-outline" size={20} color={Colors.primary} />
                        <UserPointText>800Pts</UserPointText>
                    </UserPointBtn>
                </ProfileHeaderSection>
              <ProfileOption>
                <ProfileOptionContainer>
                        <ProfileOptionLeft>
                            <Ionicons name="person" size={20} color={Colors.whiteColor} />
                            <ProfileOptionLeftText>Profile</ProfileOptionLeftText>
                        </ProfileOptionLeft>
                        <ProfileOptionRightIcon>
                            <Ionicons name="chevron-forward" size={20} color={Colors.whiteColor} />
                        </ProfileOptionRightIcon>
                    </ProfileOptionContainer>
                    <ProfileOptionContainer>
                        <ProfileOptionLeft>
                            <Ionicons name="calendar-outline" size={20} color={Colors.whiteColor} />
                            <ProfileOptionLeftText>Plan</ProfileOptionLeftText>
                        </ProfileOptionLeft>
                        <ProfileOptionRightIcon>
                            <Ionicons name="chevron-forward" size={20} color={Colors.whiteColor} />
                        </ProfileOptionRightIcon>
                    </ProfileOptionContainer>
                    <ProfileOptionContainer>
                        <ProfileOptionLeft>
                            <Ionicons name="settings-outline" size={20} color={Colors.whiteColor} />
                            <ProfileOptionLeftText>Settings</ProfileOptionLeftText>
                        </ProfileOptionLeft>
                        <ProfileOptionRightIcon>
                            <Ionicons name="chevron-forward" size={20} color={Colors.whiteColor} />
                        </ProfileOptionRightIcon>
                    </ProfileOptionContainer>
              </ProfileOption>
                {/* <View>
                    <Text>Profile screen </Text>
                </View> */}
            </ProfileInnerContainer>
        </ProfileContainer>
        
    </SafeAreaView>
   
  )
}

export default Profile
