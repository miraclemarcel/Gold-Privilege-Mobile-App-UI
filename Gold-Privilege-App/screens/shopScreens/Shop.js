import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShopProducts } from "./ShopData";
import { Ionicons } from '@expo/vector-icons';
import ProductDetails from './ProductDetails';


import { 
  ActualPriceText,
  Colors,
  DescriptionContainer,
  DescriptionText,
  DetailsBtn,
  DetailsBtnText,
  DiscountPriceText,
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
  SearchBar, 
  SearchContainer, 
  SearchContainerShop, 
  ShopHeading, 
  StyledContainer 
} from '../../styles/Style';


const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State to hold the selected product details
  const [isProductModalVisible, setProductModalVisible] = useState(false); // State to manage the visibility of the modal
  const [selectedDescriptionIndex, setSelectedDescriptionIndex] = useState(null); // State to store the index of the selected description

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setProductModalVisible(true);
  };

  const closeProductModal = () => {
    setProductModalVisible(false);
  };

  const toggleDescription = (index) => {
    setSelectedDescriptionIndex(index === selectedDescriptionIndex ? null : index);
  };

  const renderItem = ({ item, index }) => (
    <ProductContainer>
      <ProductContainerInner>
        <TouchableOpacity onPress={() => toggleDescription(index)}>
          <ProductImageContainer>
            <ImageOfProduct source={item.productImage} />
            {selectedDescriptionIndex === index && (
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
          <DetailsBtn>
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
              <SearchContainerShop>
                <SearchBar
                  placeholder="search"
                  placeholderTextColor={Colors.inputPlaceholder}
                />
              </SearchContainerShop>
            </ShopHeading>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={ShopProducts}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={{ justifyContent: "space-between", gap: 15 }}
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
