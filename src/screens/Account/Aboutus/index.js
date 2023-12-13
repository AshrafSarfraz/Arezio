import { View, Text, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'


export const Aboutus = () => {

    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.Aboutus}>

                    <Image source={require('../../../Assets/images/Profile/Aboutus/Aboutus.png')} />
                </View>

                <Text style={styles.Details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</Text>
            </ScrollView>
        </View>

    )
}

