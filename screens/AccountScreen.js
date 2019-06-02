import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";

import {
    Text,
    Button,
    Input,
    theme,
    withGalio,
    GalioProvider
  } from "galio-framework";

class AccountScreen extends Component {
  signOut = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("AuthLoading");
  };
  render() {
    return (
      <View>
        <Text>Account Screen</Text>
        <Button shadowColor={true} color={"error"} radius={50} onPress={this.signOut}>
            Log Out
          </Button>
      </View>
    );
  }
}


export default AccountScreen;