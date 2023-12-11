import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as screens from '../screens';
import { COLOR } from '../data/StyleGuides';
import { SCREEN } from '../data/enums';


const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator

            screenOptions={{ headerShown: false, tabBarLabelStyle: { display: 'none' }, tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: 'absolute',
            height:70,
                elevation: 0,
                backgroundColor: COLOR.white,
                borderTopColor: 'transparent',
                borderTopLeftRadius:40,
                borderTopRightRadius:40
            }
            
            }}>

            <Tab.Screen
                name={SCREEN.Home}
                component={screens.Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/icons/Home.png') : require('../Assets/icons/whiteHome.png') }
                                style={styles.tabBarIcon}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'a'}
                component={screens.RedeemRewards}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/icons/reward.png') : require('../Assets/icons/whitereward.png')}
                                style={styles.tabBarHomeIcon} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'b'}
                component={screens.MyOrders}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image source={focused ? require('../Assets/icons/cart.png') : require('../Assets/icons/whitecart.png')}
                                style={styles.tabBarIcon} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name={'Account'}
                component={screens.Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabBarIconContainer}>
                            <Image
                                source={focused ? require('../Assets/icons/reduser.png') : require('../Assets/icons/User.png')} style={styles.tabBarIcon}
                            />
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
    },
})



