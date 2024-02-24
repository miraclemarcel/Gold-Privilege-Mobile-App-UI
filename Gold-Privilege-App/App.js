import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainNavigation from './navigators/MainNavigation';
import "react-native-gesture-handler";
// import React, {useState} from 'react';

import 'react-native-gesture-handler';


export default function App() {
  return (
    // <SafeAreaView>
     
    // </SafeAreaView>
    <MainNavigation/>
    

  );
}