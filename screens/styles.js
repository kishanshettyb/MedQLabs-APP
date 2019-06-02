import { StyleSheet } from "react-native";
import { theme, withGalio, GalioProvider } from "galio-framework";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  containerWelcome: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 5,
    elevation: 1
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 5,
    elevation: 1
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 5,
    elevation: 1
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  getStartBtn: {
    position: "absolute",
    bottom: 50
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },
  // Home Screen Styles
  bgWhite: {
    backgroundColor: "#fff"
  },
  bgGrey: {
    backgroundColor: theme.COLORS.NAVBAR
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    margin: 10,
    borderRadius: 5
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
    borderRadius: 5,
    margin: 10
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
    margin: 10,
    borderRadius: 5
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  heading: {
    color: theme.COLORS.ERROR,
    paddingBottom: 15
  },
  packagesContainer: {
    margin: 10,
    marginBottom: 20
  },
  cardImage: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    height: 150,
    resizeMode: "contain"
  },
  smallBtn:{
    fontSize:12,
    padding:5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: theme.COLORS.ERROR,
    borderRadius:5,
    elevation:1,
    color:'#fff',marginTop:2
  }
   
});

export { styles };
