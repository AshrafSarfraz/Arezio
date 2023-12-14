import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Toggle_Button } from '../../components/reuseables/Toggle_Button'
import BotttomHeight from '../../components/reuseables/BotttomHeight'

export const Account = ({navigation}) => {
    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView>
                <View >
                    <View style={styles.Header}>
                        <View style={styles.Header_Img}>
                            <Image source={require("../../Assets/images/Profile/logo.png")} />
                        </View>
                        <View style={styles.HeaderTitle}>

                            <Text style={styles.HeaderTitleStyles}>Profile</Text>

                        </View>
                    </View>

                    <View >
                        <ImageBackground style={styles.User_Card} source={require("../../Assets/images/Profile/Background.png")}>
                            <Image style={styles.Edit_Img} source={require("../../Assets/images/Profile/edit.png")} />

                            <View style={styles.User_Img}>
                                <ImageBackground style={styles.User_BackGroundImage} source={require("../../Assets/images/Profile/Avatar_Background.png")}>
                                    <Image style={styles.User_Image} source={require("../../Assets/images/Profile/Avatar.png")} />

                                </ImageBackground>

                            </View>
                            <View style={styles.User_Name}>
                                <Text style={styles.User_NameStyles}>Luke Skywalker</Text>
                                <Text style={styles.User_Desc}>Luke.Skywalker@domain.com</Text>
                            </View>
                        </ImageBackground>

                    </View>
                    <TouchableOpacity>
                        <View style={styles.Section}>
                            <View style={styles.Plan_Img}>
                                <Image source={require("../../Assets/images/Profile/plan.png")} />

                            </View>
                            <View style={styles.Plan_Text}>
                                <Text style={styles.Plan_TextStyles}>My Plan</Text>
                            </View>
                            <View style={styles.Arrow_Img}>
                                <Image source={require("../../Assets/images/Profile/Arrow.png")} />

                            </View>
                        </View>
                    </TouchableOpacity>
                 
                    <TouchableOpacity>
                        <View style={styles.Section}>
                            <View style={styles.Plan_Img}>
                                <Image source={require("../../Assets/images/Profile/book.png")} />

                            </View>
                            <View style={styles.Plan_Text}>
                                <Text style={styles.Plan_TextStyles}>My Posts</Text>
                            </View>
                            <View style={styles.Arrow_Img}>
                                <Image source={require("../../Assets/images/Profile/Arrow.png")} />

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('MyWallet')}>
                        <View style={styles.Section}>
                            <View style={styles.Plan_Img}>
                                <Image source={require("../../Assets/images/Profile/wallet.png")} />

                            </View>
                            <View style={styles.Plan_Text}>
                                <Text style={styles.Plan_TextStyles}>My Wallet</Text>
                            </View>
                            <View style={styles.Arrow_Img}>
                                <Image source={require("../../Assets/images/Profile/Arrow.png")} />

                            </View>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate('ReferToEarn')}>
                        <View style={styles.Section}>
                            <View style={styles.Plan_Img}>
                                <Image source={require("../../Assets/images/Profile/user-add.png")} />

                            </View>
                            <View style={styles.Plan_Text}>
                                <Text style={styles.Plan_TextStyles}>Refer to Earn</Text>
                            </View>
                            <View style={styles.Arrow_Img}>
                                <Image source={require("../../Assets/images/Profile/Arrow.png")} />

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Language')}>
                        <View style={styles.Section}>
                            <View style={styles.Plan_Img}>
                                <Image source={require("../../Assets/images/Profile/translate.png")} />
                                
                            </View>
                            <View style={styles.Plan_Text}>
                                <Text style={styles.Plan_TextStyles}>Language</Text>
                            </View>
                            <View style={styles.Arrow_Img}>
                                <Image source={require("../../Assets/images/Profile/Arrow.png")} />

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.Section}>
                            <View style={styles.Plan_Img}>
                                <Image source={require("../../Assets/images/Profile/Group.png")} />

                            </View>
                            <View style={styles.Plan_Text}>
                                <Text style={styles.Plan_TextStyles}>Notifications</Text>
                            </View>
                            <View style={styles.Arrow_Img}>
<Toggle_Button/>
                                {/* <Image source={require("../../Assets/images/Profile/Arrow.png")} /> */}

                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Aboutus')}>
                        <View style={styles.Section}>
                            <View style={styles.Plan_Img}>
                                <Image source={require("../../Assets/images/Profile/people.png")} />

                            </View>
                            <View style={styles.Plan_Text}>
                                <Text style={styles.Plan_TextStyles}>About us</Text>
                            </View>
                            <View style={styles.Arrow_Img}>
                                <Image source={require("../../Assets/images/Profile/Arrow.png")} />

                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

<View style={{height:150}}/>
            </ScrollView>
        </SafeAreaView>

    )
}

