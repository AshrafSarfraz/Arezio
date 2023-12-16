
import { View, Text, StyleSheet, ImageBackground, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { COLOR, FONT } from '../data/StyleGuides'
import Home from '../screens/Home';
import Reels from '../screens/Reels';
import Chat from '../screens/Chats';
import { Account } from '../screens/Account';

interface BottomProps{
    navigation:any
}

const Bottom_Nav:React.FC<BottomProps> = ({navigation}) => {
    const [BtnState,setBtnState]=useState(0)
  return (
    <View  style={styles.Container} >
        {
    BtnState === 0 ? <Home /> :
    BtnState === 1 ? <Home /> :
    BtnState === 2 ? <Reels  /> :
    BtnState === 3 ? <Chat  /> :
    BtnState === 4 ? <Account  navigation={navigation}/> :
    null
}

      <View  style={styles.DrawerCont}>
        <ImageBackground source={require('../Assets/images/Bottom/Bottom.png')}   style={styles.Drawer_Img}  imageStyle={{width:'100%',height:'100%',borderRadius:15}} >
         <TouchableOpacity  style={styles.Btn} onPress={()=>{setBtnState(0)}} >
            {
              BtnState===0? <Image  source={require('../Assets/images/Home/Home.png')} style= {styles.Home}/> :
             <Image  source={require('../Assets/images/Home/homegrey.png')} style= {styles.Home}/>  
           }
            <Text  style={[styles.Btn_Txt,BtnState===0?styles.Active_Txt:null]}>Home</Text> 
         </TouchableOpacity>
         <TouchableOpacity  style={styles.Btn} onPress={()=>{setBtnState(1)}} >
            {
              BtnState===1? <Image  source={require('../Assets/images/Home/Calendar.png')} style= {styles.Home}/> :
             <Image  source={require('../Assets/images/Home/Calendargrey.png')} style= {styles.Home}/>  
           }
            <Text  style={[styles.Btn_Txt,BtnState===1?styles.Active_Txt:null]}>Birthdays</Text> 
         </TouchableOpacity>
         <TouchableOpacity  style={styles.Btn} onPress={()=>{setBtnState(2)}} >
            {
              BtnState===2? <Image  source={require('../Assets/images/Home/video-vertical.png')} style= {styles.Home}/> :
             <Image  source={require('../Assets/images/Home/videoverticalgrey.png')} style= {styles.Home}/>  
           }
            <Text  style={[styles.Btn_Txt,BtnState===2?styles.Active_Txt:null]}>Reels</Text> 
         </TouchableOpacity>
         <TouchableOpacity  style={styles.Btn} onPress={()=>{setBtnState(3)}} >
            {
              BtnState===3? <Image  source={require('../Assets/images/Home/Chat.png')} style= {styles.Home}/> :
             <Image  source={require('../Assets/images/Home/Chatrey.png')} style= {styles.Home}/>  
           }
            <Text  style={[styles.Btn_Txt,BtnState===3?styles.Active_Txt:null]}>Chats</Text> 
         </TouchableOpacity>
         <TouchableOpacity  style={styles.Btn} onPress={()=>{setBtnState(4)}} >
            {
              BtnState===4? <Image  source={require('../Assets/images/Home/Profile.png')} style= {styles.Home}/> :
             <Image  source={require('../Assets/images/Home/Profilegrey.png')} style= {styles.Home}/>  
           }
            <Text  style={[styles.Btn_Txt,BtnState===4?styles.Active_Txt:null]}>Profile</Text> 
         </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

export default Bottom_Nav

const styles=StyleSheet.create({
Container:{
    backgroundColor:"#FFFFFF",
    flex:1
},
DrawerCont:{
   width:"100%",
   position:'absolute',
   bottom:0,
  
 
},
Drawer_Img:{
    flexDirection:"row",
    justifyContent:'space-evenly',
    alignItems:"center",
    width:'90%',
    height:77,
    bottom:15,
    alignSelf:'center',
},
Btn:{
 alignItems:"center"
},
Home:{
    width:20,height:20,resizeMode:'contain',
},
Btn_Txt:{
    marginTop:'17%',
    fontSize:10,
    fontFamily:FONT.Urbanist_Medium ,
    lineHeight:15,
    color:COLOR.grey
},
Active_Txt:{
    marginTop:'17%',
    fontSize:10,
    fontFamily:FONT.Urbanist_Bold ,
    lineHeight:15,
    color:COLOR.white
}
})





















