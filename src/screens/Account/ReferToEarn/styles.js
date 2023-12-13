import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    Header:{
        flexDirection:"row",
        gap:20,
        margin:20
    },
    HeaderSection1:{
        flex:1
    },
    HeaderSection2:{
        flex:1
    },
    Title:{
        fontSize:14,
fontWeight:"400",
    textAlign: "center",
    padding: 15,
    color: COLOR.white,
    fontFamily:FONT.Urbanist_Regular
    },
    Sub_Title:{
        fontSize:20,
fontWeight:"600",
    textAlign: "center",
    color: COLOR.white,
    fontFamily:FONT.Urbanist_Regular

    },
    Details:{
        margin:20,
        fontSize:16,
            color: COLOR.black,
            fontFamily:FONT.Urbanist_Bold

    },
    Referrallink:{
        margin:20,
        fontSize:16,
            color: COLOR.black,
            fontFamily:FONT.Urbanist_Bold
    },
    LinkSection:{
        flexDirection:"row",
        borderWidth:0.5,
        borderColor:COLOR.grey_1,
        margin:20,
        marginTop:0,
        borderRadius:10

    },
    Link_Text:{
        flex:1,
        margin:20,
        fontSize:14,
            color: COLOR.black,
            fontFamily:FONT.Urbanist_Bold
    },
    Copy_Img:{
        flex:1,
        alignContent:"flex-end",
        alignItems:"flex-end",
        marginRight:20,
        marginTop:20
    },
      // modal style 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  contentContainer: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: "10%",
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
fontSize:14,
fontWeight:"600",
    padding: 10,
    color: COLOR.black,
    position:"absolute",
    left:60,
    
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
});
