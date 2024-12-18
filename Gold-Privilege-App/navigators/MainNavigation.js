import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../styles/Style";

// Import screens
import Welcome from "../screens/WelcomeScreen/Welcome";
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/SignUp";
import SignUpOtp from "../screens/AuthScreens/SignUpOtp";
import Congrats from "../screens/AuthScreens/Congrats";
import ForgotPassword from "../screens/AuthScreens/ForgotPassword";
import ResetPasswordOTP from "../screens/AuthScreens/ResetPasswordOTP";
import ResetPassword from "../screens/AuthScreens/ResetPassword";

import Home from "../screens/HomeScreens/Home";
import PrivilegeList from "../screens/HomeScreens/PrivilegeList";
import Referrals from "../screens/ReferralsScreen/Referrals";
import Shop from "../screens/shopScreens/Shop";
import Wallet from "../screens/WalletScreen/Wallet";
import Cards from "../screens/cardScreens/Cards";
import Profile from "../screens/ProfileScreen/Profile";
import UpdateProfile from "../screens/ProfileScreen/UpdateProfile";
import UpgradePlan from "../screens/ProfileScreen/UpgradePlan";
import AvatarUpload from "../screens/ProfileScreen/AvatarUpload";
import Settings from "../screens/SettingsScreen/Settings";
import NotificationsSettings from "../screens/SettingsScreen/NotificationsSettings";
import PrivacySettings from "../screens/SettingsScreen/PrivacySettings";
import Rewards from "../screens/ProfileScreen/Rewards";
import Support from "../screens/SupportScreen/Support";
import MyPlan from "../screens/Plans/MyPlan";
import Checkout from "../screens/CheckoutScreens/Checkout";
import Notification from "../screens/NotificationScreen/Notification";
import NotificationDetails from "../screens/NotificationScreen/NotificationDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Authentication Stack
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: Colors.black,
        headerTransparent: true,
        headerTitle: "",
        headerLeftContainerStyle: { paddingLeft: 20 },
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpOtp" component={SignUpOtp} />
      <Stack.Screen name="Congrats" component={Congrats} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPasswordOTP" component={ResetPasswordOTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

// Profile Stack
function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="UpgradePlan" component={UpgradePlan} />
      <Stack.Screen name="AvatarUpload" component={AvatarUpload} />
      <Stack.Screen name="Rewards" component={Rewards} />
    </Stack.Navigator>
  );
}

// Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#8B9CC8",
        tabBarActiveTintColor: "#e5ad04",
        tabBarItemStyle: { paddingBottom: 10 },
        tabBarStyle: {
          backgroundColor: "#ECEAEA",
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
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" color={color} size={size} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

// Main Navigation
export default function MainNavigation() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "transparent" },
            headerTintColor: "black",
            headerTransparent: true,
            headerTitle: "",
            headerLeftContainerStyle: { paddingLeft: 20 },
          }}
          initialRouteName="AuthStack"
        >
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="MainContent" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Group>
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="PrivilegeList" component={PrivilegeList} />
            <Stack.Screen name="Referrals" component={Referrals} />
            <Stack.Screen name="NotificationDetails" component={NotificationDetails} />
            <Stack.Screen name="MyPlan" component={MyPlan} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="NotificationsSettings" component={NotificationsSettings} />
            <Stack.Screen name="PrivacySettings" component={PrivacySettings} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}
