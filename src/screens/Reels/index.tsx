import React from 'react';
import { View, Text, ImageBackground, StatusBar, Image, StyleSheet } from 'react-native';
import { COLOR } from '../../data/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 41,
    width: 47,
  },
  headerText: {
    fontSize: 20,
    color: COLOR.white,
    marginLeft: '8%',
    fontWeight: '500',
  },
  plusIcon: {
    height: 45,
    width: 45,
  },
  playIcon: {
    height: 94,
    width: 94,
    alignSelf: 'center',
    marginTop: '60%',
  },
  iconContainer: {
    marginLeft: 'auto',
    marginRight: '5%',
  },
  icon: {
    height: 25,
    width: 25,
  },
  iconText: {
    fontSize: 14,
    color: COLOR.white,
    marginTop: 5,
    fontWeight: '500',
  },
  pageNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '6%',
    marginTop: '18%',
  },
  avatar: {
    height: 28,
    width: 28,
  },
  pageName: {
    fontSize: 13,
    color: COLOR.white,
    marginTop: 5,
    fontWeight: '500',
    marginLeft: '4%',
  },
  description: {
    fontSize: 10,
    color: COLOR.white,
    marginTop: 10,
    marginLeft: '7%',
    width: '90%',
  },
});

export default function Reels() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.background} source={require('../../Assets/images/Reels/Reels.png')}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../Assets/images/Reels/logo.png')} />
            <Text style={styles.headerText}>Reels</Text>
          </View>
          <Image style={styles.plusIcon} source={require('../../Assets/images/Reels/plus.png')} />
        </View>

        <Image style={styles.playIcon} source={require('../../Assets/images/Reels/play.png')} />

        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Image style={styles.icon} source={require('../../Assets/images/Reels/gift.png')} />
            <Text style={styles.iconText}>Gift</Text>
          </View>

          <View style={[styles.icon, { marginTop: '12%' }]}>
            <Image style={styles.icon} source={require('../../Assets/images/Home/whiteheart.png')} />
            <Text style={styles.iconText}>5.2K</Text>
          </View>

          <View style={[styles.icon, { marginTop: '12%' }]}>
            <Image style={styles.icon} source={require('../../Assets/images/Home/messages.png')} />
            <Text style={styles.iconText}>1.1K</Text>
          </View>
        </View>

        <View style={styles.pageNameContainer}>
          <Image style={styles.avatar} source={require('../../Assets/images/Reels/avatar.png')} />
          <Text style={styles.pageName}>Page name</Text>
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor numbas sator... more
        </Text>
      </ImageBackground>
    </View>
  );
}
