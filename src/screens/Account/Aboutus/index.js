import { View, Text, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import BotttomHeight from '../../../components/reuseables/BotttomHeight'


export const Aboutus = ({navigation}) => {

    return (
        <View style={styles.Container}>
            <ScrollView>


                
<View style={styles.headerContainer}>
  <TouchableOpacity  onPress={()=>navigation.goBack()} style={styles.backButton}>
    <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
  </TouchableOpacity>
  <Text style={styles.headerText}>About us</Text>
</View>
                <View style={styles.Aboutus}>

                    <Image source={require('../../../Assets/images/Profile/Aboutus/Aboutus.png')} />
                </View>

                <Text style={styles.Details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</Text>
                <BotttomHeight/>
            </ScrollView>
        </View>

    )
}

