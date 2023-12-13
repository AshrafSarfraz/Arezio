// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.white,


    },
    Header: {
        flexDirection: "row",
        marginTop: "10%",
        marginLeft: "8%"
    },
    Header_Img: {
        flex: 0
    },
    HeaderTitle: {
        flex: 1,
        marginLeft: 10,
        marginTop: 5
    },
    HeaderTitleStyles: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: FONT.Urbanist_Bold,
        color: COLOR.black
    },
    User_Card: {
        flexDirection: "row",
        margin: "5%"
    },
    User_Img: {
        flex: 0,
    },
    User_BackGroundImage: {
        height: 70,
        width: 70,
        margin: 15

    },
    User_Image: {
        margin: 15
    },
    User_Name: {
        flex: 1,
        marginTop: 20
    },
    User_NameStyles: {
        fontSize: 18,
        fontWeight: "600",
        fontFamily: FONT.Urbanist_Bold,
        color: COLOR.white
    },
    User_Desc: {
        fontSize: 12,
        fontWeight: "600",
        fontFamily: FONT.Urbanist_Bold,
        color: COLOR.white,
        marginTop: 8
    },
    Edit_Img: {
        position: "absolute",
        right: 20,
        top: 15

    },
    Section: {
        flexDirection: "row",
        margin: 20,
        marginBottom: 0,
        borderRadius: 5,
        borderWidth:0.5,
        borderColor:COLOR.grey_1
    
    },
    Plan_Img: {
        flex: 0,
        margin: 10,
        marginTop: 15,
        
    },
    Plan_Text: {
        flex: 1,
        margin: 10,
        marginTop: 12

    },
    Plan_TextStyles:{
        fontSize: 16,
        fontWeight: "400",
        fontFamily: FONT.Urbanist,
        color: COLOR.black,
        lineHeight:35
    },
    Arrow_Img: {
        flex: 0,
        alignContent: "flex-end",
        alignItems: "flex-end",
        margin: 10,
        marginTop: 18

    }
});
