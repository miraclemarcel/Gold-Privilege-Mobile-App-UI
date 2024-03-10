import React from 'react';
import { Modal, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Profile from './Profile';
import { Colors } from '../../styles/Style';
import { useNavigation } from '@react-navigation/native';

const ProfileModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Profile />
            {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity> */}
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
    backgroundColor: Colors.primary,
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  }
});

export default ProfileModal;
