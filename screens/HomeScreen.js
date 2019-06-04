import React, { Component } from "react";
import { styles } from "./styles";
import Swiper from "react-native-swiper";

import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  ScrollView,
  AppRegistry,
  FlatList,
  Alert,
  Platform,
  Dimensions
} from "react-native";

import {
  Text,
  Button,
  Input,
  theme,
  withGalio,
  GalioProvider,
  Card
} from "galio-framework";
import Icon from "react-native-vector-icons/Ionicons";

// var device_width = Dimensions.get("window").width-50;

class MyScrollView extends Component {
  constructor() {
    super();
    this.state = { currentHorizontalPage: 1 };
  }

  handleScroll = event => {
    this.scrollX = event.nativeEvent.contentOffset.x;
    this.setState({
      currentHorizontalPage: Math.min(
        Math.max(Math.floor(this.scrollX / device_width + 0.5) + 1, 0),
        React.Children.count(this.props.children)
      )
    });
  };

  render() {
    return (
      <View style={styles.containerTransparent}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
        >
          {this.props.children}
        </ScrollView>

        <View style={styles.pagingContainer}>
          <Text style={styles.text}>
            {this.state.currentHorizontalPage} /{" "}
            {React.Children.count(this.props.children)}
          </Text>
        </View>
      </View>
    );
  }
}

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      enabled: true,
      isLoading: true,
      dataLoaded: false,
      viewsHolder: []
    };
  }

  componentDidMount() {
    fetch("https://www.medqlabs.com/api/packages/read_ten.php")
      .then(response => response.json())
      .then(responseData => {
        responseData.map((item, key) => {
          this.state.viewsHolder.push(
            <View key={key} style={styles.popularPackageCard}>
              <Image
                style={styles.packageCardImage}
                source={require("../assets/packages/package0.jpg")}
              />
              <View style={[styles.p10]}>
                <View style={styles.posRel}>
                  <Text style={styles.package_name}>{item.package_name}</Text>
                  <Text style={styles.discount_price}>
                    Rs. {item.discount_price}
                  </Text>
                  <Text style={styles.hrLight} />
                  <View style={{ height: 400 }}>
                    <Text style={styles.parameters_covered}>
                      <Icon
                        type="ionicon"
                        name={
                          Platform.OS === "ios" ? "ios-basket" : "md-basket"
                        }
                        size={13}
                        style={styles.iconColorBlack}
                      />{" "}
                      Parameters Covered: {item.parameters_covered}
                    </Text>
                    <Text style={styles.parameters_covered}>
                      <Icon
                        type="ionicon"
                        name={
                          Platform.OS === "ios" ? "ios-document" : "md-document"
                        }
                        size={13}
                        style={styles.iconColorBlack}
                      />{" "}
                      Report Delivery: {item.report_delivery}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.cartReadMoreBtn]}>
                <View>
                  <Text
                    style={[
                      styles.addToCart,
                      styles.mtb5,
                      styles.mr5,
                      styles.mt5
                    ]}
                  >
                    <Icon
                      type="ionicon"
                      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
                      size={13}
                      style={styles.iconColorWhite}
                    />{" "}
                    Add to Cart
                  </Text>
                </View>
                <View>
                  <Text style={[styles.readMore, styles.mtb5, styles.mt5]}>
                    Read More
                  </Text>
                </View>
              </View>
            </View>
          );
        });
        this.setState({
          dataLoaded: true,
          viewsHolder: this.state.viewsHolder
        });
      });
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
        <View style={{ width: "100%", height: 160 }}>
          <Swiper
            style={styles.wrapper}
            autoplay={true}
            autoplayTimeout={6}
            showsButtons={false}
            loadMinimalLoader={<ActivityIndicator />}
          >
            <View style={styles.slide1}>
              <Image
                source={require("../assets/banners/banner3.jpg")}
                style={styles.banner}
              />
              <View style={styles.bannerTextDiv}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  Summer Special Package
                </Text>
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  Full Body Check Up
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
                >
                  Rs. 1399.00/-
                </Text>
                <Text
                  style={{
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    padding: 3,
                    marginTop: 3,
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: 12,
                    width: 100
                  }}
                >
                  Book Now
                </Text>
              </View>
            </View>
            <View style={styles.slide2}>
              <Image
                source={require("../assets/banners/banner2.jpg")}
                style={styles.banner}
              />
              <View style={styles.bannerTextDiv}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  Summer Special Package
                </Text>
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  Full Body Check Up
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
                >
                  Rs. 1399.00/-
                </Text>
                <Text
                  style={{
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    padding: 3,
                    marginTop: 3,
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: 12,
                    width: 100
                  }}
                >
                  Book Now
                </Text>
              </View>
            </View>
            <View style={styles.slide3}>
              <Image
                source={require("../assets/banners/banner1.jpg")}
                style={styles.banner}
              />
              <View style={styles.bannerTextDiv}>
                <Text style={{ color: "#fff", fontSize: 15 }}>
                  Summer Special Package
                </Text>
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  Full Body Check Up
                </Text>
                <Text
                  style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}
                >
                  Rs. 1399.00/-
                </Text>
                <Text
                  style={{
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    padding: 3,
                    marginTop: 3,
                    textAlign: "center",
                    alignItems: "center",
                    fontSize: 12,
                    width: 100
                  }}
                >
                  Book Now
                </Text>
              </View>
            </View>
          </Swiper>
        </View>

        {/* Offers */}
        <Image
          source={require("../assets/offer-1.png")}
          style={styles.offerImageSrtip}
        />

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
            <MyScrollView>{this.state.viewsHolder}</MyScrollView>
          </View>
        </View>

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
                  Popular Test
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
                <Text p style={styles.headingBlack}>
                  Test Name
                </Text>
                <View style={styles.hrLight} />
              </View>
              <View style={styles.testCard}>
                <Text p style={styles.headingBlack}>
                  Test Name
                </Text>
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
      </ScrollView>
    );
  }
}
AppRegistry.registerComponent("MedqlabsApp", () => Swiper);
