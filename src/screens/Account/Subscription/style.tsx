import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    Heading:{
        fontSize: 20,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.white,
        margin:20
    },
    MainSection:{
        flexDirection:"row",
        marginTop:30
    },
    Logo:{
        flex:0
    },
    Plan:{
        flex:1,
    },
    PlanStyles:{
        fontSize: 25,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.white,
        margin:10,
        marginBottom:0
    },
    SubPlanStyles:{
        fontSize: 25,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.white,
        margin:10,
        marginTop:8,
        marginBottom:0
    },
    Line:{
        marginLeft:15,
        marginTop:40,
        marginBottom:20
    },
    PlanTypes:{
        flexDirection:"row",
        margin:20,
        marginBottom:0,

    },
    Tick:{
        flex:0,
        marginTop:10
    },
    PlanText:{
        flex:1,
        marginTop:10,
        marginLeft:20,
        fontSize: 16,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.white,
    },
    LastPlanText:{
        flex:1,
        marginTop:10,
        marginLeft:20,
        marginBottom:40,
        fontSize: 16,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.white,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
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
      ProductSwipper: {
        margin: 50,
        marginLeft:30,
        marginRight:10,
        alignContent:"center",
        alignItems:"center",
        flexDirection: "row",
        gap:10,
    },
    Navigation:{
        alignContent:"center",
        alignItems:"center",
        marginTop:80
    },
    buttonContainer: {
        height:58,width:'80%',
        backgroundColor:COLOR.white,
        alignSelf:'center',
        marginTop:'45%',alignItems:'center',
        justifyContent:'center',borderRadius:10
      },
      buttonText: {
        fontSize: 16,
        color: COLOR.black,
        fontFamily: FONT.Urbanist_Medium,
      },
});