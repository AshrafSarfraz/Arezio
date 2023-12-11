import React from "react";
import {ImageBackground, Text,View,Image, ScrollView} from 'react-native'
import styles from './style'
import CheckoutHeader from "../../../components/reuseables/CheckoutHeader";
import Input from "../../../components/reuseables/Input";
import Button from "../../../components/reuseables/Button";
import BotttomHeight from "../../../components/reuseables/BotttomHeight";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../../data/enums";

const Email = ()=>{
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
          <CheckoutHeader title={'Forgot Password'}/>
          <ScrollView>
         <Text style={styles.enter}>
         Enter the email address for which you forgot the{'\n'}password. We will send an OTP to the email.</Text>
         <Text style={styles.Email}>
         Email Address
         </Text>
         <Input placeholder={'abc@gmail.com'}/>
         <BotttomHeight/>
         <Button title={'Send OTP'} ButtonContainer={styles.Buttoncontaienr} onPress={()=>navigation.navigate(SCREEN.Otp)}/>
         </ScrollView>
    </View>
    )
}

export default Email;