import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ButtonText, CheckoutContent, InnerContainer, PageTitle, PageTitleHeader, StyledButton, StyledContainer, UpgradeCheckoutTitle, UpgradePlanContainer, UpgradePlanDuration, UpgradePlanPrice, UpgradePlanType } from '../../styles/Style'

const Checkout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <PageTitleHeader>
            <PageTitle>Checkout</PageTitle>
        </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
            <UpgradeCheckoutTitle>You have selected this plan</UpgradeCheckoutTitle>
            <CheckoutContent>
                <UpgradePlanType>Premium Membership</UpgradePlanType>
                <UpgradePlanContainer>
                    <UpgradePlanDuration>Monthly</UpgradePlanDuration>
                    <UpgradePlanPrice>/150,000</UpgradePlanPrice>
                </UpgradePlanContainer>
            </CheckoutContent>
        </InnerContainer>
        <StyledButton>
            <ButtonText>Checkout</ButtonText>
        </StyledButton>
      </StyledContainer>
    </SafeAreaView>
  )
}

export default Checkout
