// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
 marginTop:"10%"
  },
  
  footerText: {
    fontSize: 14,
     color: COLOR.grey_5,

    fontFamily: FONT.Urbanist_Regular,
  },
  
  footerLink: {
    fontSize: 24,
    color: COLOR.primary,
    fontFamily: FONT.Urbanist_SemiBold,
  },footerLinkContainer:{
    marginLeft:'2%'
  },
  container: {
    alignItems: 'center',
    marginTop: '10%',
  },
  image: {
    height: 59,
    width: 234,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginTop: '5%',
  },
  signInText: {
    fontSize: 14,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    marginTop: '2%',
  },
  inputContainer: {
    marginTop: '25%',
  },
  input: {
    borderColor: COLOR.black,
    borderWidth: 0,
  },
  focusedInput: {
    borderWidth: 1.5,
    borderColor:COLOR.primary
  },
  leftIcon: {
    height: 24,
    width: 24,
    resizeMode:"contain"
  },
  leftIcon1: {
    height: 15,
    width: 16,
    resizeMode:"contain"
  },
  passwordIcon: {
    height: 20,
    width: 20,
  },
  Container:{
    flex:1,
    backgroundColor:COLOR.white
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    marginLeft: '5%',
  },
  backIcon: {
    height:28,
    width: 28,
  },
  // modal style 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transperent',
  },
  contentContainer: {
    width: 320,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    height:399
  },detailTxt:{
    fontSize: 14,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Regular,
    marginTop:'5%'
  },forgotCon:{
    marginRight: '9%' 
  },logo:{
    height: 79, width: 83
  },forgotConmain:{
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  containerinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'center',
    marginTop:'20%'
  },
  input: {
    width: 63,
    height: 63,
    borderWidth: 1.2,
    borderColor: COLOR.primary,
    textAlign: 'center',
    fontSize: 20,
    marginRight:'4%',
    left:7
  },resend:{
    fontSize: 14,
    color: COLOR.black,
    fontFamily: FONT.Urbanist_Regular,
    marginTop:'5%',
    marginLeft:'auto',
    marginRight:'10%'
  }
 
});
