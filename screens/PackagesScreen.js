import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,Text
} from "react-native";

class PackagesScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10
        }}
      >
        <Text>Packages Screen</Text>
      </View>
    );
  }
}
export default PackagesScreen;
