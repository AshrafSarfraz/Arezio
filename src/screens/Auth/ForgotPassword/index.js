import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BotttomHeight from '../../../components/reuseables/BotttomHeight'
import { styles } from './style'
import Input from '../../../components/reuseables/Input'
import { COLOR } from '../../../data/StyleGuides'
import Button from '../../../components/reuseables/Button'
import { useNavigation } from '@react-navigation/native'

export default function ForgotPasswordChange() {
  const navigation = useNavigation();
  const [NextMail, setNextMail] = useState(null)

  const [mailvale, setmailvale] = useState({
    passFocus: false,
    idFocus: false,
  })


  const handleChangemail = (mail, mailvale) => { setmailvale((prevState) => ({ ...prevState, [mail]: mailvale })) };

  return (
    <View style={styles.Container}>
      <ScrollView>

        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.forgotConmain}>
            <View style={styles.forgotCon}>
              <Text style={styles.footerLink}>Forgot Password?</Text>
              <Text style={styles.detailTxt}>Enter your details to continue</Text>
            </View>
            <Image style={styles.logo} source={require('../../../Assets/images/Forgot/logo.png')} />
          </View>
          <View style={styles.inputContainer}>

            <Input
              onChange={(text) => setNextMail(text)}
              placeholder={'Email'}
              placeholderColor={mailvale.idFocus ? COLOR.black : COLOR.grey_1}
              style={[styles.input, mailvale.idFocus && styles.focusedInput]}
              onFocus={() => handleChangemail('idFocus', true)}
              onBlur={() => handleChangemail('idFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Signup/Message.png')} style={[styles.leftIcon1, { tintColor: mailvale.idFocus ? COLOR.black : COLOR.grey_1 }]} />}
            />



          </View>
        </View>

        <Button onPress={()=>navigation.navigate('ForgotPasswordOtp')} marginTop={'15%'} title={'Continue'} />

        <BotttomHeight />
      </ScrollView>

    </View>
  )
}