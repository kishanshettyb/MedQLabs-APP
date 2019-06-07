import React, { Component } from "react";
import { styles } from "./styles";

import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  AsyncStorage,
  Platform
} from "react-native";

import {
  Text,
  Button,
  Card,
  theme,
  Input,
  withGalio,
  GalioProvider
} from "galio-framework";
import Icon from "react-native-vector-icons/Ionicons";

class ReportsScreen extends Component {
  state = {
    data: ""
  };

  componentDidMount = () => {
    fetch("https://www.medqlabs.com/api/customers/read_one.php?customer_id=1", {
      method: "GET"
    })
      .then(response => response.json())

      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          data: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={[styles.flex1, styles.bgGrey]}>
        <View style={[styles.container]}>
          <Text p>No Reports Found</Text>
        </View>
      </View>
    );
  }
}
export default ReportsScreen;
