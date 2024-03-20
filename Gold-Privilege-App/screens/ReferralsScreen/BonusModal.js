import React from 'react';
import { Modal, Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../styles/Style';

const BonusModal = ({ isVisible, closeModal }) => {

    const handleClose = () => {
        closeModal(true);
      };

  return (
    <Modal
    visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Ionicons name="close-circle-outline" size={30} color={Colors.primary} />
          </TouchableOpacity>
          <Image source={require('../../assets/images/celebrate.png')} style={styles.image} />
          <Text style={styles.title}>Congratulations you just received <Text style={styles.titlePoints}>50points</Text></Text>
          <Text style={styles.description}>
          One of your friend has join by your referral link. Invite more to get more points
          </Text>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Invite another</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    width: "80%",
    height: "55%",
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  titlePoints: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: "#8E6B02",
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BonusModal;
