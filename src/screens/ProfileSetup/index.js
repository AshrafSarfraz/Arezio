import { View, Text, ScrollView, TouchableOpacity, Image, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Button from '../../components/reuseables/Button';

export const ProfileSetup = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const openModal2 = () => {
        setModalVisible2(true);
    };

    const closeModal2 = () => {
        setModalVisible2(false);
    };
    return (
        <View style={styles.Container}>
            <ScrollView>

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.backIcon} source={require('../../Assets/images/Signup/back.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../Assets/images/Signin/Arezio.png')} />
                </View>

                <View style={styles.Field}>
                    <Text style={styles.Label}> Your Gender</Text>
                    <TouchableOpacity onPress={openModal} style={styles.Dropdown}>
                        <View style={styles.Dropdown_Detail}>
                            <Text style={styles.Dropdown_Title}>Male</Text>
                            <TouchableOpacity style={styles.Dropdown_Arrow}
                                onPress={openModal}>
                                <Image source={require('../../Assets/images/Profile_Setup/Arrow.png')} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.Field}>
                    <Text style={styles.Label}> What’s your date of birth?</Text>
                    <View style={styles.Date}>
                        <View style={styles.Day}>
                            <Text style={styles.DateTextStyle}>DD</Text>
                        </View>
                        <View style={styles.Dash}>
                        <Text style={styles.DashStyles}>-</Text>
                        </View>
                        <View style={styles.Month}>
                            <Text style={styles.DateTextStyle}>MM</Text>
                        </View>
                        <View style={styles.Dash}>
                            <Text style={styles.DashStyles}>-</Text>
                        </View>
                        <View style={styles.Year}>
                            <Text style={styles.DateTextStyle}>Year</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.Field}>
                    <Text style={styles.Label}> Preferred Language</Text>
                    <TouchableOpacity onPress={openModal2} style={styles.Dropdown}>
                        <View style={styles.Dropdown_Detail}>
                            <Text style={styles.Dropdown_Title}>English</Text>
                            <TouchableOpacity style={styles.Dropdown_Arrow}
                                onPress={openModal2}>
                                <Image source={require('../../Assets/images/Profile_Setup/Arrow.png')} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.Field}>
                    <Text style={styles.Label}> Preferred Language</Text>
                       
         <View style={styles.TextArea}>             
    <TextInput
      style={styles.TextAreaStyle}
      placeholder="Write Here"
      placeholderTextColor="grey"
      numberOfLines={5}
      multiline={true}
    />
    </View>     
                </View>
                <Button  marginTop={'10%'} title={'Continue'}/>

                <Modal
                    visible={modalVisible}
                    transparent
                    animationType='fade'
                    onRequestClose={closeModal}
                >
                    <TouchableOpacity style={styles.modalContainer} onPress={closeModal}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.Option1}>Male</Text>
                            <Text style={styles.Option2}>Female</Text>
                            <Text style={styles.Option3}>Other</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <Modal
                    visible={modalVisible2}
                    transparent
                    animationType='fade'
                    onRequestClose={closeModal2}
                >
                    <TouchableOpacity style={styles.modalContainer2} onPress={closeModal2}>
                        <View style={styles.contentContainer2}>
                            <Text style={styles.Option12}>English</Text>
                            <Text style={styles.Option22}>German</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </ScrollView>
        </View>
    )
}

