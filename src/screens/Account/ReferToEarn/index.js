import { View, Text, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'


export const ReferToEarn = ({ navigation }) => {
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
                    <Text style={styles.headerText}>Refer to Earn</Text>
                </View>
                <View style={styles.Header}>
                    <View style={styles.HeaderSection1}>
                        <ImageBackground
                            style={{ height: 100, width: "100%" }}
                            imageStyle={{ borderRadius: 10 }}
                            source={require('../../../Assets/images/Profile/ReferToEarn/Background.png')}>
                            <Text style={styles.Title}>Earning in total</Text>
                            <Text style={styles.Sub_Title}>85,856.20€</Text>

                        </ImageBackground>
                    </View>
                    <View style={styles.HeaderSection2}>
                        <ImageBackground
                            style={{ height: 100, width: "100%" }}
                            imageStyle={{ borderRadius: 10 }}
                            source={require('../../../Assets/images/Profile/ReferToEarn/Background.png')}>
                            <Text style={styles.Title}>Total Invites</Text>
                            <Text style={styles.Sub_Title}>10</Text>

                        </ImageBackground>

                    </View>

                </View>
                <Text style={styles.Details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. .</Text>
                <Text style={styles.Referrallink}>Referral link:</Text>
                <View style={styles.LinkSection}>
                    <Text style={styles.Link_Text}>Sample link here</Text>
                    <TouchableOpacity onPress={openModal} style={styles.Copy_Img}>

                        <Image source={require('../../../Assets/images/Profile/ReferToEarn/copy.png')} />

                    </TouchableOpacity>
                </View>

                <Modal
                    visible={modalVisible}
                    transparent
                    animationType='fade'
                    onRequestClose={closeModal}
                >
                    <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
                        <View style={styles.contentContainer}>
                            <Image style={{ marginTop: 18, marginRight: 40 }} source={require('../../../Assets/images/Profile/ReferToEarn/copysuccess.png')} />

                            <Text style={styles.Option}>Copied</Text>

                        </View>
                    </TouchableOpacity>
                </Modal>
            </ScrollView>
        </View>

    )
}

