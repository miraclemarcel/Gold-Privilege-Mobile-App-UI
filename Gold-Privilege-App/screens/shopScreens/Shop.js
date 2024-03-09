import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShopProducts } from "./ShopData";
import { Ionicons } from '@expo/vector-icons';
import ProductDetails from './ProductDetails';


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
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the selected product details
  const [isProductModalVisible, setProductModalVisible] = useState(false); // State to manage the visibility of the modal
  const [showDescription, setShowDescription] = useState(false); // State to manage description visibility

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setProductModalVisible(true);
  };

    // Function to close the modal
    const closeProductModal = () => {
      setProductModalVisible(false);
    };


  const renderItem = ({ item }) => (
    <ProductContainer>
      <ProductContainerInner>
      <TouchableOpacity onPress={toggleDescription}> 
        <ProductImageContainer>
            <ImageOfProduct source={item.productImage} />
          {showDescription && ( 
              <DescriptionContainer>
                <DescriptionText>{item.productDescription}</DescriptionText>
              </DescriptionContainer>
            )}
        </ProductImageContainer>
        </TouchableOpacity>
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
      <TouchableOpacity 
      activeOpacity={0.9}
      onPress={() => openProductModal(item)} 
      >
        <DetailsBtn >
            <DetailsBtnText>View Details</DetailsBtnText>
          </DetailsBtn>
        </TouchableOpacity>
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
          <FlatlistContainer>
          <ShopHeading>
            <FilterContainer>
              <Ionicons name="funnel-outline" size={24} color="black" />
            </FilterContainer>
          </ShopHeading>
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

      {/* =========Product details modal============ */}
      <ProductDetails
        isVisible={isProductModalVisible}
        onClose={closeProductModal}
        product={selectedProduct}
      />
    </SafeAreaView>
  );
};

export default Shop;
