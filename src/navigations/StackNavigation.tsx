import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import OnBoarding from '../screens/OnBoarding';
import Signin from '../screens/Auth/Signin';
import SignUp from '../screens/Auth/SignUp';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ForgotPasswordOtp from '../screens/Auth/ForgotPasswordOtp';
import ForgotPasswordChange from '../screens/Auth/ForgotPassword';
import ForgotPasswordC from '../screens/Auth/ForgotPasswordC';
import TabNavigator from './TabNavigation';
import { ProfileSetup } from '../screens/ProfileSetup';
import { Account } from '../screens/Account';
import UserDetails from '../screens/UserDetails';
import SplashWhite from '../screens/SplashWhite';
import { Aboutus } from '../screens/Account/Aboutus';
import { MyWallet } from '../screens/Account/MyWallet';
import { ReferToEarn } from '../screens/Account/ReferToEarn';
import { Language } from '../screens/Account/Language';
import { WithDraw } from '../screens/Account/WithDraw';
import { SubcriptionPlan } from '../screens/Account/Subscription';

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={screenOptionStyle}
             initialRouteName={'SplashWhite'}>
                <Stack.Screen name={'Splash'} component={Splash} />
                <Stack.Screen name={'SplashWhite'} component={SplashWhite} />
                <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
                <Stack.Screen name={'Signin'} component={Signin} />
                <Stack.Screen name={'Signup'} component={SignUp} />
                <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
                <Stack.Screen name={'ForgotPasswordOtp'} component={ForgotPasswordOtp} />
                <Stack.Screen name={'ForgotPasswordC'} component={ForgotPasswordC} />
                <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
                <Stack.Screen name={'ProfileSetup'} component={ProfileSetup} />
                <Stack.Screen name={'Account'} component={Account} />
                <Stack.Screen name={'UserDetails'} component={UserDetails} />
                <Stack.Screen name={'Aboutus'} component={Aboutus} />
                <Stack.Screen name={'MyWallet'} component={MyWallet} />
                <Stack.Screen name={'ReferToEarn'} component={ReferToEarn} />
                <Stack.Screen name={'Language'} component={Language} />
                <Stack.Screen name={'WithDraw'} component={WithDraw} />
                <Stack.Screen name={'SubcriptionPlan'} component={SubcriptionPlan} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;
