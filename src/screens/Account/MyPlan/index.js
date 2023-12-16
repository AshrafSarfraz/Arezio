import { View, Text, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Button from '../../../components/reuseables/Button'
export const MyPlan = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <ScrollView>
                
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>My Plan</Text>
                </View>
                <ImageBackground style={{ height: "90%", width: "95%", margin: 20, marginTop: '12%' }}
                    imageStyle={{ borderRadius: 10 }}
                    source={require('../../../Assets/images/Profile/MyPlan/Background.png')}>
                    <Text style={styles.Heading}>Your Current plan:</Text>
                    <View style={styles.MainSection}>
                        <View style={styles.Logo}>
                            <Image source={require('../../../Assets/images/Profile/MyPlan/logo.png')} />
                        </View>
                        <View style={styles.Plan}>
                            <Text style={styles.PlanStyles}>Exclusive plan</Text>
                            <Text style={styles.SubPlanStyles}>$20/Month</Text>
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
                    <View style={styles.PlanTypes}>
                        <View style={styles.Tick}>
                            <Image source={require('../../../Assets/images/Profile/MyPlan/Tick.png')} />
                        </View>
                        <Text style={styles.LastPlanText}>Lorem ipsum dolor sit amet</Text>

                    </View>


                </ImageBackground>
              
            </ScrollView>
            <Button onPress={()=>navigation.navigate('SubcriptionPlan')} marginTop={'10%'} title={'Change Plan'} />

        </View>
    )
}

