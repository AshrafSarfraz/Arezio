import React, { memo } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';


export default function Input({ placeholder, keyboardType, onChange, value, addLeft, addRight, style, secureText, onFocus, onBlur, textStyle, placeholderColor, onRightPress }) {
  return (
    <View style={[styles.InputStyle, style]}>
    {addLeft}
    <TextInput
        style={[styles.Input, textStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor ? placeholderColor : COLOR.regentGrey}
        keyboardType={keyboardType}
        onChangeText={x => onChange && onChange(x)}
        value={value}
        secureTextEntry={secureText}
        onFocus={onFocus}
        autoCapitalize="none"
        onBlur={onBlur} />
    {<TouchableOpacity onPress={onRightPress}>
        {addRight}
    </TouchableOpacity>}
</View>
  )
}


const styles = StyleSheet.create({
    InputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '92%',
        borderRadius: 4,
        alignSelf: 'center',
        paddingHorizontal: '3.5%',
        backgroundColor: COLOR.grey_03,
        marginVertical: '2.5%',
        height:51,
        borderRadius:12
    },
    Input: {
        flex: 1,
        fontSize: 15,
        color: COLOR.black,
    fontSize:14,
    fontFamily:FONT.Urbanist_Medium,
    paddingLeft:15
    },

});