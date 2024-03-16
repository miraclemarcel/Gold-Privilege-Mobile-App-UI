import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../styles/Style';
import { Ionicons } from '@expo/vector-icons';

export const AccessModal = ({ visible, onRequestClose, navigation}) => {
  
  const handleAllowAccess = () => {
    onRequestClose();
    navigation.navigate('Referrals');
  };

  const handleDenyAccess = () => {
    console.log('Access denied to contacts');
    onRequestClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.topAccess}>
            <View style={styles.accesLock}>
              <Ionicons name='lock-open' color={Colors.primary} size={50} />
            </View>
            <View>
              <Text style={styles.title}>Allow  access to your contacts</Text>
              <Text style={styles.description}>Allow access to  your contacts 
              to be able to send invite to your friends and family.</Text>
            </View>
          </View>
         
       <View style={styles.accessBtnContainer}>
          <TouchableOpacity style={styles.buttonGrant} onPress={handleAllowAccess}>
            <Text style={styles.buttonText}>Grant Access</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonDeny, styles.secondaryButton]} onPress={handleDenyAccess}>
            <Text style={styles.buttonTextDeny}>Deny Access</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  innerContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topAccess: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
  },
  accesLock: {
    backgroundColor: Colors.primaryVariant,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'PoppinsSemiBold',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    fontFamily: 'PoppinsRegular',
    marginBottom: 20,
    textAlign: 'center',
  },
  accessBtnContainer: {
    position: 'absolute',
    padding: 20,
    bottom: 20,
    left: 0,
    right: 0,
  },
  buttonGrant: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDeny: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    height: 50,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.whiteColor,
    fontSize: 16,
  },
  buttonTextDeny: {
    color: Colors.primary,
    fontSize: 16,
  },
});
