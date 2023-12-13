import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../../../components/reuseables/Input'
import { COLOR } from '../../../data/StyleGuides'
import Button from '../../../components/reuseables/Button'

export const WithDraw = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const [NextDoorid, setNextDoorid] = useState(null)
    const [NextBankid, setNextBankid] = useState(null)
    const [NextIBANid, setNextIBANid] = useState(null)

    const [values, setValues] = useState({
        passFocus: false,
        idFocus: false,
      })
      const [bankvale, setbankvale] = useState({
        passFocus: false,
        idFocus: false,
      })
      const [IBMvale, setIBMvale] = useState({
        passFocus: false,
        idFocus: false,
      })
      const handleChange = (name, value) => { setValues((prevState) => ({ ...prevState, [name]: value })) };
      const handleChangebank = (bank, bankvale) => { setbankvale((prevState) => ({ ...prevState, [bank]: bankvale })) };
      const handleChangeIBM = (IBM, IBMvale) => { setIBMvale((prevState) => ({ ...prevState, [IBM]: IBMvale })) };


  return (
    <View style={styles.Container}>
    <ScrollView>

    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
      </TouchableOpacity>
    </View>

      <View style={styles.container}>
        
        <View style={styles.inputContainer}>
          <Input
            onChange={(text) => setNextDoorid(text)}
            placeholder={'Name'}
            placeholderColor={values.idFocus ? COLOR.black : COLOR.grey_1}
            style={[styles.input, values.idFocus && styles.focusedInput]}
            onFocus={() => handleChange('idFocus', true)}
            onBlur={() => handleChange('idFocus', false)}
          />
          <Input
            onChange={(text) => setNextBankid(text)}
            placeholder={'Bank'}
            placeholderColor={bankvale.idFocus ? COLOR.black : COLOR.grey_1}
            style={[styles.input, bankvale.idFocus && styles.focusedInput]}
            onFocus={() => handleChangebank('idFocus', true)}
            onBlur={() => handleChangebank('idFocus', false)}
            keyboardType='numeric'

          />
          <Input
            onChange={(text) => setNextIBANid(text)}
            placeholder={'IBAN number'}
            placeholderColor={IBMvale.idFocus ? COLOR.black : COLOR.grey_1}
            style={[styles.input, IBMvale.idFocus && styles.focusedInput]}
            onFocus={() => handleChangeIBM('idFocus', true)}
            onBlur={() => handleChangeIBM('idFocus', false)}

          />

        </View>
        <Button onPress={openModal} marginTop={'90%'} title={'Withdraw now'} />

      </View>
      <Modal
                    visible={modalVisible}
                    transparent
                    animationType='fade'
                    onRequestClose={closeModal}
                >
                    <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
                        <View style={styles.contentContainer}>
                        <Image style={{marginTop:20}}source={require('../../../Assets/images/Profile/Mywallet/SuccessFull.png')} />

                            <Text style={styles.Option}>Successful</Text>
                       
                        </View>
                    </TouchableOpacity>
                </Modal>
      </ScrollView>
      </View>
    
  )
}

