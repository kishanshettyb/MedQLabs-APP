import React, { Component } from "react";
import { View, Text, StyleSheet, AppRegistry, Image } from "react-native";
import {
  Button,
  Input,
  theme,
  withGalio,
  GalioProvider
} from "galio-framework";
import Swiper from "react-native-swiper";
import { styles } from "./styles";

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerWelcome}>
          <Image
            source={require("../assets/logo.jpg")}
            style={{
              width: 300,
              height: 80,
              alignSelf: "center",
              marginBottom: 30
            }}
          />

          <View style={{ width: "100%", height: 350 }}>
            <Swiper autoplay={true} autoplayTimeout={2.5} showsButtons={false}>
              <View style={styles.slide1}>
                <Image
                  source={require("../assets/banner.png")}
                  style={ styles.bannerImage}
                />
              </View>
              <View style={styles.slide2}>
                <Image
                  source={require("../assets/banner.png")}
                  style={ styles.bannerImage}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  source={require("../assets/banner.png")}
                  style={ styles.bannerImage}
                />
              </View>
            </Swiper>
          </View>

          <Button
            style={styles.getStartBtn}
            shadowColor={true}
            color={"error"}
            radius={50}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            Get Started
          </Button>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent("MedqlabsApp", () => Swiper);
