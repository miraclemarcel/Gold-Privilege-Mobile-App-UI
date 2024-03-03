import React from 'react'
import { View, Text, FlatList, Image, Dimensions, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Octicons, Ionicons  } from "@expo/vector-icons";


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
  PrivilegeAccessNumber,
  PrivilegePlanBtn,
  PrivilegePlanBtnText,
  HotdealsContainer,
  HotdealsTextContainer,
  HotdealsTextLeft,
  HotdealsTextLeftContainer,
  HotdealsTextRightBtn,
  HotdealsTextRight,
  HotDealPlanContainer,
  HotDealPlanInfo,
  HotDealPlanInfoRight,
  HotDealPlanTitle,
  HotDealPlanStar,
  HotDealPlanInfoLeft,
  HotDealPlanInfoRightText
} from '../../styles/Style'

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
      <StyledContainer>
        <InnerContainer>
          <ScrollView
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
          >
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
                <View style={{ flexDirection: 'row' }} >
                <FlatList
                  horizontal
                  data={PrivilegesPlan}
                  umColumns={2} 
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                   <PrivilegesPlanContainer style={{ width: width / 2 , margin: 10 }}>
                    <PlanContainer>
                      <Image
                          source={item.privilegePlanImage}
                          style={{ width: 100 , height: 150, borderRadius: 20, resizeMode: "cover", borderRadius: 15 }}
                        />
                        <PrivilegePlanTitle>Hello</PrivilegePlanTitle>
                        <PrivilegeAccessTextContainer>
                          <PrivilegeAccessNumber>(1)</PrivilegeAccessNumber>
                          <PrivilegeAccessText>Per Month..</PrivilegeAccessText>
                        </PrivilegeAccessTextContainer>
                        <PrivilegePlanBtn>
                          <PrivilegePlanBtnText>Access</PrivilegePlanBtnText>
                        </PrivilegePlanBtn>
                    </PlanContainer>
                     
                   </PrivilegesPlanContainer>
                  )}
                />
              </View>
              </YourPiviligesContainer>
              <HotdealsContainer>
                <HotdealsTextContainer>
                  <HotdealsTextLeftContainer>
                    <HotdealsTextLeft>Hot deals</HotdealsTextLeft>
                    <Image source={require("../../assets/icons/fire-big.png")}/>
                  </HotdealsTextLeftContainer>
                  <HotdealsTextRightBtn>
                    <HotdealsTextRight>View All</HotdealsTextRight>
                  </HotdealsTextRightBtn>
                </HotdealsTextContainer>
                <HotDealPlanContainer>
                <ImageBackground
                    source={require('../../assets/images/hotdeal1.png')}
                    style={{ flex: 1, height: 200, resizeMode: 'cover', justifyContent: 'flex-end', borderRadius: 10}}
                  >
                    <HotDealPlanInfo>
                      <HotDealPlanInfoLeft>
                        <HotDealPlanTitle>Weekend Getaway</HotDealPlanTitle>
                        <HotDealPlanStar>
                          <Ionicons name="star" size={20} color="gold" />
                          <Ionicons name="star" size={20} color="gold" />
                          <Ionicons name="star" size={20} color="gold" />
                          <Ionicons name="star" size={20} color="gold" />
                          <Ionicons name="star" size={20} color="gold" />
                        </HotDealPlanStar>
                      </HotDealPlanInfoLeft>
                      <HotDealPlanInfoRightText>N20,000</HotDealPlanInfoRightText>
                    </HotDealPlanInfo>
                  </ImageBackground>
                  </HotDealPlanContainer>
                
              </HotdealsContainer>
            </InnerHomeContainer>
          </ScrollView>
        </InnerContainer>
      </StyledContainer>
 
    </SafeAreaView>
  );
};

export default Home;