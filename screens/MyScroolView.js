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
  export default MyScrollView