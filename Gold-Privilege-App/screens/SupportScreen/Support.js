import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


import { InnerContainer, PageTitle, PageTitleHeader, StyledContainer } from '../../styles/Style';



const Support = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <PageTitleHeader>
            <PageTitle>Support</PageTitle>
        </PageTitleHeader>
        <StyledContainer>
            <InnerContainer>

            </InnerContainer>
        </StyledContainer>
    </SafeAreaView>
  )
}

export default Support
