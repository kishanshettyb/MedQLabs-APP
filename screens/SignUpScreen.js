import React, { Component } from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import {
  Text,
  Button,
  Input,
  theme,
  withGalio,
  GalioProvider
} from "galio-framework";

class SignUpScreen extends Component {

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.forms}>
          <Image
            source={require("../assets/logo.jpg")}
            style={{
              width: 300,
              height: 80,
              alignSelf: "center",
              marginBottom: 30
            }}
          />
          <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Full Name"
          />
           <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Phone"
          />
           <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Email"
          />
          <Input
            rounded={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Username"
          />
          <Input
            icon={"md-checkmark-circle"}
            rounded={true}
            password={true}
            placeholderTextColor={theme.COLORS.PLACEHOLDER}
            placeholder="Password"
          />
           
          <Button shadowColor={true} color={"error"} radius={50}>
            Sign Up
          </Button>
          <View>
            <Text style={styles.signUpText} onPress={() => this.props.navigation.navigate("SignIn")}>
              Already have an account? Sign In
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  forgotText: {
    alignContent: "flex-end",
    color: theme.COLORS.ERROR,
    alignItems: "flex-end",
    alignSelf: "flex-end",
    paddingTop: 10,
    paddingBottom: 10
  },
  signUpText:{
    alignContent: "center",
    color: theme.COLORS.ERROR,
    alignItems: "center",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
});
