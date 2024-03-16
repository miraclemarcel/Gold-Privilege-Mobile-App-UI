import React from 'react'
import { ImageBackground, ScrollView, Text, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'


import { 
    Colors,
    PageTitleHeader,
    ProfilTitleHeader,
    ProfileContainer, 
    ProfileHeaderSection, 
    ProfileInnerContainer, 
    ProfileOption, 
    ProfileOptionContainer, 
    ProfileOptionLeft, 
    ProfileOptionLeftText, 
    ProfileOptionRightIcon, 
    ProfileTitleContainer, 
    ProfileTitleHeader, 
    SignOutBtn, 
    SignOutBtnText, 
    UpgradeBtn, 
    UpgradeBtnText, 
    UpgradeText, 
    UpgradeTextContainer, 
    UpgradeTextContainerTwo, 
    UpgradeTextYellow, 
    UpgrePlanContainer, 
    UserAvatar, 
    UserAvatarContainer, 
    UserAvatarIcon, 
    UserID, 
    UserName, 
    UserPointBtn, 
    UserPointText,
} from '../../styles/Style'
import { Ionicons } from '@expo/vector-icons'

const Profile = ({ navigation }) => {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfilTitleHeader/>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
        <ProfileContainer>
            <ProfileInnerContainer>
                <ProfileHeaderSection>
                    <UserAvatarContainer>
                        <UserAvatar source={require("../../assets/images/Avatar-Img.png")}/>
                        <UserAvatarIcon onPress={() => navigation.navigate('AvatarUpload')} activeOpacity={0.5}>
                        <Ionicons name='happy-outline' size={24} color={Colors.whiteColor} />
                        </UserAvatarIcon>
                    </UserAvatarContainer>
                    <UserName>Miracle Marcel</UserName>
                    <UserID>GP24266357</UserID>
                    <UserPointBtn>
                        <Ionicons name="trophy-outline" size={20} color={Colors.primary} />
                        <UserPointText>800Pts</UserPointText>
                    </UserPointBtn>
                </ProfileHeaderSection>
              <ProfileOption>
                    <ProfileOptionContainer activeOpacity={0.8} onPress={() => navigation.navigate("UpdateProfile")}>
                        <ProfileOptionLeft>
                            <Ionicons name="person" size={20} color={Colors.whiteColor} />
                            <ProfileOptionLeftText>Profile</ProfileOptionLeftText>
                        </ProfileOptionLeft>
                        <ProfileOptionRightIcon>
                            <Ionicons name="chevron-forward" size={20} color={Colors.whiteColor} />
                        </ProfileOptionRightIcon>
                    </ProfileOptionContainer>
                    <ProfileOptionContainer activeOpacity={0.8} onPress={() => navigation.navigate("MyPlan")}>
                        <ProfileOptionLeft>
                            <Ionicons name="calendar-outline" size={20} color={Colors.whiteColor} />
                            <ProfileOptionLeftText>My Plan</ProfileOptionLeftText>
                        </ProfileOptionLeft>
                        <ProfileOptionRightIcon>
                            <Ionicons name="chevron-forward" size={20} color={Colors.whiteColor} />
                        </ProfileOptionRightIcon>
                    </ProfileOptionContainer>
                    <ProfileOptionContainer activeOpacity={0.8} onPress={() => navigation.navigate("Support")}>
                        <ProfileOptionLeft>
                            <Ionicons name="calendar-outline" size={20} color={Colors.whiteColor} />
                            <ProfileOptionLeftText>Customer Support</ProfileOptionLeftText>
                        </ProfileOptionLeft>
                        <ProfileOptionRightIcon>
                            <Ionicons name="chevron-forward" size={20} color={Colors.whiteColor} />
                        </ProfileOptionRightIcon>
                    </ProfileOptionContainer>
                    <ProfileOptionContainer activeOpacity={0.8} >
                        <ProfileOptionLeft>
                            <Ionicons name="settings-outline" size={20} color={Colors.whiteColor} />
                            <ProfileOptionLeftText>Settings</ProfileOptionLeftText>
                        </ProfileOptionLeft>
                        <ProfileOptionRightIcon>
                            <Ionicons name="chevron-forward" size={20} color={Colors.whiteColor} />
                        </ProfileOptionRightIcon>
                    </ProfileOptionContainer>
              </ProfileOption>
              <UpgrePlanContainer>
                <ImageBackground source={require('../../assets/images/upgrdeImg.png')}
                style={{ 
                    height: 120, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}
                >
                    <UpgradeTextContainer>
                        <UpgradeText>Upgrade Your</UpgradeText>
                        <UpgradeTextContainerTwo>
                            <UpgradeText>Membership</UpgradeText>
                            <UpgradeTextYellow>Plan</UpgradeTextYellow>
                        </UpgradeTextContainerTwo>
                    </UpgradeTextContainer>
                    <TouchableOpacity onPress={() => navigation.navigate("UpgradePlan")}>
                        <UpgradeBtn>
                            <UpgradeBtnText>Upgrade</UpgradeBtnText>
                        </UpgradeBtn>
                    </TouchableOpacity>
                </ImageBackground>
              </UpgrePlanContainer>
                <SignOutBtn >
                    <Ionicons name="log-out-outline" size={20} color={Colors.black} style={{ transform: [{ rotateY: '180deg' }] }} />
                    <SignOutBtnText>Sign Out</SignOutBtnText>
                </SignOutBtn>
            </ProfileInnerContainer>
        </ProfileContainer>
    </ScrollView>
    </SafeAreaView>
   
  )
}

export default Profile
