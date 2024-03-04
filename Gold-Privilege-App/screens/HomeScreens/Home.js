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
  HotDealPlanInfoRightText,
  PrivilegePlanImg,
  HeaderLeftTextContainer,
  HotdealsTextLeftTwo
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
    privilegePlanImage: require('../../assets/images/plan1.png'),
    planTitle: "Aerobics",
    accessQuantity: "1",
    accessButton: "Access"
  },
  {
    id: 2,
    privilegePlanImage: require('../../assets/images/plan2.png'),
    planTitle: "Swimming Pool Access",
    accessQuantity: "1",
    accessButton: "Access"
  }
]


const { width } = Dimensions.get('window');

const Home = ({ navigation }) => {
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
                    <HeaderLeftTextContainer>
                      <PlanText>Premium Plan</PlanText>
                      <Image source={require("../../assets/icons/fire.png")}/>
                    </HeaderLeftTextContainer>
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
                  <PrivilegeTextRightBtn onPress={() => navigation.navigate("PrivilegeList")}>
                    <PrivilegeTextRight>View All</PrivilegeTextRight>
                  </PrivilegeTextRightBtn>
                </PrivilegeTextContainer>
                {/* ===========privilege plan section=============== */}
                   <PrivilegesPlanContainer>
                   {PrivilegesPlan.map(plan => (
                  <PlanContainer key={plan.id}>
                    <PrivilegePlanImg source={plan.privilegePlanImage} />
                    <PrivilegePlanTitle>{plan.planTitle}</PrivilegePlanTitle>
                    <PrivilegeAccessTextContainer>
                      <PrivilegeAccessNumber>({plan.accessQuantity})</PrivilegeAccessNumber>
                      <PrivilegeAccessText>Per Month</PrivilegeAccessText>
                    </PrivilegeAccessTextContainer>
                    <PrivilegePlanBtn>
                      <PrivilegePlanBtnText>{plan.accessButton}</PrivilegePlanBtnText>
                    </PrivilegePlanBtn>
                  </PlanContainer>
                ))}
                   </PrivilegesPlanContainer>
              </YourPiviligesContainer>
              <HotdealsContainer>
                <HotdealsTextContainer>
                  <HotdealsTextLeftContainer>
                    <HotdealsTextLeft>Hot</HotdealsTextLeft>
                    <HotdealsTextLeftTwo>Deals</HotdealsTextLeftTwo>
                    <Image source={require("../../assets/icons/fire-big.png")} 
                    style={{height: 30, width: 25 }}
                    />
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