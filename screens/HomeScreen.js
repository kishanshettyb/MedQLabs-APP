import React, { Component } from "react";
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  ScrollView,
  AppRegistry
} from "react-native";
import { styles } from "./styles";

import {
  Text,
  Button,
  Input,
  theme,
  withGalio,
  GalioProvider,
  Card
} from "galio-framework";
import Swiper from "react-native-swiper";

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.bgWhite} removeClippedSubviews={false}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: "100%", height: 150 }}>
          <Swiper
            style={styles.wrapper}
            autoplay={true}
            autoplayTimeout={3}
            showsButtons={false}
            loadMinimalLoader={<ActivityIndicator />}
          >
            <View style={styles.slide1}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        <View style={styles.bgGrey}>
          <View style={styles.packagesContainer}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View>
                <Text p style={styles.heading}>
                  Popular Health Packages
                </Text>
              </View>
              <View style={{ right: 0, position: "absolute" }}>
                <Text style={styles.smallBtn}>View All</Text>
              </View>
            </View>

            <Card
              fullBackgroundImage
              image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
              shadow={true}
              title="kishan"
              caption="kishan"
              borderless={true}
              location="Banglore"
              avatar={null}
              titleColor="#FE2472"
              footerStyle={styles.cardFooter}
              imageBlockStyle={styles.cardImage}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent("MedqlabsApp", () => Swiper);
