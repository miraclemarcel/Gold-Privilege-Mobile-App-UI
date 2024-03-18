import React, { useState} from "react";
import { Modal, View, Button, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { TouchableOpacity } from "react-native";


//Welcome screen----------
import Welcome from "../screens/WelcomeScreen/Welcome";

//Authentication screens --------
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/SignUp";
import SignUpOtp from "../screens/AuthScreens/SignUpOtp";
import Congrats from "../screens/AuthScreens/Congrats";
import ForgotPassword from "../screens/AuthScreens/ForgotPassword";
import ResetPasswordOTP from "../screens/AuthScreens/ResetPasswordOTP";
import ResetPassword from "../screens/AuthScreens/ResetPassword";

//Home screen=======
import Home from "../screens/HomeScreens/Home";
import PrivilegeList from "../screens/HomeScreens/PrivilegeList";
import Referrals from "../screens/ReferralsScreen/Referrals";

// =========Shop screens==================
import Shop from "../screens/shopScreens/Shop";

// ======== wallet screen==================
import Wallet from "../screens/WalletScreen/Wallet";

// ============Card screen =============
import Cards from "../screens/cardScreens/Cards";

// ========Profile screen ===============
import Profile from "../screens/ProfileScreen/Profile";
import UpdateProfile from "../screens/ProfileScreen/UpdateProfile";
import UpgradePlan from "../screens/ProfileScreen/UpgradePlan";
import ProfileModal from "../screens/ProfileScreen/ProfileModal";
import AvatarUpload from "../screens/ProfileScreen/AvatarUpload";
import Settings from "../screens/SettingsScreen/Settings";
import NotificationsSettings from "../screens/SettingsScreen/NotificationsSettings";
import PrivacySettings from "../screens/SettingsScreen/PrivacySettings";
import Rewards from "../screens/ProfileScreen/Rewards";


// ===========customer support =====================
import Support from "../screens/SupportScreen/Support";

// =========My plans screens========
import MyPlan from "../screens/Plans/MyPlan";

// =======Checkout screens============
import Checkout from "../screens/CheckoutScreens/Checkout";
import { Colors } from "../styles/Style";

// =========Notification screen =====================
import Notification from "../screens/NotificationScreen/Notification";
import NotificationDetails from "../screens/NotificationScreen/NotificationDetails";



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
        headerTintColor: Colors.black,
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
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpOtp" component={SignUpOtp} />
      <Stack.Screen name="Congrats" component={Congrats} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPasswordOTP" component={ResetPasswordOTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
  
     
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarVisible: route.state ? route.state.index === undefined : true,
      })}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}




// Bottom Tab Navigator
function TabNavigator() {
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };

  const navigation = useNavigation();
  const [isProfileScreen, setIsProfileScreen] = useState(false);

  navigation.addListener("state", (e) => {
    if (e.data.state.routes[e.data.state.index].name === "Profile") {
      setIsProfileScreen(true);
    } else {
      setIsProfileScreen(false);
    }
  });

  return (
    <>
    <Tab.Navigator
      options={{
        style: {
          padding: 30,
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "#8B9CC8",
        tabBarActiveTintColor: "#e5ad04",
        // tabBarActiveBackgroundColor: "rgba(19, 80, 232, 0.3)",
        tabBarItemStyle: {
          paddingBottom: 10,
        },
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
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" color={color} size={size} />
          ),
          tabBarLabel: ""
        }}
      />
     {/* <Tab.Screen
          name="Profile"
          component={Profile}
          options={(navigation) => ({
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="ellipsis-horizontal"
                color={color}
                size={size}
                onPress={() => { toggleProfileModal(); } }
              />
            ),
            tabBarLabel: ""
          })}
        /> */}
     {/* <Tab.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={isProfileModalVisible ? "arrow-back" : "ellipsis-horizontal"}
                color={color}
                size={size}
                onPress={() => {
                  if (isProfileModalVisible) {
                    navigation.goBack(); 
                  } else {
                    toggleProfileModal(); // Opens the profile modal
                  }
                }}
              />
            ),
            tabBarLabel: ""
          })}
        /> */}
    </Tab.Navigator>

    <ProfileModal
        isOpen={isProfileModalVisible}
        onClose={toggleProfileModal}
      />

    </>
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
            headerTintColor: "black",
            headerTransparent: true,
            headerTitle: "",
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
          }}
          initialRouteName="AuthStack"
        >
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="MainContent" component={TabNavigator} options={{ headerShown: false }} />

          <Stack.Group>
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              headerRight: () => (
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color="black"
                  style={{ marginLeft: 10 }}
                />
              ),
            }}
          />
            <Stack.Screen name="PrivilegeList" component={PrivilegeList} />
            <Stack.Screen name="Referrals" component={Referrals} />
            <Stack.Screen name="NotificationDetails" component={NotificationDetails} />

          </Stack.Group>

          {/* { ─── Shop screen──────────────────────────────────────────────} */}
          {/* <Stack.Group>
            <Stack.Screen name="Shop" component={Shop} />
          </Stack.Group> */}

          {/* { ─── Settings ──────────────────────────────────────────────} */}
          <Stack.Group>
            <Stack.Screen name="AvatarUpload" component={AvatarUpload} />
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            <Stack.Screen name="UpgradePlan" component={UpgradePlan} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="MyPlan" component={MyPlan} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="NotificationsSettings" component={NotificationsSettings} />
            <Stack.Screen name="PrivacySettings" component={PrivacySettings} />
            <Stack.Screen name="Rewards" component={Rewards} />

          </Stack.Group>

          {/* { ─── Favourite Screens ──────────────────────────────────────────────} */}
          {/* <Stack.Group>
            <Stack.Screen name="Favourite" component={Favourite} />
          </Stack.Group> */}
        </Stack.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}
