import React from 'react';
import { View, Text, ImageBackground, StatusBar, Image, StyleSheet, FlatList,ScrollView } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';
import BotttomHeight from '../../components/reuseables/BotttomHeight';


const DATA = [
  { id: '1', title1: 'Masi Ramezanzade', title2: 'Hey, how’s it goin?', imageSource: require('../../Assets/images/Chats/1.png') },
  { id: '1', title1: 'Jakob Curtis', title2: 'Yo, are you going to the Jake’s wedding?', imageSource: require('../../Assets/images/Chats/2.png') },
  { id: '1', title1: 'Abram Levin', title2: 'Amir said we’d be staying over for a while... but ...', imageSource: require('../../Assets/images/Chats/3.png') },
  { id: '1', title1: 'Marilyn Herwitz', title2: 'hey, i got new memes for you', imageSource: require('../../Assets/images/Chats/1.png') },
  { id: '1', title1: 'Desirae Saris', title2: 'GoT really took a nose dive huh', imageSource: require('../../Assets/images/Chats/2.png') },

];

const Item = ({ title1, title2, imageSource }) => (
  <View style={styles.itemContainer}>
    <View style={styles.box}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.textContainer}>
        <Text style={styles.title1}>{title1}</Text>
        <Text style={styles.title2}>{title2}</Text>
      </View>
    </View>
  </View>
);


export default function Chat() {
  return (
    <View style={styles.container}>
      <ScrollView>

           <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../Assets/images/Reels/logo.png')} />
            <Text style={styles.headerText}>Chats</Text>
          </View>

          <FlatList
          contentContainerStyle={{marginTop:'5%'}}
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item title1={item.title1} title2={item.title2} imageSource={item.imageSource} />}
    />
      </ScrollView>
      <BotttomHeight/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLOR.white
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
    marginLeft:'5%',
    marginTop:'5%'
  },
  logo: {
    height: 41,
    width: 47,
  },
  headerText: {
    fontSize: 20,
    color: COLOR.black,
    marginLeft: '2%',
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
  itemContainer: {
    padding: 10,
    marginTop:'1%'
  },
  box: {
    height: 103,
    width: 335,
    backgroundColor: '#EEF9FF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius:10
  },
  image: {
    height: 62,
    width: 62,
  },
  textContainer: {
    marginLeft: '8%',
  },
  title1:{
    fontSize:13,
    fontFamily:FONT.Poppins_Regular,
    color:COLOR.black
  },
  title2:{
    fontSize:13,
    fontFamily:FONT.Poppins_Regular,
    color:'#656565',
    marginTop:"5%",
    width:'60%'
  }
});