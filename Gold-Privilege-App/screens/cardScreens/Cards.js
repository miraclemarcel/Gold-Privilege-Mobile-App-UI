import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import { 
  CardsTab,
  CardsTabContainer,
  CardsTabText,
  InnerContainer, 
  PageTitle, 
  PageTitleHeader, 
  StyledContainer 
} from '../../styles/Style'

const Cards = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Cards</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
          <CardsTabContainer>
            <CardsTab>
              <CardsTabText>Physical card</CardsTabText>
            </CardsTab>
            <CardsTab>
              <CardsTabText>Virtual card</CardsTabText>
            </CardsTab>
          </CardsTabContainer>
        </InnerContainer>
      </StyledContainer>
     
    </SafeAreaView>
  )
}

export default Cards
