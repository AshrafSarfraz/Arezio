import { View, Text, SafeAreaView, ScrollView, ImageBackground, Image, } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../../../components/reuseables/Button'
export const MyWallet = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.Header}>
            <ImageBackground style={{ height: 100, width: "95%", margin: 20 }}
              imageStyle={{ borderRadius: 10 }}
              source={require('../../../Assets/images/Profile/Mywallet/Header_Background.png')}>
              <Text style={styles.Heading}>Earning in total</Text>
              <Text style={styles.SubHeading}>2,85,856.20$</Text>
            </ImageBackground>
            <Text style={styles.Title}>History</Text>
            <View style={styles.WalletCard}>
              <View style={styles.WalletImg}>
                <Image source={require('../../../Assets/images/Profile/Mywallet/Avatar.png')} />
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
                <Image source={require('../../../Assets/images/Profile/Mywallet/Avatar.png')} />
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
                <Image source={require('../../../Assets/images/Profile/Mywallet/Avatar.png')} />
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
            <Button marginTop={'55%'} title={'Continue'} />

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

