import { View, Text, Image,StyleSheet ,ScrollView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { COLOR, FONT } from '../../data/StyleGuides'
import BotttomHeight from '../../components/reuseables/BotttomHeight'

export default function index() {
  return (
    <View style={{flex:1}}>
<ScrollView>


<View style={styles.headerContainer}>
  <TouchableOpacity style={styles.backButton}>
    <Image style={styles.backIcon} source={require('../../Assets/images/Signup/back.png')} />
  </TouchableOpacity>
  <Text style={styles.headerText}>Details</Text>
</View>

<View style={styles.cardContainer}>
  <View style={styles.userInfoContainer}>
    <View>
      <Image style={styles.userImage} source={require('../../Assets/images/UserDetails/dp.png')} />
      <Text style={styles.userName}>Ayla Ferguson</Text>
    </View>

    <TouchableOpacity style={styles.remindButton}>
      <Text style={styles.remindButtonText}>Remind me</Text>
      <Image resizeMode='contain' style={styles.notificationIcon} source={require('../../Assets/images/UserDetails/Notification.png')} />
    </TouchableOpacity>
  </View>




  <View style={styles.dateContainer}>
  <View style={styles.infoBox}>
    <Text style={styles.infoText}>March 31, 1999</Text>
  </View>

  <View style={styles.zodiacBox}>
    <Text style={styles.zodiacText}>Gemini</Text>
    <Image resizeMode='contain' style={styles.zodiacIcon} source={require('../../Assets/images/UserDetails/mdi_zodiac-gemini.png')} />
  </View>
</View>

</View>

<Text style={styles.titleText}>About</Text>
<Text style={styles.bodyText}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .
</Text>


<TouchableOpacity style={{height:60,width:335,backgroundColor:COLOR.primary,alignItems:'center',flexDirection:'row',justifyContent:'center',alignSelf:'center',marginTop:'50%',borderRadius:10}}>
      <Text style={{fontSize:16,fontFamily:FONT.Urbanist_SemiBold,color:COLOR.white}}>Chat Now</Text>
      <Image resizeMode='contain' style={{height:20,width:20,marginLeft:'2%'}} source={require('../../Assets/images/UserDetails/Chat.png')} />
    </TouchableOpacity>
<BotttomHeight/>
    </ScrollView>

    </View>
  )
}


const styles = StyleSheet.create({

  cardContainer: {
    height: 173,
    width: 335,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    alignSelf: 'center',
    marginTop: '5%',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  userImage: {
    height: 76,
    width: 76,
  },
  userName: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginTop: '5%',
  },
  remindButton: {
    height: 30,
    width: 100,
    backgroundColor: COLOR.primary,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  remindButtonText: {
    fontSize: 11,
    fontFamily: FONT.Urbanist_Regular,
    color: COLOR.white,
  },
  notificationIcon: {
    height: 14,
    width: 14,
    marginLeft: '5%',
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '5%',
    marginTop: '5%',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 86,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR.primary,
  },
  infoText: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.primary,
  },
  zodiacBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 68,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLOR.primary,
    marginLeft: '5%',
  },
  zodiacText: {
    fontSize: 10,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.primary,
  },
  zodiacIcon: {
    height: 13,
    width: 13,
    marginLeft: '5%',
  },
  titleText: {
    fontSize: 18,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '5%',
  },
  bodyText: {
    fontSize: 16,
    fontFamily: FONT.Urbanist_Medium,
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '4%',
  },
});
