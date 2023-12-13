import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import BotttomHeight from '../../../components/reuseables/BotttomHeight'
import { styles } from './style'
import Input from '../../../components/reuseables/Input'
import { COLOR } from '../../../data/StyleGuides'
import Button from '../../../components/reuseables/Button'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

export default function ForgotPasswordC() {
  const navigation = useNavigation();
  const [NextMail, setNextMail] = useState(null)

  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [valup, setValup] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [valuecon, setValuecon] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [mailvale, setmailvale] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [datevalue, setdatevalue] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [Nextvalue, setNextvalue] = useState({
    passFocus: false,
    idFocus: false,
  })
  const [NextLocate, setNextLocate] = useState({
    passFocus: false,
    idFocus: false,
  })


  const [passwordVisible, setPasswordVisible] = useState(false)
  const [passwordVisiblec, setPasswordVisiblec] = useState(false)
  const [password, setpassword] = useState(null)
  const [passwordc, setpasswordc] = useState(null)
  const [modalVisible3, setModalVisible3] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible)
  }
  const togglePasswordc = () => {
    setPasswordVisiblec(!passwordVisiblec)
  }
  const handleChange = (name, value) => { setValues((prevState) => ({ ...prevState, [name]: value })) };
  const handleChangemail = (mail, mailvale) => { setmailvale((prevState) => ({ ...prevState, [mail]: mailvale })) };
  const handleChangedate = (date, datevalue) => { setdatevalue((prevState) => ({ ...prevState, [date]: datevalue })) };
  const handleChangeLocate = (Locate, NextLocate) => { setNextLocate((prevState) => ({ ...prevState, [Locate]: NextLocate })) };
  const handleChangecon = (conf, valuecon) => { setValuecon((prevState) => ({ ...prevState, [conf]: valuecon })) };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const openModal3 = () => {
    setModalVisible3(true);
};

const closeModal3 = () => {
    setModalVisible3(false);
};


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
              onChange={(text) => setpassword(text)}
              placeholder={'Enter New Password'}
              placeholderColor={values.passFocus ? COLOR.black : COLOR.grey_1}
              style={[styles.input, values.passFocus && styles.focusedInput]}
              onFocus={() => handleChange('passFocus', true)}
              onBlur={() => handleChange('passFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Signin/Lock.png')} style={[styles.passwordIcon, { tintColor: values.passFocus ? COLOR.black : COLOR.grey_1 }]} resizeMode='contain' />}
              secureText={!passwordVisible}
              onRightPress={togglePassword}
              addRight={<Image source={passwordVisible ? require('../../../Assets/images/Signin/Hide.png') : require('../../../Assets/images/Signin/show.png')} style={styles.passwordIcon} resizeMode='contain' />}
            />
            <Input
              onChange={(text) => setpasswordc(text)}
              placeholder={'Confirm Password'}
              placeholderColor={valuecon.passFocus ? COLOR.black : COLOR.grey_1}
              style={[styles.input, valuecon.passFocus && styles.focusedInput]}
              onFocus={() => handleChangecon('passFocus', true)}
              onBlur={() => handleChangecon('passFocus', false)}
              addLeft={<Image source={require('../../../Assets/images/Signin/Lock.png')} style={[styles.passwordIcon, { tintColor: valuecon.passFocus ? COLOR.black : COLOR.grey_1 }]} resizeMode='contain' />}
              secureText={!passwordVisiblec}
              onRightPress={togglePasswordc}
              addRight={<Image source={passwordVisiblec ? require('../../../Assets/images/Signin/Hide.png') : require('../../../Assets/images/Signin/show.png')} style={styles.passwordIcon} resizeMode='contain' />}
            />


          </View>
        </View>

        <Button onPress={openModal3} marginTop={'15%'} title={'Continue'} />

        <BotttomHeight />
      </ScrollView>
      <Modal
                    visible={modalVisible3}
                    transparent
                    animationType='fade'
                    onRequestClose={closeModal3}
                >
                    <TouchableOpacity style={styles.modalContainer3} onPress={closeModal3}>
                        <View style={styles.contentContainer3}>
                            <FastImage
                                resizeMode="stretch"
                                style={{ width: 200, height: 200 }}
                                source={require('../../../Assets/images/Forgot/Mobile.png')}
                            />
                            <Text style={styles.Option13}>Password reset successful!</Text>
                            <Button onPress={()=>navigation.navigate('Signin')} marginTop={'8%'} title={'Back to login'} />

                        </View>
                    </TouchableOpacity>
                </Modal>
    </View>
  )
}