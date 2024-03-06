import React, { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './navigators/MainNavigation';
import "react-native-gesture-handler";



SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    // ======POPPINS FONTS=========
    'PoppinsLight': require('./assets/fonts/Poppins-Light.ttf'), // 300 weight
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'), // 400 weight
    'PoppinsMedium': require('./assets/fonts/Poppins-Medium.ttf'), // 500 weight
    'PoppinsSemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'), // 600 weight
    'PoppinsBold': require('./assets/fonts/Poppins-Bold.ttf'), // 700 weight
    'PoppinsExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'), // 800 weight
    // =========MONTSERRAT FONTS ================
    'MonserratBold': require('./assets/fonts/mont/Montserrat-Bold.ttf'), // 700 weight

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <MainNavigation/>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
