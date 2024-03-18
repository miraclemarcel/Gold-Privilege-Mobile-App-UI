import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Octicons } from '@expo/vector-icons';

import { 
    Colors,
    InnerContainer, 
    PageTitle, 
    PageTitleHeader, 
    RedeemBtn, 
    RedeemBtnText, 
    RewardPoints, 
    RewardPointsText, 
    RewardsCircleBig, 
    RewardsCircleContainer, 
    RewardsCircleSmall, 
    RewardsContainer, 
    RewardsContainerTop, 
    RewardsTopText, 
    StyledContainer
} from '../../styles/Style';




const Rewards = () => {


  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Rewards</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>
          <RewardsContainer>
            <RewardsContainerTop>
                <RewardsTopText>Your Balance</RewardsTopText>
                <RewardsCircleContainer>
                    <RewardsCircleBig>
                        <RewardsCircleSmall>
                        <Ionicons name="trophy-outline" size={30} color={Colors.primary} />
                        <RewardPoints>800</RewardPoints>
                        <RewardPointsText>Points</RewardPointsText>
                        </RewardsCircleSmall>
                    </RewardsCircleBig>
                    <RedeemBtn>
                        <RedeemBtnText>Redeem</RedeemBtnText>
                    </RedeemBtn>
                </RewardsCircleContainer>
            </RewardsContainerTop>
          </RewardsContainer>
            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default Rewards
