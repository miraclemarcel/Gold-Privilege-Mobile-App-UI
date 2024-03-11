import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ButtonText, Colors } from '../../styles/Style';

// ProductModal component
const ProductDetails = ({ isVisible, onClose, product }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.productDeatilsHeader}>
            <Image source={product ? product.productImage : null} style={styles.productImage} onError={(error) => console.log('Error loading image:', error)} />
          </View>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          >  
            <View style={styles.productDeatilsContent}>
                <Text style={styles.productTitle}>{product ? product.productTitle : ''}</Text>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.productDescription}>{product ? product.productDescription : ''}</Text>
                </View>
                <View style={{flexDirection: 'row', gap: 5, marginTop: 20, marginBottom: 20}}>
                  <Text style={styles.discountedPrice}>{product ? product.discountedPrice : ''}</Text>
                  <Text style={styles.actualPrice}>{product ? product.actualPrice : ''}</Text>
                </View>
              
                <TouchableOpacity onPress={onClose} activeOpacity={0.9}>
                    <View style={styles.purchaseBtn}>
                      <ButtonText>Buy Now</ButtonText>
                    </View>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  contentContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    alignItems: 'center',
    height: '90%', 
    overflow: 'hidden',
  },
  // productDeatilsHeader: {
  //   width: 600,
  // },
  productDeatilsContent: {
    padding: 20,
  },
  productImage: {
    height: 300,
    marginBottom: 10,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  descriptionContainer: {
    marginTop: 20,
    paddingTop: 40,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: Colors.labelColor,
    borderBottomColor: Colors.labelColor,
  },
  productDescription: {
    marginBottom: 10
  },
  discountedPrice: {
    fontSize: 20,
    fontFamily: 'PoppinsMedium',
    color: Colors.black,

  },
  actualPrice: {
    fontSize: 20,
    fontFamily: 'PoppinsRegular',
    textDecorationLine: 'line-through',
    color: Colors.labelColor,
  },
  purchaseBtn: {
    backgroundColor: Colors.black,
    padding: 10,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ProductDetails;
