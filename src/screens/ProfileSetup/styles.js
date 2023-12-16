import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';


export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLOR.white

  },
  container: {
    alignItems: 'center',
    marginTop: '10%',

  },
  image: {
    height: 59,
    width: 234,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '5%',
  },
  backIcon: {
    height: 28,
    width: 28,
  },
  Field: {
    marginLeft: "6%",
    marginRight: "6%",
    marginTop: "5%"
  },
  Label: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.black
  },
  Dropdown: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    marginTop: "5%"

  },
  Dropdown_Detail: {
    flexDirection: "row"
  },
  Dropdown_Title: {
    flex: 1,
    padding: "5%",
    color:COLOR.grey_1
  },
  Dropdown_Arrow: {
    flex: 1,
    height: 20,
    width: 10,
    padding: "5%",
    alignContent: "flex-end",
    alignItems: "flex-end"

  },
  // modal style 
  modalContainer: {
    flex: 1,
    marginBottom: 240,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transperent',
  },
  contentContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: "30%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Option1: {
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F4",

    width: "80%",
    textAlign: "center",
    padding: 10,
    color: COLOR.Blue
  },
  Option2: {
    width: "80%",
    padding: 10,
    color: COLOR.Blue,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F4",
  },
  Option3: {

    width: "80%",
    padding: 10,
    textAlign: "center",
    color: COLOR.Blue

  },
  // modal style 2
  modalContainer2: {
    flex: 1,
    marginTop: "60%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transperent',
  },
  contentContainer2: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: "20%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Option12: {
    borderBottomWidth: 1,
    borderBottomColor: "#F4F4F4",

    width: "80%",
    textAlign: "center",
    padding: 10,
    color: COLOR.Blue
  },
  Option22: {

    width: "80%",
    padding: 10,
    color: COLOR.Blue,
    textAlign: "center"
  },
  // modal style 3
  modalContainer3: {
    flex: 1,
    // marginTop: "60%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    
  },
  contentContainer3: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: 378,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Option13: {
    
    width: "100%",
    textAlign: "center",
    padding: 10,
    color: COLOR.Blue
  },
  Option23: {

    width: "80%",
    padding: 10,
    color: COLOR.Blue,
    textAlign: "center"
  },

  Date: {
    flexDirection: "row"
  },
  Day: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    marginTop: "6%",
    marginRight: "6%",
    borderRadius: 8


  },
  DateTextStyle: {
    textAlign: "center",
    paddingTop: "20%",
    paddingBottom: "20%",
    fontSize: 14,
    fontWeight: "400",
    color: COLOR.grey_1,
    fontFamily: FONT.Urbanist_Regular
  },
  Dash: {
    flex: 0,
    marginTop: "10%"
  },
  DashStyles: {
    color: COLOR.Blue,
    fontWeight: "bold"
  },
  Month: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    marginTop: "6%",
    marginRight: "6%",
    marginLeft: "6%",
    borderRadius: 8
  },
  Year: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    marginTop: "6%",
    marginRight: "6%",
    marginLeft: "6%",
    borderRadius: 8

  },
  TextArea: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
  },

});