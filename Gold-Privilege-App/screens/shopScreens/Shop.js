import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShopProducts } from "./ShopData";
import { Ionicons } from '@expo/vector-icons';


import { 
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
  ProductContainer, 
  ProductContainerInner, 
  ProductContent, 
  ProductImageContainer, 
  ProductTitleText, 
  ShopHeading, 
  StyledContainer 
} from '../../styles/Style';


const Shop = () => {

  const [showDescription, setShowDescription] = useState(false); // State to manage description visibility

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };


  const renderItem = ({ item }) => (
    <ProductContainer>
      <ProductContainerInner>
        <ProductImageContainer>
          <TouchableOpacity onPress={toggleDescription}> 
            <ImageOfProduct source={item.productImage} />
          </TouchableOpacity>
          {showDescription && ( 
              <DescriptionContainer>
                <DescriptionText>{item.productDescription}</DescriptionText>
              </DescriptionContainer>
            )}
        </ProductImageContainer>
      <ProductContent>
          <ProductTitleText>{item.productTitle}</ProductTitleText>
          <FiveStarContainer>
            <Ionicons name="star" size={10} color="gold" />
            <Ionicons name="star" size={10} color="gold" />
            <Ionicons name="star" size={10} color="gold" />
            <Ionicons name="star" size={10} color="gold" />
            <Ionicons name="star" size={10} color="gold" />
          </FiveStarContainer>
          <PriceContainer>
            <DiscountPriceText>{item.discountedPrice}</DiscountPriceText>
            <ActualPriceText>{item.actualPrice}</ActualPriceText>
          </PriceContainer>
      </ProductContent>
        <DetailsBtn>
          <DetailsBtnText>View Details</DetailsBtnText>
        </DetailsBtn>
      </ProductContainerInner>
    </ProductContainer>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Shop</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
          <ShopHeading>
            <FilterContainer>
              <Ionicons name="funnel-outline" size={24} color="black" />
            </FilterContainer>
          </ShopHeading>
          <FlatlistContainer>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={ShopProducts}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
              numColumns={2}
              contentContainerStyle={{ justifyContent: 'space-between', gap: 15 }}
            />
          </FlatlistContainer>
        </InnerContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default Shop;
