
import React, { useState, useRef } from "react";
import { Text, View, TextInput, ScrollView } from 'react-native';
import styles from './style';
import CheckoutHeader from "../../../components/reuseables/CheckoutHeader";
import Button from "../../../components/reuseables/Button";
import BotttomHeight from "../../../components/reuseables/BotttomHeight";
import { COLOR } from "../../../data/StyleGuides";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../../data/enums";

const Email = () => {
    const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = useRef(Array(4).fill(null));
  const [showError, setShowError] = useState(false);

  const handleOtpChange = (value, index) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      if (value && index < inputRef.current.length - 1) {
        inputRef.current[index + 1].focus();
      }

      if (newOtp.every((pin) => pin !== '')) {
        setShowError(false);
      } else {
        setShowError(true);
      }

      return newOtp;
    });
  };

  const handleOtpKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <CheckoutHeader title={'Forgot Password'} />
      <ScrollView>
        <Text style={styles.enter}>
          Enter the email address for which you forgot the{'\n'}password. We will send an OTP to the email.
        </Text>
     
        <View style={styles.inputContainer}>
          {otp.map((pin, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRef.current[index] = ref)}
              style={[
                styles.Otp,
                { borderColor: pin ? COLOR.primary : '#FAFAFA',backgroundColor:'#FAFAFA'},
              ]}
              value={pin}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(event) => handleOtpKeyPress(event, index)}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
            />
          ))}
        </View>
       
        <View style={styles.bottomView}>
        <Button title={'Verify'} ButtonContainer={styles.Buttoncontaienr} onPress={()=>navigation.navigate(SCREEN.ForgotPassword)} />
        </View>
        <BotttomHeight />
      </ScrollView>
    </View>
  );
};

export default Email;
