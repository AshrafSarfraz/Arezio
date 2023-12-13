import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import SwiperFlatList from 'react-native-swiper-flatlist'

import Button from '../../../components/reuseables/Button'
import { COLOR, FONT } from '../../../data/StyleGuides'
import { useNavigation } from '@react-navigation/native'
const data = [
    {
        id: 1,
        title: "Starter Plan",
        Price: "$10/Month",
        image: require('../../../Assets/images/Profile/MyPlan/Background1.png'),
        navigation: require('../../../Assets/images/Profile/MyPlan/navigation1.png'),
    },
    {
        id: 2,
        title: "Premium Plan",
        Price: "$15/Month",
        image: require('../../../Assets/images/Profile/MyPlan/Background2.png'),
        navigation: require('../../../Assets/images/Profile/MyPlan/navigation2.png'),


    },
    {
        id: 3,
        title: "Exclusive plan",
        Price: "$20/Month",
        image: require('../../../Assets/images/Profile/MyPlan/Background.png'),
        navigation: require('../../../Assets/images/Profile/MyPlan/navigation3.png'),


    },
]
const Plans = ({ item }) => {
    const navigation =useNavigation()
    return (
        <View>
            <ImageBackground
                style={{
                    height: 440, width: 310
                    // margin: 10, marginTop: '12%'
                }}
                imageStyle={{ borderRadius: 10 }}
                source={item.image}>
                <View style={styles.MainSection}>
                    <View style={styles.Logo}>
                        <Image source={require('../../../Assets/images/Profile/MyPlan/logo.png')} />
                    </View>
                    <View style={styles.Plan}>
                        <Text style={styles.PlanStyles}>{item.title}</Text>
                        <Text style={styles.SubPlanStyles}>{item.Price}</Text>
                    </View>

                </View>
                <View style={styles.Line}>
                    <Image source={require('../../../Assets/images/Profile/MyPlan/Line.png')} />
                </View>
                <View style={styles.PlanTypes}>
                    <View style={styles.Tick}>
                        <Image source={require('../../../Assets/images/Profile/MyPlan/Tick.png')} />
                    </View>
                    <Text style={styles.PlanText}>Lorem ipsum dolor sit amet</Text>

                </View>
                <View style={styles.PlanTypes}>
                    <View style={styles.Tick}>
                        <Image source={require('../../../Assets/images/Profile/MyPlan/Tick.png')} />
                    </View>
                    <Text style={styles.PlanText}>Lorem ipsum dolor sit amet</Text>

                </View>


                <TouchableOpacity onPress={()=>navigation.navigate('payment')} style={[styles.buttonContainer, { marginTop: 60 }]} >
                    <Text style={{ fontSize: 14, fontFamily: FONT.Urbanist_SemiBold, color: COLOR.black, fontWeight: '700' }}>Select Plan</Text>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.Navigation}>
                <Image source={item.navigation} />
            </View>
        </View>
    )
}
export const SubcriptionPlan = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <ScrollView>

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Subscriptions Plans</Text>
                </View>
                <SwiperFlatList autoplayDelay={2} autoplayLoop  >
                    <View style={styles.ProductSwipper}>
                        {data && data.map((item, i) => (
                            <Plans key={i} item={item} />

                        ))}

                    </View>
                </SwiperFlatList>

            </ScrollView>

        </View>
    )
}

