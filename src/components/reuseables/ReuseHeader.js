import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import { useNavigation } from '@react-navigation/native';

const ReuseHeader = ({title,titlestyle}) => {
    const navigation = useNavigation()
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image style={styles.backIcon} source={require('../../Assets/images/Backicon.png')} />
        </TouchableOpacity>
        <Text style={[styles.titleText,titlestyle]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    marginLeft: '5%',
  },
  backIcon: {
    height: 16,
    width: 18,
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONT.Roboto_Bold,
    color: COLOR.black,
    marginLeft: '5%',
  },
});

export default ReuseHeader;
