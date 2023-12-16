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
  User_Avatar:{
    alignContent:"center",
    alignItems:"center"
  },
  buttonContainer: {
    height:58,width:'90%',
    backgroundColor:COLOR.white,
    alignSelf:'center',
    marginTop:'45%',alignItems:'center',
    justifyContent:'center',borderRadius:10,
    borderWidth:1,
    borderColor:COLOR.primary
  },
  buttonText: {
    fontSize: 16,
    color: COLOR.primary,
    fontFamily: FONT.Urbanist_Medium,
  },
});
