import { View, Text, ScrollView, Image, ImageBackground, TouchableOpacity ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLOR, FONT } from '../../data/StyleGuides'
import Button from '../../components/reuseables/Button'
import BotttomHeight from '../../components/reuseables/BotttomHeight'


const OnboardingScreen = () => {
    const navigation = useNavigation()
    const [onboardingIndex, setOnboardingIndex] = useState(0)
    console.log(onboardingIndex)
    const skipFunction = () => {
    }
    const onboardingFunction = () => {
        if (onboardingIndex == 0) {
            setOnboardingIndex(onboardingIndex+1)
        } else if ( onboardingIndex == 1) {
          setOnboardingIndex(onboardingIndex+1)
        }else{
          navigation.navigate('Signin')
        }
    }
    const backFunction = () => {
        setOnboardingIndex(onboardingIndex-1)
    }
    return (
        <View style={{flex:1}}>
        <ScrollView>

        <Image source={onboardingIndex== 0 ? require('../../Assets/images/OnBoarding/1.png') : onboardingIndex == 1 ? require('../../Assets/images/OnBoarding/2.png') : onboardingIndex ==2 ?  require('../../Assets/images/OnBoarding/3.png') : null } resizeMode='cover' style={{height:266,width:266,alignSelf:'center',marginTop:'10%'}} />
               
          
                {onboardingIndex == 0 ?
                <Text style={{fontSize:16,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,width:'90%',textAlign:'center',alignSelf:'center',marginTop:"8%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                 aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo
                   consequat. .</Text>
                   : onboardingIndex ==1 ?

                <Text  style={{fontSize:16,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,width:'90%',textAlign:'center',alignSelf:'center',marginTop:'8%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. .</Text> : onboardingIndex ==2 ?  <Text  style={{fontSize:16,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,width:'90%',textAlign:'center',alignSelf:'center',marginTop:'8%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat. .</Text>:null
                }

                <Image source={onboardingIndex == 0 ? require('../../Assets/images/OnBoarding/pag1.png') : onboardingIndex ==1 ?  require('../../Assets/images/OnBoarding/pag2.png') : onboardingIndex ==2 ?  require('../../Assets/images/OnBoarding/pag3.png'):null} resizeMode='contain' style={{height:8,width:32,alignSelf:'center',marginTop:'20%'}} />
                {/* <Reuse_Button BtnText="Next" CustomStyle={styles.NextButtonStyling} onPress={()=> onboardingFunction()} /> */}
              <Button marginTop={'40%'} title={'Next'} onPress={()=>onboardingFunction()}/>
              <BotttomHeight/>
        </ScrollView>

        </View>
    )
}

export default OnboardingScreen



const styles = StyleSheet.create({
  Container:{
      flex: 1,
  },
  OnboardingImageStyling:{
      width: 341,
      height: 573,
      resizeMode: 'contain',
      alignSelf: 'center',
      top: '3%',
  },
  SkipButtonStyling:{
      alignSelf: 'flex-end',
      marginHorizontal: '5%',
      marginTop: '10%'
  },
  BackButtonStyling:{
      marginHorizontal: '5%',
      marginTop: '10%'
  },
  SkipButtonTextStyling:{
      fontSize: 16,
      fontWeight: '600',
      fontStyle: "italic",
  },
  OnboardingCurveImageStyling:{
      alignSelf: 'center',
      height: 390,
      position: 'absolute',
      bottom: 0,
  },
  OnboardingTextStyling:{
      fontWeight: '600',
      fontSize: 26,
      textAlign: 'center',
      flexWrap: 'wrap',
      position: 'absolute',
      top: '20%',
      right: 0,
      left: 0,
      paddingHorizontal: '5%'
  },
  OnboardingDotImageStyling:{
      width: 42,
      height: 8,
      position: 'absolute',
      top: '45%',
      alignSelf: 'center',
  },
  NextButtonStyling:{
      position: 'absolute',
      bottom: '7%',
  }
})