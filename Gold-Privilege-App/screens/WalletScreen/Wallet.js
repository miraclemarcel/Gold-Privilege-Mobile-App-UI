import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { AddFundPopUP } from './AddFundPopUP'

import { 
  ActivityHeadTitle,
  ActivityHeadTitleRight,
  ActivityHeader,
  AddCardBtn,
  AddCardBtnText,
  AddFundBtn,
  AddMoneyBtnText,
  Colors,
  IconContainer,
  InnerContainer, 
  PageTitle, 
  PageTitleHeader, 
  StyledContainer, 
  WalletActivityContainer, 
  WalletBox, 
  WalletBtnContainer, 
  WalletContainer,
  WalletNotice,
  WalletNoticeContainer,
  WalletPrice,
  WalletPriceContainer,
  WalletTitle
} from '../../styles/Style'
import { Ionicons, Octicons } from '@expo/vector-icons'

const Wallet = () => {
  const [isAddMoneyPopupVisible, setAddMoneyPopupVisible] = useState(false);

  const toggleAddMoneyPopup = () => {
    setAddMoneyPopupVisible(!isAddMoneyPopupVisible);
  };

  const handleAddMoney = (amount) => {
    // Handle adding money functionality here
    console.log('Adding money:', amount);
    // Close the pop-up
    setAddMoneyPopupVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Wallet</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
            <WalletContainer>
              <WalletBox>
                <View>
                  <WalletTitle>Available Balance:</WalletTitle>
                </View>
              <WalletPriceContainer>
                <WalletPrice>N0.00</WalletPrice>
                <IconContainer>
                  <Ionicons name='chevron-forward' size={24} color={Colors.whiteColor} />
                </IconContainer>
              </WalletPriceContainer>
              </WalletBox>
              <WalletBtnContainer>
                <AddCardBtn activeOpacity={0.9} >
                <Ionicons name='add-circle' size={24} color={Colors.whiteColor} />
                  <AddCardBtnText>Add debit card</AddCardBtnText>
                </AddCardBtn>
                  <AddFundBtn onPress={toggleAddMoneyPopup} activeOpacity={0.9} >
                    <Ionicons name='add-circle' size={24} color={Colors.primary} />
                    <AddMoneyBtnText>Add money</AddMoneyBtnText>
                  </AddFundBtn>
            </WalletBtnContainer>
              <WalletActivityContainer>
                <ActivityHeader>
                  <ActivityHeadTitle>Recent Activity</ActivityHeadTitle>
                  <ActivityHeadTitleRight>See All</ActivityHeadTitleRight>
                </ActivityHeader>
                <WalletNoticeContainer>
                  <WalletNotice>No activity yet</WalletNotice>
                </WalletNoticeContainer>
              </WalletActivityContainer>
            </WalletContainer>
        </InnerContainer>
      </StyledContainer>   

       {/* Add the pop-up */}
       <Modal
        animationType="slide"
        transparent={true}
        visible={isAddMoneyPopupVisible}
        onRequestClose={toggleAddMoneyPopup}>
        <AddFundPopUP
          visible={isAddMoneyPopupVisible}
          onClose={toggleAddMoneyPopup}
          onSubmit={handleAddMoney}
        />
      </Modal>

  </SafeAreaView>
  )
}

export default Wallet
