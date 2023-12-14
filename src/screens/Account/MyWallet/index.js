import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../../../components/reuseables/Button'
import BotttomHeight from '../../../components/reuseables/BotttomHeight'


export const MyWallet = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>


        <View >

          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>My Wallet</Text>
          </View>
          <View style={styles.Header}>
            <ImageBackground style={{ height: 100, width: "95%", margin: 20, marginTop: '8%' }}
              imageStyle={{ borderRadius: 10 }}
              source={require('../../../Assets/images/Profile/Mywallet/Header_Background.png')}>
              <Text style={styles.Heading}>Earning in total</Text>
              <Text style={styles.SubHeading}>2,85,856.20$</Text>
            </ImageBackground>
            <Text style={styles.Title}>History</Text>
            <View style={[styles.WalletCard, { marginTop: '4%' }]}>
              <View style={styles.WalletImg}>
                <Image style={{width:50,height:50}}source={require('../../../Assets/images/Profile/Mywallet/Avatar.png')} />
              </View>
              <View style={styles.User_Name}>
                <Text style={styles.User_NameStyles}>Dennis Reynolds</Text>
                <Text style={styles.WalletDate}>23 December 2024</Text>
              </View>
              <Text style={styles.Ratting}>
                +$10
              </Text>
              <View style={styles.Ratting_Img}>
                <Image style={styles.Ratting_ImgStyle} source={require('../../../Assets/images/Profile/Mywallet/Ratting.png')} />

              </View>
            </View>
            <View style={styles.WalletCard}>
              <View style={styles.WalletImg}>
              <Image style={{width:50,height:50}}source={require('../../../Assets/images/Profile/Mywallet/Avatar.png')} />
              </View>
              <View style={styles.User_Name}>
                <Text style={styles.User_NameStyles}>Dennis Reynolds</Text>
                <Text style={styles.WalletDate}>23 December 2024</Text>
              </View>
              <Text style={styles.Ratting}>
                +$10
              </Text>
              <View style={styles.Ratting_Img}>
                <Image style={styles.Ratting_ImgStyle} source={require('../../../Assets/images/Profile/Mywallet/Ratting.png')} />

              </View>
            </View>
            <View style={styles.WalletCard}>
              <View style={styles.WalletImg}>
              <Image style={{width:50,height:50}}source={require('../../../Assets/images/Profile/Mywallet/Avatar.png')} />
              </View>
              <View style={styles.User_Name}>
                <Text style={styles.User_NameStyles}>Dennis Reynolds</Text>
                <Text style={styles.WalletDate}>23 December 2024</Text>
              </View>
              <Text style={styles.Ratting}>
                +$10
              </Text>
              <View style={styles.Ratting_Img}>
                <Image style={styles.Ratting_ImgStyle} source={require('../../../Assets/images/Profile/Mywallet/Ratting.png')} />

              </View>
            </View>
            <Button onPress={() => navigation.navigate('WithDraw')} marginTop={'40%'} title={'Withdraw'} />

          </View>
        </View>
        <BotttomHeight />
      </ScrollView>
    </SafeAreaView>
  )
}

