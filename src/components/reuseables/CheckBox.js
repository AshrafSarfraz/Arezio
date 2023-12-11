import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

const CustomCheckbox = ({onPress}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
  <View style={{flexDirection:'row',alignItems:'center',justifyContent:"space-between",marginHorizontal:"5%",marginTop:'2%'}}>
      <TouchableOpacity onPress={handleToggleCheckbox} style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity
      style={[styles.checkboxContainer, isChecked && styles.checkedCheckbox]}
      onPress={handleToggleCheckbox}
    >
      {isChecked && <Text style={styles.checkmark}>✓</Text>}
      
    </TouchableOpacity>
    <Text style={{fontSize:14,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,marginLeft:'5%'}}>Remember me</Text>

      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
    <Text style={{fontSize:12,fontFamily:FONT.Urbanist_Medium,color:COLOR.black,marginLeft:'3%'}}>Forgot Password</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: COLOR.primary,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',

  },
  checkedCheckbox: {
    backgroundColor:COLOR.primary, // Change the background color when checked
    borderWidth:0
    
  },
  checkmark: {
    color: '#fff', // Change the checkmark color
    fontSize: 16,
  },
});

export default CustomCheckbox;
