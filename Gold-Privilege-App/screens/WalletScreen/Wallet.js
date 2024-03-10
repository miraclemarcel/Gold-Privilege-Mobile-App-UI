import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { 
  AddCardBtn,
  AddCardBtnText,
  Colors,
  IconContainer,
  InnerContainer, 
  PageTitle, 
  PageTitleHeader, 
  StyledContainer, 
  WalletBox, 
  WalletBtnContainer, 
  WalletContainer,
  WalletPrice,
  WalletPriceContainer,
  WalletTitle
} from '../../styles/Style'
import { Ionicons, Octicons } from '@expo/vector-icons'

const Wallet = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Wallet</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
            <WalletContainer>
              <WalletBox>
                <WalletTitle>Available Balance:</WalletTitle>
              <WalletPriceContainer>
                <WalletPrice>N0.00</WalletPrice>
                <IconContainer>
                  <Octicons name='arrow-right' size={24} color={Colors.whiteColor}/>
                </IconContainer>
              </WalletPriceContainer>
              </WalletBox>
              <WalletBtnContainer>
                <AddCardBtn>
                  <AddCardBtnText>Add wallet</AddCardBtnText>
                </AddCardBtn>
              </WalletBtnContainer>
            </WalletContainer>
        </InnerContainer>
      </StyledContainer>   
  </SafeAreaView>
  )
}

export default Wallet
