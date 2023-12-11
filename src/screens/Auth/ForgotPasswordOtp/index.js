import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BotttomHeight from '../../../components/reuseables/BotttomHeight'
import { styles } from './style'
import Input from '../../../components/reuseables/Input'
import { COLOR } from '../../../data/StyleGuides'
import Button from '../../../components/reuseables/Button'
import { useNavigation } from '@react-navigation/native'

export default function ForgotPasswordOtp() {
  const navigation = useNavigation();
  const [NextMail, setNextMail] = useState(null)

  const [mailvale, setmailvale] = useState({
    passFocus: false,
    idFocus: false,
  })

  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Focus next input if available
      if (index < 3 && text.length === 1) {
        inputs[index + 1].focus();
      }
    }
  };

  // Reference for input fields
  const inputs = Array(4).fill(0).map((_, index) => null);


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
              <Text style={styles.detailTxt}>Enter the OTP sent to you</Text>
            </View>
            <Image style={styles.logo} source={require('../../../Assets/images/Forgot/logo.png')} />
          </View>
         

          <View style={styles.containerinput}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(input) => (inputs[index] = input)}
          style={styles.input}
          value={value}
          onChangeText={(text) => handleOtpChange(text, index)}
          maxLength={1}
          keyboardType="numeric"
          secureTextEntry
        />
      ))}
    </View>
    <Text style={styles.resend}>Resend</Text>
        </View>

        <Button onPress={()=>navigation.navigate('ForgotPasswordC')} marginTop={'25%'} title={'Reset Password'} />

        <BotttomHeight />
      </ScrollView>

    </View>
  )
}