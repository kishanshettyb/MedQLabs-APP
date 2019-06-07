import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image
} from "react-native";

import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { theme, withGalio, GalioProvider } from "galio-framework";

import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AccountScreen from "./screens/AccountScreen";
import HomeScreen from "./screens/HomeScreen";
import PackagesScreen from "./screens/PackagesScreen";
import AddressScreen from "./screens/AddressScreen";
import PopularPackagesScreen from "./screens/PopularPackagesScreen";
import ReportsScreen from "./screens/ReportsScreen";
import CartScreen from "./screens/CartScreen";

import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image
            style={{ width: 180, height: 50, alignSelf: "center" }}
            source={require("./assets/logo.jpg")}
          />
        ),
        headerLeft: (
          <Icon
            style={styles.barIcon}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View style={styles.iconContainer}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={25}
              style={styles.iconColor}
            />
            <TouchableOpacity>
              <Icon
                type="ionicon"
                name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
                size={25}
                style={styles.iconColor}
                onPress={() => navigation.navigate("Cart")}
              />
              <Text style={{color:'#fff',backgroundColor:theme.COLORS.ERROR,position:'absolute',borderRadius:50,right:-10,top:-5,fontSize:6,width:12,height:12,padding:2,textAlign:'center'}}>0</Text>
            </TouchableOpacity>
          </View>
        )
      };
    }
  },
  PopularPackages: {
    screen: PopularPackagesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Popular Packages",
        headerRight: (
          <View style={styles.iconContainer}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={25}
            />
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
              size={25}
            />
          </View>
        )
      };
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: ({ navigation }) => {
      return {
        // headerTitle: "Cart Details",
        headerRight: (
          <View style={styles.iconContainer}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={25}
            />
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
              size={25}
            />
          </View>
        )
      };
    }
  }
});

const PackagesStack = createStackNavigator({
  Packages: {
    screen: PackagesScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Packages",
        headerLeft: (
          <Icon
            style={styles.barIcon}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View style={styles.iconContainer}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={25}
              style={styles.iconColor}
            />
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
              size={25}
              style={styles.iconColor}
            />
          </View>
        )
      };
    }
  }
});

const AccountStack = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Account",

        headerLeft: (
          <Icon
            style={styles.barIcon}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View style={styles.iconContainer}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={25}
              style={styles.iconColor}
            />
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
              size={25}
              style={styles.iconColor}
            />
          </View>
        )
      };
    }
  },
  Address: {
    screen: AddressScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Address",

        headerRight: (
          <View style={styles.iconContainer}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={25}
            />
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
              size={25}
            />
          </View>
        )
      };
    }
  }
});

const ReportsStack = createStackNavigator({
  Report: {
    screen: ReportsScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Reports",

        headerLeft: (
          <Icon
            style={styles.barIcon}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerRight: (
          <View style={styles.iconContainer}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-search" : "md-search"}
              size={25}
              style={styles.iconColor}
            />
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
              size={25}
              style={styles.iconColor}
            />
          </View>
        )
      };
    }
  }
});

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    PackagesStack,
    ReportsStack,
    AccountStack
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];

      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === "Home") {
        iconName = `md-home`;
        tabBarLabel = "Home";
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge;
      } else if (routeName === "Packages") {
        iconName = `md-briefcase`;
        tabBarLabel = "Packages";
      } else if (routeName === "Account") {
        iconName = `md-person`;
        tabBarLabel = "Account";
      } else if (routeName === "Report") {
        iconName = `md-document`;
        tabBarLabel = "Reports";
      }
      return {
        header: null,
        headerTitle: routeName,
        tabBarVisible,
        showIcon: true,

        tabBarIcon: ({ tintColor }) => (
          <IconComponent name={iconName} size={25} color={tintColor} />
        )
      };
    }
  }
);

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        header: null

        // headerTitle: routeName
      };
      //   {
      //   title: "MedQ",
      //   headerLeft: (
      //     <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      //       <View style={{ paddingHorizontal: 10 }}>
      //         <Icon name="md-menu" size={20} />
      //       </View>
      //     </TouchableOpacity>
      //   )
      // }
    }
  }
});

const AppDrawernavigator = createDrawerNavigator({
  Home: AppStackNavigator
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawernavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  },
  barIcon: {
    paddingLeft: 10,
    color: "#2d2d2d"
  },
  iconColor: {
    color: "#2d2d2d"
  }
});
