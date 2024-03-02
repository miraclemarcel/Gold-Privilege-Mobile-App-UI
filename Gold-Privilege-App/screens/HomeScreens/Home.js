import React from 'react'
import { View, Text, FlatList, Image, Dimensions, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


import { 
  Colors,
  Avatar, 
  HeaderIcon, 
  HeaderIconContainer, 
  HomeBannerSlide, 
  HomeHeaderContainer, 
  HomeHeaderLeftContainer, 
  HomeHeaderRightContainer, 
  InnerContainer, 
  NameContainer, 
  PlanText, 
  SearchBar, 
  SearchContainer, 
  StyledContainer, 
  UserIDtext, 
  UsernameText, 
  YourPiviligesContainer,
  PrivilegeTextContainer,
  PrivilegeTextLeft,
  PrivilegeTextRightBtn,
  PrivilegeTextRight,
  InnerHomeContainer,
  PrivilegesPlanContainer,
  PlanContainer,
  PrivilegePlanTitle,
  PrivilegeAccessTextContainer,
  PrivilegeAccessText,
  PrivilegeAccessNumber
} from '../../styles/Style'
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';


const BannerSlide = [
  {
    id: 1,
    bannerImage: require('../../assets/images/referBanner-2.png'),
  },
  {
    id: 2,
    bannerImage: require('../../assets/images/referBanner-1.png'),
  },
  {
    id: 3,
    bannerImage: require('../../assets/images/referBanner-1.png'),
  }
];


// ========Privileges=============

const PrivilegesPlan = [
  {
    id: 1,
    privilegePlanImage: require('../../assets/images/referBanner-2.png'),
    planTitle: "Aerobics",
    accessQuantity: "1",
    accessButton: "Access"
  },
  {
    id: 2,
    privilegePlanImage: require('../../assets/images/referBanner-2.png'),
    planTitle: "Swimming Pool Access",
    accessQuantity: "1",
    accessButton: "Access"
  }
]


const { width } = Dimensions.get('window');

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      <StyledContainer>
        <InnerContainer>
            <HomeHeaderContainer>
                <HomeHeaderLeftContainer>
                    <Avatar source={require("../../assets/images/welcom1.jpg")} />
                    <NameContainer>
                      <UsernameText>Miracle Marcel</UsernameText>
                      <UserIDtext>GP24266357</UserIDtext>
                    </NameContainer>
                </HomeHeaderLeftContainer>
                <HomeHeaderRightContainer>
                    <HeaderIcon>
                      <Ionicons name="headset" size={20} color="black" />
                      <Ionicons name="notifications" size={20} color="black" />
                    </HeaderIcon>
                    <PlanText>Premium Plan</PlanText>
                </HomeHeaderRightContainer>
            </HomeHeaderContainer>
            <InnerHomeContainer>
              <SearchContainer>
                  <SearchBar
                  placeholder='search'
                  placeholderTextColor={Colors.inputPlaceholder}
                  />
                </SearchContainer>
              <HomeBannerSlide>
              <FlatList
                horizontal
                data={BannerSlide}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <Image
                    source={item.bannerImage}
                    style={{ width , height: 150, marginRight: 5, resizeMode: "cover", borderRadius: 15 }}
                  />
                )}
              />
              </HomeBannerSlide>
              <YourPiviligesContainer>
                <PrivilegeTextContainer>
                  <PrivilegeTextLeft>Your Privileges</PrivilegeTextLeft>
                  <PrivilegeTextRightBtn>
                    <PrivilegeTextRight>View All</PrivilegeTextRight>
                  </PrivilegeTextRightBtn>
                </PrivilegeTextContainer>
                <FlatList
                  // horizontal
                  data={PrivilegesPlan}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                   <PrivilegesPlanContainer>
                    <PlanContainer>
                      <Image
                          source={item.privilegePlanImage}
                          style={{ width: 150 , height: 150, borderRadius: 20, marginRight: 5, resizeMode: "cover", borderRadius: 15 }}
                        />
                        <PrivilegePlanTitle>Hello</PrivilegePlanTitle>
                        <PrivilegeAccessTextContainer>
                          <PrivilegeAccessNumber>(1)</PrivilegeAccessNumber>
                          <PrivilegeAccessText>Per Month</PrivilegeAccessText>
                        </PrivilegeAccessTextContainer>
                    </PlanContainer>
                     
                   </PrivilegesPlanContainer>
                  )}
                />
              </YourPiviligesContainer>
            </InnerHomeContainer>
        </InnerContainer>
      </StyledContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;