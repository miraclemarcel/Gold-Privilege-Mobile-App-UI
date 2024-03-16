import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


import { InnerContainer, PageTitle, PageTitleHeader, StyledContainer } from '../../styles/Style';



const Referrals = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Referrals</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>

            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default Referrals
