// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    Heading: {
        color: COLOR.white,
        textAlign: "center",
        paddingTop: 20,
        fontSize: 14,
        fontWeight: "400",
        fontFamily: FONT.Urbanist,
        lineHeight: 21
    },
    SubHeading: {
        color: COLOR.white,
        textAlign: "center",
        paddingTop: 20,
        fontSize: 30,
        fontWeight: "600",
        fontFamily: FONT.Urbanist,
        lineHeight: 21
    },
    Title: {
        marginLeft: 20,
        color: COLOR.black,
        fontSize: 18,
        fontWeight: "400",
        fontFamily: FONT.Urbanist,
        lineHeight: 21
    },
    WalletCard: {
        flexDirection: "row",
        margin: 20,
        marginTop: 0,
        backgroundColor:"white",
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    WalletImg: {
        flex: 0,
        margin:15
    },
    User_Name:{
        flex:1
    },
    User_NameStyles:{
        color: COLOR.black,
        fontSize: 12,
        fontWeight: "600",
        fontFamily: FONT.Urbanist,
        paddingTop:15
    },
    WalletDate:{
        fontSize: 10,
        fontWeight: "400",
        fontFamily: FONT.Urbanist,
    },
    Ratting:{
        flex:1,
        textAlign:"center",
        color: COLOR.Blue,
        fontSize: 16,
        fontWeight: "600",
        fontFamily: FONT.Urbanist,
        paddingTop:18

    },
    Ratting_Img:{
        flex:0,
        marginRight:20,
        marginTop:10
    },
    Ratting_ImgStyle:{
        height:40,
        width:40
    }, headerContainer: {
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
