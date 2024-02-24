import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import { TouchableOpacity } from "react-native";


//Welcome screen----------
import Welcome from "../screens/WelcomeScreen/Welcome";

//Authentication screens --------
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/SignUp";
import SignUpOtp from "../screens/AuthScreens/SignUpOtp";

//Home screen=======
import Home from "../screens/HomeScreens/Home";





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Authentication stack
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTintColor: "white",
        headerTransparent: true,
        headerTitle: "",
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
      }}
      initialRouteName="Welcome"
    >

      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
  
     
    </Stack.Navigator>
  );
}



// Bottom Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      options={{
        style: {
          padding: 30,
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#8B9CC8",
        tabBarActiveTintColor: "#1350E8",
        tabBarActiveBackgroundColor: "rgba(19, 80, 232, 0.3)",
        tabBarItemStyle: {
          paddingBottom: 10,
        },
        tabBarStyle: {
          backgroundColor: "#102249",
          padding: 10,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" color={color} size={size} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

// Main navigation
export default function MainNavigation() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTintColor: "white",
            headerTransparent: true,
            headerTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
          }}
          initialRouteName="AuthStack"
        >
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainContent"
            component={TabNavigator}
            options={{ headerShown: false }}
          />

          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Group>

          {/* { ─── Shop screen──────────────────────────────────────────────} */}
          {/* <Stack.Group>
            <Stack.Screen name="Shop" component={Shop} />
          </Stack.Group> */}

          {/* { ─── Settings ──────────────────────────────────────────────} */}
          {/* <Stack.Group>
            <Stack.Screen
              name="Settings"
              component={Settings}
            />
          </Stack.Group> */}

          {/* { ─── Favourite Screens ──────────────────────────────────────────────} */}
          {/* <Stack.Group>
            <Stack.Screen name="Favourite" component={Favourite} />
          </Stack.Group> */}
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}
