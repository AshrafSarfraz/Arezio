import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%',
    marginLeft: '5%',
  },
  backButton: {
    // Style for the back button
  },
  backIcon: {
    height: 28,
    width: 28,
  },
  headerText: {
    fontSize: 20,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
  },
  Label:{
    margin:20,
    marginBottom:10,
    fontSize: 18,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
  },
  PinSection:{
    flexDirection:"row"
  },
  Expiry:{
    flex:1
  },
  CVV:{
    flex:1
  },
   // modal style 
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  contentContainer: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: "60%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Option: {
marginTop:15,
fontSize:24,
fontWeight:"600",
    width: "80%",
    textAlign: "center",
    padding: 10,
    color: COLOR.black
  },
});
