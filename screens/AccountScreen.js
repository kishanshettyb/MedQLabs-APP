import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ListView,
  AsyncStorage
} from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import Icon from "react-native-vector-icons/Ionicons";


import {
  Text,
  Button,
  Input,
  theme,
  withGalio,
  GalioProvider,
  Card
} from "galio-framework";

class AccountScreen extends Component {
  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("AuthLoading");
  };
  render() {
    return (
      <View style={styles.flex1}>
        <View style={styles.bgBackground} />
        <View style={styles.profileImage}>
          <Image
            source={require("../assets/profile.png")}
            style={styles.profilePic}
          />
        </View>
        <View style={styles.accountInfo}>
          <Text style={styles.accountInfoText}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-person" : "md-person"}
              size={15}
              style={styles.iconColorDark}
            />{" "}
            Name
          </Text>
          <Text style={styles.accountInfoText}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-mail" : "md-mail"}
              size={15}
              style={styles.iconColorDark}
            />{" "}
            example@gmail.com
          </Text>
          <Text style={styles.accountInfoText}>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-call" : "md-call"}
              size={15}
              style={styles.iconColorDark}
            />{" "}
            +91 99990 00909
          </Text>
        </View>
        <View style={styles.List}>
          <Text p style={styles.ListView}>
            <Ionicons
              name={Platform.OS === "ios" ? "ios-clipboard" : "md-clipboard"}
              size={22}
              style={styles.iconColorDark}
            />{" "}
            Reports
          </Text>
        </View>
        <View>
          <Text p style={styles.ListView}>
            <Ionicons
              name={Platform.OS === "ios" ? "ios-briefcase" : "md-briefcase"}
              size={22}
              style={styles.iconColorDark}
            />{" "}
            Orders
          </Text>
        </View>
        <View>
          <Text p style={styles.ListView}>
            <Ionicons
              name={Platform.OS === "ios" ? "ios-contact" : "md-contact"}
              size={22}
              style={styles.iconColorDark}
            />{" "}
            Edit Profile
          </Text>
        </View>
        <View  >
          <Text p style={styles.ListViewLast} onPress={() => this.props.navigation.navigate("Address")}>
            <Ionicons
              name={Platform.OS === "ios" ? "ios-pin" : "md-pin"}
              size={22}
              style={styles.iconColorDark}
            />{" "}
            Address
          </Text>
        </View>
        <View style={styles.flex1}>
          <View style={styles.alignCenter}>
            <View style={styles.logoutBtn}>
              <Button
                shadowColor={true}
                color={"error"}
                radius={50}
                onPress={this.signOut}
              >
                Log Out
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default AccountScreen;
