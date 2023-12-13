import { View,Image, StatusBar ,ImageBackground} from 'react-native';
import React,{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { COLOR } from '../../data/StyleGuides';


export default function SplashWhite() {
    const navigation = useNavigation();

    useEffect(() => {
      const navigateToOtherScreen = setTimeout(() => {
        navigation.navigate('Splash')
      }, 2000);
  
      return () => clearTimeout(navigateToOtherScreen);
    }, [navigation]);
  
  return (
    <View style={{flex:1,backgroundColor:COLOR.white}}>
      
    </View>
  );
}
