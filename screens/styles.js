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
    margin: 10
  },
  cardImage: {
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    height: 150,
    resizeMode: "contain"
  },
  smallBtn: {
    fontSize: 12,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.COLORS.ERROR,
    borderRadius: 5,
    elevation: 1,
    color: "#fff",
    marginTop: 2
  },
  // offer
  offerImageSrtip: {
    width: 370,
    height: 45,
    alignItems: "contain",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  // category
  catagoryCard: {
    elevation: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom:5,
    marginRight:10,
    marginLeft:0,
    borderRadius: 5
  },
  categoryImage: {
    width: 100,
    height: 60,
    resizeMode: "contain"
  },
  categoryText: {
    color: theme.COLORS.PRIMARY,
    paddingBottom: 5
  },
  // healthy tips
  healthyTipCard: {
    width: 200,
    marginRight: 10,
    marginBottom: 5
  },
  // test
  testCard: {
    width: 250,
    height:200,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: theme.COLORS.NAVBAR,
    marginRight: 10,
    marginTop: 0,
    marginBottom:5,
    padding: 10, 
  },
  hrLight: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  }
});

export { styles };
