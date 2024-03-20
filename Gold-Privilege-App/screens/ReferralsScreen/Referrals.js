import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


import { 
  InnerContainer, 
  PageTitle, 
  PageTitleHeader,
  Colors, 
  ReferralsImagesContainer, 
  StyledContainer, 
  TopThreeImages,
  ReferralHeadContainer,
  ReferralTittle,
  ReferralBodyText,
  ReferralCopyContainer,
  CopyInput,
  LinkShareContainer,
  SuccessAlert,
  SuccessAlertText,
  AlertContainer,
  ReferralHeadContainer2,
  RefCont2Text,
  ReferralActivityContainer,
  RefActivityHeading,
  RefContTwoText,
  RefActivityHeadingContainer,
  ReferralActivityList,
  ReferredUsers,
  ReferredUsersLeft,
  ReferredUserName,
  ReferredUserTimeAndDateContainer,
  ReferredUserTime,
  ReferredUserDate,
  ReferredUsersRightBtnWhite,
  ReferredUsersRightBtnText,
  ReferredUsersRightBtnPrimary,
  ReferredUsersRightBtnPrimaryText,
} from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';
import BonusModal from './BonusModal';


const ReferralLink = [
  {
    userReferralLink: "https://api-goldprivilege.inovacaong.com/swagger/index.html"
  }
]



const Referrals = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = () => {
    const link = ReferralLink[0].userReferralLink;
    // Copy the referral link to clipboard
    setShowAlert(true);
    // Hide the alert after 2 seconds
    setTimeout(() => setShowAlert(false), 2000);
  };

  const shareLink = () => {
    const link = ReferralLink[0].userReferralLink;
    // Share the referral link
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  
  
  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Referrals</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
          <ScrollView
          showsVerticalScrollIndicator={false}
          >
            <InnerContainer>
              <ReferralsImagesContainer>
                <View>
                  <Image source={require('../../assets/images/ref-img-1.png')} style={{width: 100, height: 100, borderRadius: 100, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                </View>
                <TopThreeImages>
                  <View style={{position: 'absolute', top: -150, left: -95, overflow: 'hidden'}}>   
                    <Image source={require('../../assets/images/ref-img-2.png')} style={{width: 70, height: 70, borderRadius: 50, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                  </View>             
                  <View style={{position: 'absolute', top: -170, right: -30, zIndex: 1}}>
                    <Image source={require('../../assets/images/ref-img-3.png')} style={{width: 70, height: 70, borderRadius: 50, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                  </View>
                  <View style={{position: 'absolute', top: -150, right: -90}}>
                    <Image source={require('../../assets/images/ref-img-4.png')} style={{width: 70, height: 70, borderRadius: 50, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                  </View>
              </TopThreeImages>
              </ReferralsImagesContainer>
              <ReferralHeadContainer>
                <ReferralTittle>Get rewarded for your referral</ReferralTittle>
                <ReferralBodyText>Tell your friends about <ReferralBodyText style={{fontFamily: "PoppinsSemiBold", color: Colors.primary}}>Gold Privilege, Earn points</ReferralBodyText> to redeem a <ReferralBodyText style={{fontFamily: "PoppinsSemiBold"}}>privilege</ReferralBodyText> when they sign up.</ReferralBodyText>
              </ReferralHeadContainer>
              <ReferralHeadContainer2>
                <RefContTwoText>Copy and share your personal referral link </RefContTwoText>
              <ReferralCopyContainer>
              <CopyInput
                editable={false}
                value={ReferralLink[0].userReferralLink}
                placeholder="Referral link"
              />
              <LinkShareContainer>
                <TouchableOpacity onPress={copyToClipboard}>
                  <Ionicons name='copy-outline' color={Colors.black} size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={shareLink}>
                  <Ionicons name='share-social-outline' color={Colors.black} size={30} />
                </TouchableOpacity>
              </LinkShareContainer>
          </ReferralCopyContainer>
          </ReferralHeadContainer2>
          <ReferralActivityContainer>
            <RefActivityHeadingContainer>
              <RefActivityHeading>Activity</RefActivityHeading>
            </RefActivityHeadingContainer>
            <ReferralActivityList>
              <ReferredUsers>
                <ReferredUsersLeft>
                  <ReferredUserName>Henry Akinwande</ReferredUserName>
                  <ReferredUserTimeAndDateContainer>
                    <ReferredUserDate>Today</ReferredUserDate>
                    <ReferredUserTime>12:30pm</ReferredUserTime>
                  </ReferredUserTimeAndDateContainer>
                </ReferredUsersLeft>
                <ReferredUsersRightBtnWhite activeOpacity={0.8}>
                  <ReferredUsersRightBtnText>Invite</ReferredUsersRightBtnText>
                </ReferredUsersRightBtnWhite>
              </ReferredUsers>
              {/* =================Yello button===== */}
              <ReferredUsers>
                <ReferredUsersLeft>
                  <ReferredUserName>John Wilson</ReferredUserName>
                  <ReferredUserTimeAndDateContainer>
                    <ReferredUserDate>Today</ReferredUserDate>
                    <ReferredUserTime>12:30pm</ReferredUserTime>
                  </ReferredUserTimeAndDateContainer>
                </ReferredUsersLeft>
                <ReferredUsersRightBtnPrimary activeOpacity={0.8} onPress={openModal}>
                  <ReferredUsersRightBtnPrimaryText>Acepted</ReferredUsersRightBtnPrimaryText>
                </ReferredUsersRightBtnPrimary>
              </ReferredUsers>
              {/* =================Yello button===== */}
              <ReferredUsers>
                <ReferredUsersLeft>
                  <ReferredUserName>Esther George</ReferredUserName>
                  <ReferredUserTimeAndDateContainer>
                    <ReferredUserDate>Today</ReferredUserDate>
                    <ReferredUserTime>12:30pm</ReferredUserTime>
                  </ReferredUserTimeAndDateContainer>
                </ReferredUsersLeft>
                <ReferredUsersRightBtnPrimary activeOpacity={0.8} onPress={openModal}>
                  <ReferredUsersRightBtnPrimaryText>Acepted</ReferredUsersRightBtnPrimaryText>
                </ReferredUsersRightBtnPrimary>
              </ReferredUsers>
              {/* =================White button===== */}
              <ReferredUsers>
                <ReferredUsersLeft>
                  <ReferredUserName>Mark Henry</ReferredUserName>
                  <ReferredUserTimeAndDateContainer>
                    <ReferredUserDate>15-03-2024</ReferredUserDate>
                    <ReferredUserTime>12:30pm</ReferredUserTime>
                  </ReferredUserTimeAndDateContainer>
                </ReferredUsersLeft>
                <ReferredUsersRightBtnWhite activeOpacity={0.8}>
                  <ReferredUsersRightBtnText>Invite</ReferredUsersRightBtnText>
                </ReferredUsersRightBtnWhite>
              </ReferredUsers>
            </ReferralActivityList>
          </ReferralActivityContainer>
            </InnerContainer>                
          </ScrollView>
      </StyledContainer>
        {/* =====Allert popup======== */}
        {showAlert && (
        <AlertContainer>
          <SuccessAlert>
            <SuccessAlertText>Referral Link copied</SuccessAlertText>
          </SuccessAlert>
        </AlertContainer>
      )}
       {/* Modal */}
       <BonusModal 
          isVisible={showModal}
          closeModal={closeModal} />

    </SafeAreaView>
  )
}

export default Referrals
