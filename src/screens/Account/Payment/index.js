import { View, Text, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Input from '../../../components/reuseables/Input';
import Button from '../../../components/reuseables/Button';


export const Payment = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Payment</Text>
                </View>
                <View style={styles.Payment_Form}>
                    <Text style={styles.Label}>Card Name</Text>
                    <Input placeholder={'Andrew Ainsley'} />
                    <Text style={styles.Label}>Card Number</Text>
                    <Input placeholder={'2672 4738 7837 7285'} />
                    <View style={styles.PinSection}>
                        <View style={styles.Expiry}>

                            <Text style={styles.Label}>Expiry</Text>
                            <Input placeholder={'09/07/26'} />
                        </View>
                        <View style={styles.CVV}>

                            <Text style={styles.Label}>CVV</Text>
                            <Input placeholder={'699'} />
                        </View>
                    </View>
                    <Button onPress={openModal} marginTop={'60%'} title={'Withdraw now'} />

                </View>

                <Modal
                    visible={modalVisible}
                    transparent
                    animationType='fade'
                    onRequestClose={closeModal}
                >
                    <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
                        <View style={styles.contentContainer}>
                            <Image style={{ marginTop: 18, marginRight: 20, height: 170, width: 170 }} source={require('../../../Assets/images/Profile/MyPlan/Wallet.png')} />

                            <Text style={styles.Option}>Payment Confirmed!</Text>
                            <Button onPress={()=>navigation.navigate('TabNavigator')} marginTop={'20%'} title={'Redirect to Home'} />

                        </View>
                    </TouchableOpacity>
                </Modal>
            </ScrollView>
        </View>

    )
}

