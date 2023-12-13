// styles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export const styles = StyleSheet.create({
    headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '10%',
  },
  logo: {
    height: 45,
    width: 45,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
  },
  usernameText: {
    fontSize: 20,
    fontFamily: FONT.Urbanist_Bold,
    color: COLOR.primary,
  },
  icon: {
    height: 44,
    width: 44,
  },
  searchIcon: {
    marginRight: '5%',
  },
  plusIcon: {
    marginLeft: '5%',
  },
  birthdayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '7%',
    marginTop: '9%',
  },
  birthdayTitle: {
    fontSize: 18,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
  },
  viewAllText: {
    fontSize: 13,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.primary,
  },
  box: {
    height: 117,
    width: 142,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:10,
    marginLeft:20
  },
  image: {
    height: 54,
    width: 69,
  
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Arial', // You can replace with your desired font
    color: 'black',
    marginTop:5
  },imagecake:{
    height:19,
    width:19,
    marginLeft:5
  },imagedate:{
    height:14,
    width:92,
    marginTop:5
  },line:{
    height:1,width:'90%',alignSelf:'center',marginTop:"5%"
  },
  earner: {
    fontSize: 18,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft:'5%',
    marginTop:'5%'
  }, box2: {
    height: 69,
    width: 174,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:10,
    marginLeft:20
  },imageman:{
    height:46,
    width:46,
    marginRight:'5%'
  },position:{
    height:8,width:15,marginLeft:'auto',marginRight:'5%'
  },
  imageBackground: {
    height: 294,
    width: 335,
    alignSelf: 'center',
    marginTop: '5%',
  },
  cardContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    alignItems: 'center',
    marginTop: '2%',
  },
  boyImage: {
    height: 36,
    width: 36,
  },
  textContainer2: {
    marginRight: 'auto',
    marginLeft: '5%',
  },
  text2: {
    fontSize: 13,
    color: COLOR.black,
  },
  dotsImage: {
    height: 18,
    width: 5,
  },
});
