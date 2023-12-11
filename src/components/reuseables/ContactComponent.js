import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import { SCREEN } from '../../data/enums';

export default function ContactComponent() {
    const navigation = useNavigation()
  return (
    <View>
      <Text style={styles.label}>
        Full Name
      </Text>
      <TextInput
        placeholderTextColor={COLOR.grey_1}
        placeholder='Full Name'
        style={styles.input}
      />

      <Text style={styles.label}>
        Subject
      </Text>
      <TextInput
        placeholderTextColor={COLOR.grey_1}
        placeholder='Subject'
        style={styles.input}
      />


<Text style={styles.label}>
Write what you want
      </Text>
      <TextInput
      textAlignVertical='top'
      multiline
      numberOfLines={5}
        placeholderTextColor={COLOR.grey_1}
        placeholder='type here...'
        style={styles.inputLarge}
      />

      <Button marginTop={'15%'} title={'Continue'}/>
      <Button onPress={()=>navigation.navigate(SCREEN.LiveChat)} marginTop={'5%'} marginBottom={'10%'} title={'Live Help'}/>

    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Medium,
    color: COLOR.black,
    marginLeft: '7%',
    marginTop: '6%',
  },
  input: {
    height: 48,
    backgroundColor: COLOR.grey,
    marginHorizontal: '6%',
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
  },
  inputLarge: {
    height: 134,
    backgroundColor: COLOR.grey,
    marginHorizontal: '6%',
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
  },
});
