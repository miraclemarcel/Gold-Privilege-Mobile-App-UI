import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrivilegesData } from './PrivilegeData';
import { Ionicons } from '@expo/vector-icons';

import { 
  ActivePlanBtn,
  ActivePlanBtnText,
  ActualPriceText,
  DescriptionContainer,
  DescriptionText,
  DetailsBtn,
  DetailsBtnText,
  DiscountPriceText,
  FilterContainer, 
  FiveStarContainer, 
  FlatlistContainer, 
  ImageOfProduct, 
  InnerContainer, 
  PageTitle, 
  PageTitleHeader, 
  PriceContainer, 
  PrivilegeAccessNumber, 
  PrivilegeAccessText, 
  PrivilegeAccessTextContainer, 
  PrivilegeHeading, 
  PrivilegeHeadingTxt, 
  ProductContainer, 
  ProductContainerInner, 
  ProductContent, 
  ProductImageContainer, 
  ProductTitleText, 
  ShopHeading, 
  StatusBtn, 
  StatusBtnText, 
  StatusText, 
  StyledContainer 
} from '../../styles/Style';


const PrivilegeList = () => {
  const renderItem = ({ item }) => (
    <ProductContainer>
      <ProductContainerInner>
        <ProductImageContainer>
          <ImageOfProduct source={item.productImage} />
        </ProductImageContainer>
        <ProductContent>
          <ProductTitleText>{item.productTitle}</ProductTitleText>
          <PrivilegeAccessTextContainer>
            <PrivilegeAccessNumber>({item.accessQuantity})</PrivilegeAccessNumber>
            <PrivilegeAccessText>Per Month</PrivilegeAccessText>
          </PrivilegeAccessTextContainer>
        </ProductContent>
        <DetailsBtn>
          <DetailsBtnText>Access</DetailsBtnText>
        </DetailsBtn>
      </ProductContainerInner>
    </ProductContainer>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Privileges</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={PrivilegesData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
            contentContainerStyle={{ justifyContent: 'space-between', gap: 15 }}
            ListHeaderComponent={() => (
              <View>
                <PrivilegeHeading>
                  <PrivilegeHeadingTxt>
                    Plan:
                    <PrivilegeHeadingTxt style={{ fontFamily: 'PoppinsSemiBold' }}> Basic Membership</PrivilegeHeadingTxt>
                  </PrivilegeHeadingTxt>
                  <View style={{ flexDirection: 'row', gap: 10, marginBottom: 25 }}>
                    <PrivilegeHeadingTxt>Status:</PrivilegeHeadingTxt>
                    <StatusBtn>
                      <StatusBtnText>Active</StatusBtnText>
                    </StatusBtn>
                  </View>
                </PrivilegeHeading>
              </View>
            )}
          />
        </InnerContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default PrivilegeList;
