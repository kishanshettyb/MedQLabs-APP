import React, { Component } from "react";
import { styles } from "./styles";

import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
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
          verical={true}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
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

class PopularPackagesScreen extends Component {
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
            <View  key={key} style={styles.ml10}>
              <View
                key={key}
                style={[styles.popularPackageCard, styles.fullWidth]}
              >
                <Image
                  style={[styles.packageCardImage, styles.fullWidth]}
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
                            Platform.OS === "ios"
                              ? "ios-document"
                              : "md-document"
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
      <MyScrollView>
        <View style={{ marginTop: 10 }}>{this.state.viewsHolder}</View>
      </MyScrollView>
    );
  }
}

export default PopularPackagesScreen;
