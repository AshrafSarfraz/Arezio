import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLOR, FONT, width } from '../../data/StyleGuides';
import { SCREEN } from '../../data/enums';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from './Button';
import CompleteOrder from './CompleteOrder';
import CancelOrder from './CancelOrder';


const data = [
    {
        orderid: 'Order ID',
        idno: '#123456',
        date: '07/07/2023 - 12:30 AM',
        total: 'Total',
        price: "$70",

    },

];



const OrderComponent = ({ }) => {
    const [selectedTab, setSelectedTab] = useState('everydayValue');
    const navigation = useNavigation()
    const showComponent = (tab) => {
        setSelectedTab(tab);
    };

    const [isVisible, setIsVisible] = useState(false);

    const openModal = () => {
        setIsVisible(true);
    };

    const closeModal = () => {
        setIsVisible(false);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.orderView}>
                <Text style={styles.orderid}>
                    {item.orderid}
                </Text>
                <Text style={styles.idno}>
                    {item.idno}
                </Text>
                <Text style={styles.orderid}>
                    {item.date}
                </Text>
            </View>
            <View style={styles.orderView}>
                <Text style={styles.total}>
                    {item.total}
                </Text>
                <Text style={styles.price}>
                    {item.price}
                </Text>

            </View>
            <View style={styles.ButtonsView}>
                <Button title={'Cancel Order'} ButtonContainer={styles.ButtonCancel} ButtonText={styles.canceltext} onPress={openModal} />
                <Button title={'View Details'} ButtonContainer={styles.Buttoncontainer} onPress={() => navigation.navigate(SCREEN.OrderDetails)} />

            </View>


        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, selectedTab === 'everydayValue' && styles.selectedButton]}
                    onPress={() => showComponent('everydayValue')}
                >
                    <Text style={[styles.text, selectedTab === 'everydayValue' && styles.selectedText]}>Ongoing</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedTab === 'alaCarteCombos' && styles.selectedButton]}
                    onPress={() => showComponent('alaCarteCombos')}
                >
                    <Text style={[styles.text, selectedTab === 'alaCarteCombos' && styles.selectedText]}>Complete</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, selectedTab === 'promotion' && styles.selectedButton]}
                    onPress={() => showComponent('promotion')}
                >
                    <Text style={[styles.text, selectedTab === 'promotion' && styles.selectedText]}>Canceled</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.component}>
                {selectedTab === 'everydayValue' && <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.itemcontainer}
                />}
                {selectedTab === 'alaCarteCombos' &&

                    <View>
                        <CompleteOrder />
                    </View>
                }
                {selectedTab === 'promotion' &&

                    <View>
                        <CancelOrder />
                    </View>
                }


            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.Cancel}>
                            Cancel Order
                        </Text>
                        <Image source={require('../../Assets/images/Lineimage.png')} style={styles.imagemodal} />
                        <Text style={styles.modalText}>You are attempting to cancel{"\n"} your order.</Text>

                        <View style={styles.ButtonsView1}>

                            <Button title={'No'} ButtonContainer={styles.ButtonCancelmodal} ButtonText={styles.canceltextmodal} onPress={closeModal} />
                            <Button title={'Cancel Order'} ButtonContainer={styles.Buttoncontainer} onPress={closeModal} />

                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "6%"
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%',
        marginHorizontal: '7%',
        borderBottomWidth: 1,
        borderColor: COLOR.grey,
        height: 27,
    


    },
    button: {
        alignItems: 'center',
        width: 100
    },
    selectedButton: {
        borderBottomWidth: 2,
        borderBottomColor: COLOR.primary,
    },
    component: {
       
    }, text: {
        fontSize: 14, fontFamily: FONT.Roboto_Medium, color: COLOR.searchgrey
    },
    itemcontainer: {
        padding: 16,
       
    },

    itemContainer: {
        height: 138,
        width: '98%',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: COLOR.white,
        elevation: 2,
        alignSelf: 'center',

    },
    orderView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 10,
    },
    orderid: {
        color: COLOR.grey_8,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',

    },
    idno: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        marginLeft: 10,
        width: '40%',

    },
    total: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Regular,
        fontSize: 12,
        fontWeight: '400',
        textAlignVertical: 'center'

    },
    price: {
        color: COLOR.black_2,
        fontFamily: FONT.Roboto_Bold,
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 10,
    },
    ButtonsView: {
        flexDirection: 'row',
        width: "90%",
        marginHorizontal: "5%",
        marginTop: 10,
        justifyContent: 'space-between'
    },
    ButtonCancel: {
        height: 50,
        width: 140,
        backgroundColor: COLOR.white,
        borderColor: COLOR.primary,
        borderWidth: 1,
    },
    Buttoncontainer: {
        height: 50,
        width: 140,
    },
    canceltext: {
        color: COLOR.primary,
        fontFamily: FONT.Roboto_Medium,
        fontSize: 16,
        fontWeight: '600',


    }, selectedText: {
        color: COLOR.primary
    },
    // modal 

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
        height: 220,
        width: "90%",
        marginHorizontal: "5%"
    },
    imagemodal: {
        width: "100%",
        marginVertical: "5%"
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 14,
        color: COLOR.black_2,
        fontWeight: "400",
        fontFamily: FONT.Roboto_Medium,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    button: {
        borderRadius: 5,
        padding: 10,
        width: 100,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    ButtonCancelmodal: {
        height: 50,
        width: 150,
        backgroundColor: COLOR.white,
        alignSelf: 'flex-end'
    },
    Buttoncontainermodal: {
        height: 50,
        width: 150,
        alignSelf: 'flex-end'
    },
    canceltextmodal: {
        color: COLOR.black,
        fontFamily: FONT.Roboto_Medium,
        fontSize: 16,
        fontWeight: '600',


    },
    Cancel: {
        color: COLOR.black,
        fontFamily: FONT.Roboto_Bold,
        fontSize: 16,
        fontWeight: '600',
    },
    ButtonsView1: {
        flexDirection: 'row',
        width: "100%",
        marginTop: 10,
        justifyContent: 'space-between',

        marginRight: '10%'

    },


});

export default OrderComponent;
