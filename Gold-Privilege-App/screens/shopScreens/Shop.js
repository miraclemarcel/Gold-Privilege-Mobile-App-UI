import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ShopProducts } from "./ShopData";
import { InnerContainer, PageTitle, PageTitleHeader, StyledContainer } from '../../styles/Style';

const Shop = () => {
  const renderItem = ({ item }) => (
    <View>
      <Image source={item.productImage} style={{ width: 150, height: 120 }} />
      <Text>{item.productTitle}</Text>
      <Text>Actual Price: {item.actualPrice}</Text>
      <Text>Discounted Price: {item.discountedPrice}</Text>
      <Text>{item.productBtnText}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageTitleHeader>
        <PageTitle>Shop</PageTitle>
      </PageTitleHeader>
      <StyledContainer>
        <InnerContainer>
          <FlatList
            data={ShopProducts}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={2}
          />
        </InnerContainer>
      </StyledContainer>
    </SafeAreaView>
  );
};

export default Shop;
