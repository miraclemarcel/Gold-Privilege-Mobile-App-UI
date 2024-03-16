import React from 'react'
import { Image, Text, View } from 'react-native'
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
} from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';





const Referrals = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Referrals</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
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
              <ReferralCopyContainer>
                <CopyInput/>
                <LinkShareContainer>
                  <Ionicons name='share' color={Colors.black} size={30}/>
                  <Ionicons name='share' color={Colors.black} size={30}/>
                </LinkShareContainer>
              </ReferralCopyContainer>
            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default Referrals
