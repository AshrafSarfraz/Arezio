import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLOR, FONT } from '../../data/StyleGuides';

export default function Button({ title ,marginTop,onPress,ButtonContainer,ButtonText,disable,marginBottom}) {
  return (
    <TouchableOpacity style={[styles.buttonContainer,{marginTop:marginTop}]} onPress={onPress}>
    <Text style={{fontSize:16,fontFamily:FONT.Urbanist_SemiBold,color:COLOR.white}}>{title}</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height:58,width:'90%',
    backgroundColor:COLOR.primary,
    alignSelf:'center',
    marginTop:'45%',alignItems:'center',
    justifyContent:'center',borderRadius:10
  },
  buttonText: {
    fontSize: 16,
    color: COLOR.white,
    fontFamily: FONT.Urbanist_Medium,
  },
});
