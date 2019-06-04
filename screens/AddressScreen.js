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

class AddressScreen extends Component {
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
        <View style={[styles.packagesContainer, styles.bgGrey]}>
          <Text p>
            <Icon
              type="ionicon"
              name={Platform.OS === "ios" ? "ios-pin" : "md-pin"}
              size={25}
              style={styles.iconColorDark}
            />{" "}
            Default Address
          </Text>

          <View style={styles.addressCard}>
            <Text p style={styles.addName}>
              {this.state.data.name}
            </Text>
            <Text p style={styles.addText}>
              {this.state.data.address}
            </Text>
            <Text p style={styles.addText}>
              {this.state.data.area}
            </Text>
            <Text p style={styles.addText}>
              {this.state.data.city} - {this.state.data.pincode}
            </Text>
            <Text p style={styles.addText}>
              {this.state.data.email}
            </Text>
            <Text p style={styles.addText}>
              {this.state.data.phone}
            </Text>
            <Button
              style={{ marginTop: 10 }}
              size="small"
              color="error"
              radius={50}
              shadowColor={"error"}
            >
              Edit
            </Button>
          </View>

          <View />

          <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Email"
          />
          <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Email"
          />
          <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Email"
          />
          <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Email"
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
          }}
        />
      </View>
    );
  }
}
export default AddressScreen;
