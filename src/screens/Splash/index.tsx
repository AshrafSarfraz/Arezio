import { View,Image, StatusBar ,ImageBackground} from 'react-native';
import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../../data/StyleGuides';


export default function Splash() {
    const navigation = useNavigation();

    useEffect(() => {
      const navigateToOtherScreen = setTimeout(() => {
        navigation.navigate('OnBoarding')
      }, 2000);
  
      return () => clearTimeout(navigateToOtherScreen);
    }, [navigation]);
  
  return (
    <View style={{flex:1}}>
        <ImageBackground style={{flex:1,alignItems:'center',justifyContent:'center'}} source={require('../../Assets/images/Splash/imgbg.png')}>
<Image style={{height:331,width:263}} source={require('../../Assets/images/Splash/arezio.png')} />
        </ImageBackground>
     
    </View>
  );
}
