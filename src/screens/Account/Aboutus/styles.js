import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    Aboutus:{
        margin:20,
        marginTop:50,
        alignContent:'center',alignItems:'center'
    },
    Details:{
        margin:20,
        fontSize:16,
        color: COLOR.black,
        fontFamily:FONT.Urbanist_Bold
    }
  
});
