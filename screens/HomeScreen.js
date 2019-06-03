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
  constructor() {
    super();
    this.state = {
      enabled: true
    };
  }
  render() {
    return (
      <ScrollView
        style={styles.bgWhite}
        removeClippedSubviews={false}
        scrollEnabled={this.state.enabled}
        showsVerticalScrollIndicator={false}
      >
        {/* StatusBar */}
        <StatusBar barStyle="dark-content" />

        {/* Banner */}
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

        {/*Popular Packages */}
        <View style={styles.bgGrey}>
          <View style={styles.packagesContainer}>
            <View style={{ flex: 0.1, flexDirection: "row" }}>
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
              title="Health Package Name"
              caption="Rs. 299/-"
              borderless={true}
              avatar={null}
              titleColor="#FE2472"
              footerStyle={styles.cardFooter}
              imageBlockStyle={styles.cardImage}
            />
          </View>
        </View>

        {/* Offers */}
        <Image
          source={require("../assets/offer-1.png")}
          style={styles.offerImageSrtip}
        />

        {/* Popular Categories */}
        <View style={styles.bgGrey}>
          <View style={styles.packagesContainer}>
            <View style={{ flex: 0.1, flexDirection: "row" }}>
              <View>
                <Text p style={styles.heading}>
                  Popular Categories
                </Text>
              </View>
              <View style={{ right: 0, position: "absolute" }}>
                <Text style={styles.smallBtn}>View All</Text>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.contentContainer}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.catagoryCard}>
                  <Image
                    source={require("../assets/categories/heart.png")}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Heart</Text>
                </View>
                <View style={styles.catagoryCard}>
                  <Image
                    source={require("../assets/categories/kidney.png")}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Kidney</Text>
                </View>
                <View style={styles.catagoryCard}>
                  <Image
                    source={require("../assets/categories/intestine.png")}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Intestine</Text>
                </View>
                <View style={styles.catagoryCard}>
                  <Image
                    source={require("../assets/categories/liver.png")}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Liver</Text>
                </View>
                <View style={styles.catagoryCard}>
                  <Image
                    source={require("../assets/categories/lungs.png")}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Lungs</Text>
                </View>
                <View style={styles.catagoryCard}>
                  <Image
                    source={require("../assets/categories/thyroid.png")}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryText}>Thyroid</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>

        {/* Test */}
        <View style={styles.bgWhite}>
          <View style={styles.packagesContainer}>
            <View style={{ flex: 0.1, flexDirection: "row" }}>
              <View>
                <Text p style={styles.heading}>
                  Test
                </Text>
              </View>
              <View style={{ right: 0, position: "absolute" }}>
                <Text style={styles.smallBtn}>View All</Text>
              </View>
            </View>

            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.testCard}>
                <Text p>Test Name</Text>
                <View style={styles.hrLight} />
              </View>
              <View style={styles.testCard}>
                <Text p>Test Name</Text>
                <View style={styles.hrLight} />
              </View>
            </ScrollView>
          </View>
        </View>

        {/* Healthy Tips */}
        <View style={styles.bgGrey}>
          <View style={styles.packagesContainer}>
            <View style={{ flex: 0.1, flexDirection: "row" }}>
              <View>
                <Text p style={styles.heading}>
                  Healthy Tips
                </Text>
              </View>
              <View style={{ right: 0, position: "absolute" }}>
                <Text style={styles.smallBtn}>View All</Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.healthyTipCard}>
                <Card
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  shadow={true}
                  title="Healthy Tip Title"
                  caption="caption"
                  borderless={true}
                  avatar="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  titleColor="#FE2472"
                  location="Banglore"
                />
              </View>
              <View style={styles.healthyTipCard}>
                <Card
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  shadow={true}
                  title="Healthy Tip Title"
                  caption="caption"
                  borderless={true}
                  avatar="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  titleColor="#FE2472"
                  location="Banglore"
                />
              </View>

              <View style={styles.healthyTipCard}>
                <Card
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  shadow={true}
                  title="Healthy Tip Title"
                  caption="caption"
                  borderless={true}
                  avatar="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  titleColor="#FE2472"
                  location="Banglore"
                />
              </View>
              <View style={styles.healthyTipCard}>
                <Card
                  fullBackgroundImage
                  image="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  shadow={true}
                  title="Healthy Tip Title"
                  caption="caption"
                  borderless={true}
                  avatar="https://images.unsplash.com/photo-1536567893079-f54abdc73dc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e6a56a131b11a6366446c42381192329&auto=format&fit=crop&w=1350&q=80"
                  titleColor="#FE2472"
                  location="Banglore"
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.packagesContainer}>
          <Text>
            If you want to render a set of data broken into logical sections,
            maybe with section headers (e.g. in an alphabetical address book),
            and potentially with heterogeneous data and rendering (such as a
            profile view with some buttons followed by a composer, then a photo
            grid, then a friend grid, and finally a list of stories), this is
            the way to go.
          </Text>
          <Text>
            If you want to render a set of data broken into logical sections,
            maybe with section headers (e.g. in an alphabetical address book),
            and potentially with heterogeneous data and rendering (such as a
            profile view with some buttons followed by a composer, then a photo
            grid, then a friend grid, and finally a list of stories), this is
            the way to go.
          </Text>
          <Text>
            If you want to render a set of data broken into logical sections,
            maybe with section headers (e.g. in an alphabetical address book),
            and potentially with heterogeneous data and rendering (such as a
            profile view with some buttons followed by a composer, then a photo
            grid, then a friend grid, and finally a list of stories), this is
            the way to go.
          </Text>
        </View>
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent("MedqlabsApp", () => Swiper);
