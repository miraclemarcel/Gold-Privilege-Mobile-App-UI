import React, { useState } from 'react'
import { View, Text, FlatList, Image, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons  } from "@expo/vector-icons";
import { AccessModal } from '../ReferralsScreen/AccesModal';

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
  HotdealsTextLeftTwo,
  BnnerContentContainer,
  BannerBtn,
  BannerTitleText
} from '../../styles/Style'

import styled from 'styled-components/native';





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
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const BannerSlide = [
    {
      id: 1,
      key: 'banner1',
      bannerImage: require('../../assets/images/privilege-banner-img.png'),
      onPress: () => navigation.navigate('PrivilegeList'), // Navigate to PrivilegePage
      bannerTitle: "Enjoy Endless\nOpportunities",
      bannerBtnText: "View Pivileges",
    },
    {
      id: 2,
      key: 'banner2',
      bannerImage: require('../../assets/images/refer-img.png'),
      onPress: () => handleOpenModal(true), // Navigate to ReferPage
      bannerTitle: "Refer A Friend",
      bannerTitle2: "Get A Reward ",
      bannerBtnText: "Get Started",
    },
  ];


   // Function to repeat the banners infinitely
   const getInfiniteBanners = () => {
    let infiniteBanners = [];
    let key = 0;
    for (let i = 0; i < 10; i++) { // Repeat the banners 10 times (adjust as needed)
      BannerSlide.forEach(banner => {
        infiniteBanners.push({ ...banner, key: key++ });
      });
    }
    return infiniteBanners;
  };


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
                    <Avatar source={require("../../assets/images/Avatar-Img.png")} />
                    <NameContainer>
                      <UsernameText>Miracle Marcel</UsernameText>
                      <UserIDtext>GP24266357</UserIDtext>
                    </NameContainer>
                </HomeHeaderLeftContainer>
                <HomeHeaderRightContainer>
                    <HeaderIcon>
                      <Ionicons name="headset" size={20} color="black" />
                      <TouchableOpacity 
                      activeOpacity={0.5} 
                      onPress={() => navigation.navigate('Notification')}
                      >
                        <Ionicons name="notifications" size={20} color="black" />
                      </TouchableOpacity>
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
                <FlatList
                  horizontal ={true}
                  data={getInfiniteBanners()} // Use the function to repeat banners infinitely
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.key.toString()}
                  renderItem={({ item }) => (
                  <HomeBannerSlide>
                  <BnnerContentContainer>
                      <View>
                        <BannerTitleText>{item.bannerTitle}</BannerTitleText>
                      </View>
                      <BannerBtn onPress={item.onPress} activeOpacity={0.7}>
                        <Text style={{fontFamily: 'PoppinsMedium'}}>{item.bannerBtnText}</Text>
                      </BannerBtn>
                  </BnnerContentContainer>
                    {/* Banner */}
                    <ImageBackground 
                    source={item.bannerImage} 
                    style={{
                      width: width - 40, // Adjust width to create space between banners
                      height: 150, 
                      resizeMode: "cover", 
                      borderRadius: 10, // Add border radius
                      marginRight: 10, // Add margin to create space between banners
                      overflow: "hidden", // Add overflow hidden to respect border radius
                    }}
                  />
                    
                  </HomeBannerSlide>
                )}
            ListFooterComponent={<View style={{ width: 20 }} />} // Add empty view as footer for spacing
            initialNumToRender={2} // Render initial number of items
            maxToRenderPerBatch={2} // Render maximum number of items per batch
            windowSize={2} // Number of items to render at once
            removeClippedSubviews={true} // Remove items from DOM when they are out of the screen
          />
              <YourPiviligesContainer>
                <PrivilegeTextContainer>
                  <PrivilegeTextLeft>Your Privileges</PrivilegeTextLeft>
                  <PrivilegeTextRightBtn onPress={() => navigation.navigate("Referrals")}>
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
    {/* ============MODAL POP UP========= */}
      {/* <AccessModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} /> */}
      <AccessModal 
        visible={modalVisible} 
        onRequestClose={handleCloseModal}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default Home;