//import PoreCompoent for preventing unnecesary updates.
import React, { PureComponent } from "react";
//import your components from react-native
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  ScrollView,
  YellowBox,
  ActivityIndicator
} from "react-native";
//import styles for your component
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import {
  Text,
  Button,
  Card,
  theme,
  Input,
  withGalio,
  GalioProvider
} from "galio-framework";
class CartScreen extends PureComponent {
  // static navigationOptions = {
  //   header: null
  // };

  constructor(props) {
    super(props);

    YellowBox.ignoreWarnings([
      "Warning: isMounted(...) is deprecated",
      "Module RCTImageLoader"
    ]);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Green Activity",
      title: navigation.getParam("Title", "Default Title"),

      headerStyle: {
        backgroundColor: navigation.getParam("BackgroundColor", "#E040FB")
      },

      headerTintColor: navigation.getParam("HeaderTintColor", "#fff")
    };
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center"
    }
  };
  apply_Sky_Blue=()=>{
    this.props.navigation.setParams({Title: 'Sky Blue Activity', BackgroundColor : '#000', HeaderTintColor : '#fff'});
 
  }
  onNextStep = () => {
    console.log("called next step");
    
  };

  onPaymentStepComplete = () => {
    alert("Payment step completed!");
    
  };

  onPrevStep = () => {
    console.log("called previous step");
   
  };

  onSubmitSteps = () => {
    console.log("called on submit step.");
    
  };

  //Define your state for your component.
  state = {
    //Assing a array to your pokeList state
    pokeList: [],
    //Have a loading state where when data retrieve returns data.
    loading: true
  };
  //Define your componentDidMount lifecycle hook that will retrieve data.
  //Also have the async keyword to indicate that it is asynchronous.
  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const pokemonApiCall = await fetch(
        "https://medqlabs.com/api/package_cart/read_all_package_info.php?customer_id=1"
      );
      const pokemon = await pokemonApiCall.json();
      this.setState({ pokeList: pokemon, loading: false });
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }
  
  //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument.
  renderItem(data) {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.pokeItemHeader}>{data.item.package_name}</Text>

        <Text style={styles.parameters_covered}>
          <Icon
            type="ionicon"
            name={Platform.OS === "ios" ? "ios-basket" : "md-basket"}
            size={13}
            style={styles.iconColorBlack}
          />
          Parameters Covered: {data.item.parameters_covered}
        </Text>
        <Text style={styles.discount_price}>
          Rs. {data.item.discount_price}
        </Text>
        <Text style={[styles.smallBtn, styles.width100]}>
          <Icon
            type="ionicon"
            name={Platform.OS === "ios" ? "ios-trash" : "md-trash"}
            size={12}
          />{" "}
          Remove
        </Text>
      </View>
    );
  }
  render() {
    //Destruct pokeList and Loading from state.
    const { pokeList, loading } = this.state;
    //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
    //Data contains the data being  mapped over.
    //RenderItem a callback return UI for each item.
    //keyExtractor used for giving a unique identifier for each item.
    if (!loading) {
      return (
        <View style={{ flex: 1, marginTop: 0, backgroundColor: "#fff" }}>
          <ProgressSteps>
            <ProgressStep
              label="Payment"
              onNext={this.onPaymentStepComplete}
              onPrevious={this.onPrevStep}
              borderStyle={styles.stepperBorder}
              scrollViewProps={this.defaultScrollViewProps}

            >
              <FlatList
                data={pokeList}
                renderItem={this.renderItem}
                keyExtractor={item => item.package_id}
              />
            </ProgressStep>
            <ProgressStep
              label="Shipping Address"
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
              onPress={this.apply_Sky_Blue}
            >
              <View style={{ alignItems: "center" }}>
                <Text>Shipping address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Billing Address"
              onNext={this.onNextStep}
              onPrevious={this.onPrevStep}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: "center" }}>
                <Text>Billing address step content</Text>
              </View>
            </ProgressStep>
            <ProgressStep
              label="Confirm Order"
              onPrevious={this.onPrevStep}
              onSubmit={this.onSubmitSteps}
              scrollViewProps={this.defaultScrollViewProps}
            >
              <View style={{ alignItems: "center" }}>
                <Text>Confirm order step content</Text>
              </View>
            </ProgressStep>
          </ProgressSteps>
        </View>
        // <ScrollView
        //   Vertical={true}
        //   contentContainerStyle={styles.contentContainer}
        //   showsVerticalScrollIndicator={false}
        // >
        //   <View style={{ flex: 1, marginTop: 50 }}>
        //     <ProgressSteps>
        //       <ProgressStep
        //         label="Payment"
        //         onNext={this.onPaymentStepComplete}
        //         onPrevious={this.onPrevStep}
        //         scrollViewProps={this.defaultScrollViewProps}
        //       >
        //         <View style={{ alignItems: "center" }}>
        //           <Text>Payment step content</Text>
        //         </View>
        //       </ProgressStep>
        //       <ProgressStep
        //         label="Shipping Address"
        //         onNext={this.onNextStep}
        //         onPrevious={this.onPrevStep}
        //         scrollViewProps={this.defaultScrollViewProps}
        //       >
        //         <View style={{ alignItems: "center" }}>
        //           <Text>Shipping address step content</Text>
        //         </View>
        //       </ProgressStep>
        //       <ProgressStep
        //         label="Billing Address"
        //         onNext={this.onNextStep}
        //         onPrevious={this.onPrevStep}
        //         scrollViewProps={this.defaultScrollViewProps}
        //       >
        //         <View style={{ alignItems: "center" }}>
        //           <Text>Billing address step content</Text>
        //         </View>
        //       </ProgressStep>
        //       <ProgressStep
        //         label="Confirm Order"
        //         onPrevious={this.onPrevStep}
        //         onSubmit={this.onSubmitSteps}
        //         scrollViewProps={this.defaultScrollViewProps}
        //       >
        //         <View style={{ alignItems: "center" }}>
        //           <Text>Confirm order step content</Text>
        //         </View>
        //       </ProgressStep>
        //     </ProgressSteps>
        //   </View>
        //   <View style={[styles.bgWhite, styles.flex1]}>
        //     <Text style={[styles.heading, styles.ml10, styles.mt5]}>
        //       Test / Packages List:
        //     </Text>
        //     <ProgressSteps>
        //       <ProgressStep
        //         borderWidth={1}
        //         nextBtnStyle={styles.nextBtn}
        //         label="First Step"
        //       >
        //         <View>
        //           <FlatList
        //             data={pokeList}
        //             renderItem={this.renderItem}
        //             keyExtractor={item => item.package_id}
        //           />
        //           <Text>
        //             Pull requests are always welcome! Feel free to open a new
        //             GitHub issue for any changes that can be made. Pull requests
        //             are always welcome! Feel free to open a new GitHub issue for
        //             any changes that can be made. Pull requests are always
        //             welcome! Feel free to open a new GitHub issue for any
        //             changes that can be made. Pull requests are always welcome!
        //             Feel free to open a new GitHub issue for any changes that
        //             can be made. Pull requests are always welcome! Feel free to
        //             open a new GitHub issue for any changes that can be made.
        //             Pull requests are always welcome! Feel free to open a new
        //             GitHub issue for any changes that can be made. Pull requests
        //             are always welcome! Feel free to open a new GitHub issue for
        //             any changes that can be made. Pull requests are always
        //             welcome! Feel free to open a new GitHub issue for any
        //             changes that can be made. Pull requests are always welcome!
        //             Feel free to open a new GitHub issue for any changes that
        //             can be made. Pull requests are always welcome! Feel free to
        //             open a new GitHub issue for any changes that can be made.
        //             Pull requests are always welcome! Feel free to open a new
        //             GitHub issue for any changes that can be made. Pull requests
        //             are always welcome! Feel free to open a new GitHub issue for
        //             any changes that can be made. Pull requests are always
        //             welcome! Feel free to open a new GitHub issue for any
        //             changes that can be made. Pull requests are always welcome!
        //             Feel free to open a new GitHub issue for any changes that
        //             can be made. Pull requests are always welcome! Feel free to
        //             open a new GitHub issue for any changes that can be made.
        //             Pull requests are always welcome! Feel free to open a new
        //             GitHub issue for any changes that can be made. Pull requests
        //             are always welcome! Feel free to open a new GitHub issue for
        //             any changes that can be made.
        //           </Text>
        //         </View>
        //       </ProgressStep>
        //       <ProgressStep label="Second Step">
        //         <View style={{ alignItems: "center" }}>
        //           <Text>This is the content within step 2!</Text>
        //         </View>
        //       </ProgressStep>
        //       <ProgressStep label="Third Step">
        //         <View style={{ alignItems: "center" }}>
        //           <Text>This is the content within step 3!</Text>
        //         </View>
        //       </ProgressStep>
        //     </ProgressSteps>
        //   </View>
        // </ScrollView>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}
export default CartScreen;
