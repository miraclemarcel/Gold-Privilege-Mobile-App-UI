import React from 'react';
import { Modal, View, Text, Button, Image, StyleSheet } from 'react-native';

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
         <View style={styles.productDeatilsContent}>
            <Text style={styles.productTitle}>{product ? product.productTitle : ''}</Text>
            <Text style={styles.productDescription}>{product ? product.productDescription : ''}</Text>
            <Text style={styles.discountedPrice}>{product ? product.discountedPrice : ''}</Text>
         </View>
          <Button title="Close" onPress={onClose} />
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
  productImage: {
    // width: '100%',
    height: 300,
    marginBottom: 10,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  productDescription: {
    marginBottom: 10
  },
  discountedPrice: {
    fontWeight: 'bold',
    marginBottom: 10
  }
});

export default ProductDetails;
