import React, { useState} from "react";
import { Modal, View, Button, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { TouchableOpacity } from "react-native";


//Welcome screen----------
import Welcome from "../screens/WelcomeScreen/Welcome";

//Authentication screens --------
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/SignUp";
import SignUpOtp from "../screens/AuthScreens/SignUpOtp";
import Congrats from "../screens/AuthScreens/Congrats";

//Home screen=======
import Home from "../screens/HomeScreens/Home";
import PrivilegeList from "../screens/HomeScreens/PrivilegeList";

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

// =======Checkout screens============
import Checkout from "../screens/CheckoutScreens/Checkout";


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
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUpOtp" component={SignUpOtp} />
      <Stack.Screen name="Congrats" component={Congrats} />
  
     
    </Stack.Navigator>
  );
}




// Bottom Tab Navigator
function TabNavigator() {

  const [isProfileModalVisible, setProfileModalVisible] = useState(false);

  const toggleProfileModal = () => {
    setProfileModalVisible(!isProfileModalVisible);
  };

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
        />
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
            <Stack.Screen name="PrivilegeList" component={PrivilegeList} />
          </Stack.Group>

          {/* { ─── Shop screen──────────────────────────────────────────────} */}
          {/* <Stack.Group>
            <Stack.Screen name="Shop" component={Shop} />
          </Stack.Group> */}

          {/* { ─── Settings ──────────────────────────────────────────────} */}
          <Stack.Group>
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            <Stack.Screen name="UpgradePlan" component={UpgradePlan} />
            <Stack.Screen name="Checkout" component={Checkout} />

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
