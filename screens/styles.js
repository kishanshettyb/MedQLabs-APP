import { StyleSheet, Dimensions } from "react-native";
import { theme, withGalio, GalioProvider } from "galio-framework";
var device_width = Dimensions.get("window").width - 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  containerTransparent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  containerWelcome: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  posRel: {
    position: "relative"
  },
  // paddings
  p10: { padding: 10 },
  //margins
  mt5: { 
    marginTop: 10 
  },
  mtb5: {
    marginTop: 5,
    marginBottom: 5
  },
  mr5: {
    marginRight: 5
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
  // banner
  banner: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },
  bannerTextDiv: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: "#00000080",
    borderRadius: 2,
    padding: 5
  },
  // Popular packages Card
  popularPackageCard: {
    borderRadius: 5,
    elevation: 1,
    backgroundColor: "#fff",
    height: 260,
    width: device_width,
    marginTop: 0,
    marginBottom: 10,
    marginRight: 10,
    position: "relative"
  },
  packageCardImage: {
    width: device_width,
    height: 110,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  pagingContainer: {
    backgroundColor: "#ddd",
    display: "none"
  },
  package_name: {
    fontSize: 17,
    fontWeight: "400"
  },
  addToCart: {
    backgroundColor: "#013e7f",
    color: "#fff",
    fontSize: 13,
    padding: 5,
    width: 100,
    textAlign: "center",
    elevation: 1,
    borderRadius: 2
  },
  readMore: {
    backgroundColor: "#99b73b",
    color: "#fff",
    fontSize: 13,
    padding: 5,
    width: 100,
    textAlign: "center",
    elevation: 1,
    borderRadius: 2
  },
  cartReadMoreBtn: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    left: 10
  },
  discount_price: {
    fontWeight: "600"
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
    paddingBottom: 15,
    fontSize: 18
  },
  headingBlack: {
    color: theme.COLORS.BLACK,
    paddingBottom: 15,
    fontSize: 18
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
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 0,
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
    width: 300,
    marginRight: 10,
    marginBottom: 5
  },
  // test
  testCard: {
    width: 250,
    height: 200,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: theme.COLORS.NAVBAR,
    marginRight: 10,
    marginTop: 0,
    marginBottom: 5,
    padding: 10
  },
  hrLight: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1
  },
  // Accounts Screen
  flex1: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoutBtn: {
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  bgBackground: {
    backgroundColor: theme.COLORS.DRIBBBLE,
    height: 130
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
    borderWidth: 2,
    borderColor: "#fff"
  },
  profileImage: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center"
  },
  accountInfo: {
    alignItems: "center",
    justifyContent: "center"
  },
  accountInfoText: {
    fontSize: 15,
    fontWeight: "600",
    color: theme.COLORS.ERROR
  },
  iconColor: {
    color: theme.COLORS.ERROR
  },
  iconColorWhite: {
    color: "#fff"
  },
  iconColorBlack: {
    color: "#000"
  },
  iconColorDark: {
    color: theme.COLORS.DRIBBBLE
  },
  iconColorDarkRight: {
    color: theme.COLORS.DRIBBBLE,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  List: {
    marginTop: 20
  },
  ListView: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 10,
    color: theme.COLORS.BLACK
  },
  ListViewLast: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 10,
    color: theme.COLORS.BLACK
  },
  // Address Screeen
  addressCard: {
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 20,
    padding: 10
  },
  addName: {
    color: theme.COLORS.BLACK,
    paddingBottom: 5
  },
  addText: {
    color: theme.COLORS.GREY,
    fontSize: 15
  },
  FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export { styles };
