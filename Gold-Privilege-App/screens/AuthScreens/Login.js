import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from "expo-status-bar";



// Style components =============
import { 
  Colors 

} from '../../styles/Style';


const Login = () => {
  return (
    <SafeAreaView style={ {flex: 1 }}>
      <StatusBar backgroundColor={Colors.primary}/>

         <View>
          <Text>Create an account</Text>
         </View>
    </SafeAreaView>
  )
}

export default Login