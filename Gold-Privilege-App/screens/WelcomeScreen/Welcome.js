import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  return (
    <SafeAreaView style={ {flex: 1}}>
        <View>
            <Text>Hello Welcome....</Text>
        </View>
    </SafeAreaView>
  )
}

export default Welcome