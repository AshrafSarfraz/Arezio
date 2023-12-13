import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLOR, FONT } from '../data/StyleGuides';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator

            screenOptions={{ headerShown: false, tabBarLabelStyle: { display: 'none' }, tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: 'absolute',
            height:70,
                elevation: 0,
                backgroundColor: COLOR.primary,
                borderTopColor: 'transparent',
              borderRadius:20,
                bottom:20,
                marginHorizontal:'5%'
            }
            
            }}>

            <Tab.Screen
                name={'Home'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/Home/Home.png') : require('../Assets/images/Home/homegrey.png') }
                                style={styles.tabBarIcon}
                            />
                            <Text style={[styles.title,{color:focused ? COLOR.white : COLOR.grey, fontFamily: focused ? FONT.Urbanist_Bold :FONT.Urbanist_Medium }]}>Home</Text>
                        </View>
                    ),
                }}
            />

<Tab.Screen
                name={'Birthday'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/Home/Calendar.png') : require('../Assets/images/Home/Calendargrey.png') }
                                style={styles.tabBarIcon}
                            />
                            <Text style={[styles.title,{color:focused ? COLOR.white : COLOR.grey, fontFamily: focused ? FONT.Urbanist_Bold :FONT.Urbanist_Medium }]}>Birthdays</Text>
                        </View>
                    ),
                }}
            />


<Tab.Screen
                name={'Reel'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/Home/video-vertical.png') : require('../Assets/images/Home/videoverticalgrey.png') }
                                style={styles.tabBarIcon}
                            />
                            <Text style={[styles.title,{color:focused ? COLOR.white : COLOR.grey, fontFamily: focused ? FONT.Urbanist_Bold :FONT.Urbanist_Medium }]}>Reels</Text>
                        </View>
                    ),
                }}
            />

<Tab.Screen
                name={'Chats'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/Home/Chat.png') : require('../Assets/images/Home/Chatrey.png') }
                                style={styles.tabBarIcon}
                            />
                            <Text style={[styles.title,{color:focused ? COLOR.white : COLOR.grey, fontFamily: focused ? FONT.Urbanist_Bold :FONT.Urbanist_Medium }]}>Chats</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'a'}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/images/Home/Profile.png') : require('../Assets/images/Home/Profilegrey.png')}
                                style={styles.tabBarHomeIcon} />
                            <Text style={[styles.title,{color:focused ? COLOR.white : COLOR.grey, fontFamily: focused ? FONT.Urbanist_Bold :FONT.Urbanist_Medium }]}>Profile</Text>


                        </View>
                    ),
                }}
            />

        
            
        </Tab.Navigator >
    )
}

export default TabNavigation

const styles = StyleSheet.create({
    tabBarIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    tabBarIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    tabBarHomeIcon: {
        height: 20,
        width: 26,
        resizeMode: 'contain'
    },
    activeTabBar: {
        position: 'absolute',
        top: 25,
        left: 0,
        right: 0,
        height: 3,
        backgroundColor: COLOR.primary,
    },title:{
        marginTop:'10%',fontSize:10,fontFamily:FONT.Urbanist_Medium
    }
})



