import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Colors } from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';

export const AddFundPopUP = ({ visible, onClose, onSubmit }) => {
  const [amount, setAmount] = useState('');

  const handleInput = (text) => {
    setAmount(text);
  };

  const handleSubmit = () => {
    onSubmit(amount);
    setAmount('');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Ionicons name='close-circle' size={24} color={Colors.primary} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Wallet Top-up</Text>
            <View style={styles.modalInputContainer}>
                <View style={styles.labelContainer}>
                <Text style={styles.modalLabel}>Amount to top-up</Text>
                </View>
                <TextInput
                style={styles.input}
                onChangeText={handleInput}
                value={amount}
                // placeholder="Enter amount"
                keyboardType="numeric"
                />
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} activeOpacity={0.9}>
              <Text style={styles.buttonText}>Confrim Amount</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    width: '80%',
  },
  modalView: {
    backgroundColor: Colors.whiteColor,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalLabel: {
    fontSize: 16,
    color: Colors.black,
  },
  labelContainer: {
    alignSelf: 'flex-start',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    marginTop: 20,
    color: Colors.primary,
    fontFamily: 'PoppinsSemiBold',
  },
  
  modalInputContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: 'column',
    gap: 15,

  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
    height: 50,
    elevation: 2,
    width: "100%",
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
