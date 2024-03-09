import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PhysicalCard } from './PhysicalCard';
import { VirtualCard } from './VirtualCard';
import { 
  CardsTab,
  CardsTabContainer,
  CardsTabText,
  Colors,
  InnerContainer, 
  PageTitle, 
  PageTitleHeader, 
  StyledContainer 
} from '../../styles/Style';

const Cards = () => {
  const [activeTab, setActiveTab] = useState('Physical'); // State to keep track of active tab

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Function to determine if a tab is active
  const isTabActive = (tab) => activeTab === tab;

  // Function to render the active component
  const renderActiveComponent = () => {
    if (activeTab === 'Physical') {
      return <PhysicalCard />;
    } else if (activeTab === 'Virtual') {
      return <VirtualCard />;
    }
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Cards</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
          <CardsTabContainer>
            <TouchableOpacity onPress={() => handleTabChange('Physical')} activeOpacity={0.9}>
              <CardsTab style={isTabActive('Physical') ? { borderBottomColor: Colors.primary , borderBottomWidth: 4} : null}>
                <CardsTabText style={isTabActive('Physical') ? { color: Colors.primary } : null}>Physical card</CardsTabText>
              </CardsTab>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabChange('Virtual')} activeOpacity={0.9}>
              <CardsTab style={isTabActive('Virtual') ? { borderBottomColor: Colors.primary, borderBottomWidth: 4 } : null}>
                <CardsTabText style={isTabActive('Virtual') ? { color: Colors.primary } : null}>Virtual card</CardsTabText>
              </CardsTab>
            </TouchableOpacity>
          </CardsTabContainer>
          {/* Render active component */}
          {renderActiveComponent()}
        </InnerContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default Cards;
