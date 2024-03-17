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
} from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';


const ReferralLink = [
  {
    userReferralLink: "https://api-goldprivilege.inovacaong.com/swagger/index.html"
  }
]



const Referrals = () => {
  const [showAlert, setShowAlert] = useState(false);

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
  
  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Referrals</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
            <ScrollView>
              <ReferralsImagesContainer>
                <View>
                  <Image source={require('../../assets/images/lady-4.png')} style={{width: 100, height: 100, borderRadius: 100, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                </View>
                <TopThreeImages>
                  {/* left image  */}
                  <View style={{position: 'absolute', top: -150, left: -100, overflow: 'hidden'}}>   
                    <Image source={require('../../assets/images/lady-1.png')} style={{width: 70, height: 70, borderRadius: 50, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                  </View>
                  {/* Top Middle image */}
                  <View style={{position: 'absolute', top: -170, right: -30, zIndex: 1}}>
                    <Image source={require('../../assets/images/lady-2.png')} style={{width: 70, height: 70, borderRadius: 50, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                  </View>
                  {/* ======Left image ======= */}
                  <View style={{position: 'absolute', top: -150, right: -90}}>
                    <Image source={require('../../assets/images/lady-3.png')} style={{width: 70, height: 70, borderRadius: 50, borderWidth: 5, borderColor: Colors.whiteColor}}/>
                  </View>
              </TopThreeImages>
              </ReferralsImagesContainer>
              <ReferralHeadContainer>
                <ReferralTittle>Get rewarded for your referral</ReferralTittle>
                <ReferralBodyText>Tell your friends about <ReferralBodyText style={{fontFamily: "PoppinsSemiBold", color: Colors.primary}}>Gold Privilege, Earn points</ReferralBodyText> to redeem a <ReferralBodyText style={{fontFamily: "PoppinsSemiBold"}}>privilege</ReferralBodyText> when they sign up.</ReferralBodyText>
              </ReferralHeadContainer>
              <ReferralHeadContainer2>
                <RefCont2Text>Copy and share your personal referral link </RefCont2Text>
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
              <RefActivityHeading>Activity</RefActivityHeading>
          </ReferralActivityContainer>

          </ScrollView>
            </InnerContainer>
        </StyledContainer>
       5
        {/* =====Allert popup======== */}
        {showAlert && (
        <AlertContainer>
          <SuccessAlert>
            <SuccessAlertText>Referral Link copied</SuccessAlertText>
          </SuccessAlert>
        </AlertContainer>
      )}
      
    </SafeAreaView>
  )
}

export default Referrals
