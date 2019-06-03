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

import {
  theme,
  withGalio,
  GalioProvider,
} from "galio-framework";

import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AccountScreen from "./screens/AccountScreen";
import HomeScreen from "./screens/HomeScreen";
import PackagesScreen from "./screens/PackagesScreen";

import Icon from "react-native-vector-icons/Ionicons";

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
  }
});

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    PackagesStack,
    AccountStack
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
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
  barIcon:{
      paddingLeft: 10,
      color: '#2d2d2d' 
  },
  iconColor:{
    color: '#2d2d2d'
  }
});
