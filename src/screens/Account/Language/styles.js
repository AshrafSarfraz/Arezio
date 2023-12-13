import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLOR.white,
    },
    Language:{
        flexDirection:"row",
    },
    Language_Text:{
        flex:1,
        margin:20,
        fontSize:16,
        color: COLOR.black,
        fontFamily:FONT.Urbanist_Bold
    },
    checkboxContainer: {
        width: 24,
        height: 24,
        borderWidth: 3,
        borderColor: "#092C48",
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      checkedCheckbox: {
        backgroundColor:"#092C48", // Change the background color when checked
        borderWidth:0
        
      },
      checkmark: {
        color: '#fff', // Change the checkmark color
        fontSize: 16,
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
