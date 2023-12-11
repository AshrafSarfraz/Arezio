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

const Stack = createNativeStackNavigator()

const screenOptionStyle = {
    headerShown: false,
}

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName={'Splash'}>
                <Stack.Screen name={'Splash'} component={Splash} />
                <Stack.Screen name={'OnBoarding'} component={OnBoarding} />
                <Stack.Screen name={'Signin'} component={Signin} />
                <Stack.Screen name={'Signup'} component={SignUp} />
                <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} />
                <Stack.Screen name={'ForgotPasswordOtp'} component={ForgotPasswordOtp} />
                <Stack.Screen name={'ForgotPasswordC'} component={ForgotPasswordC} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;
