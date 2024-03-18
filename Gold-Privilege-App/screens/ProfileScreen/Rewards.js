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
    RedeemContainterBottom, 
    RedeemTab, 
    RedeemTabContainer, 
    ReedeemTabText, 
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
  const [activeTab, setActiveTab] = useState('All');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };


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
                    <RedeemBtn activeOpacity={0.9}>
                        <RedeemBtnText>Redeem</RedeemBtnText>
                    </RedeemBtn>
                </RewardsCircleContainer>
            </RewardsContainerTop>
            <RedeemContainterBottom>
              <RedeemTabContainer>
                <RedeemTab 
                activeOpacity={0.9}
                style={{
                  borderBottomWidth: activeTab === 'All' ? 5 : 0,
                  borderColor: Colors.primary,
                  paddingBottom: 8,
                }}
                onPress={() => handleTabPress('All')}
                >
                <ReedeemTabText style={{ color: activeTab === 'All' ? Colors.primary : Colors.black }}> All </ReedeemTabText>
                </RedeemTab>
                <RedeemTab 
                  activeOpacity={0.9}
                  style={{
                    borderBottomWidth: activeTab === 'Earned' ? 5 : 0,
                    borderColor: Colors.primary,
                    paddingBottom: 8,
                  }}
                  onPress={() => handleTabPress('Earned')}
                >
                  <ReedeemTabText style={{ color: activeTab === 'Earned' ? Colors.primary : Colors.black }}>Earned</ReedeemTabText>
                </RedeemTab>
                <RedeemTab 
                  activeOpacity={0.9}
                  style={{
                    borderBottomWidth: activeTab === 'Redeemed' ? 5 : 0,
                    borderColor: Colors.primary,
                    paddingBottom: 8,
                  }}
                  onPress={() => handleTabPress('Redeemed')}
                  >
                  <ReedeemTabText style={{ color: activeTab === 'Redeemed' ? Colors.primary : Colors.black }}>Redeemed</ReedeemTabText>
                </RedeemTab>
              </RedeemTabContainer>
            </RedeemContainterBottom>
          </RewardsContainer>
            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default Rewards
