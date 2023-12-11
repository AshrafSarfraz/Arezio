import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../data/StyleGuides';

export default function FaqComponent() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);


  const toggleFirst = () => {
    setFirst(!first);
  };

  const toggleSecond = () => {
    setSecond(!second);
  };


  const toggleThird = () => {
    setThird(!third);
  };


  const toggleFourth = () => {
    setFourth(!fourth);
  };




  return (
    <View>

      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={require('../../Assets/icons/greysearch.png')} />
        <TextInput
          placeholderTextColor={COLOR.searchgrey}
          style={styles.searchInput}
          placeholder='Search'
        />
      </View>

      <TouchableOpacity
        onPress={toggleFirst}
        style={[
          styles.faqContainer,
          { height: first ? 150 : 56 },
        ]}
      >
        <View style={styles.faqHeader}>
          <Text style={styles.faqHeaderText}>How the CHUNKY CHICKEN App works?</Text>
          <Image style={styles.arrowIcon} source={first ? require('../../Assets/icons/uparrow.png') : require('../../Assets/icons/downarrow.png')} />
        </View>
        {first ? (
          <View>
            <Image style={styles.separator} source={require('../../Assets/icons/faqline.png')} />
            <Text style={styles.faqText}>
              Lorem ipsum dolor sit amet consectetur. Convallis vel eget pretium et dignissim commodo lacus nulla.
              Tempor porttitor at tempus vestibulum lectus volutpat facilisis tortor. Aliquet turpis est dictumst justo
              duis diam ultrices. Faucibus nunc sed ultrices suscipit.
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>


      <TouchableOpacity
        onPress={toggleSecond}
        style={[
          styles.faqContainer,
          { height: second ? 150 : 56 },
        ]}
      >
        <View style={styles.faqHeader}>
          <Text style={styles.faqHeaderText}>How can I sell my food on CHUNKY CHICKEN?</Text>
          <Image style={styles.arrowIcon} source={second ? require('../../Assets/icons/uparrow.png') : require('../../Assets/icons/downarrow.png')} />
        </View>
        {second ? (
          <View>
            <Image style={styles.separator} source={require('../../Assets/icons/faqline.png')} />
            <Text style={styles.faqText}>
              Lorem ipsum dolor sit amet consectetur. Convallis vel eget pretium et dignissim commodo lacus nulla.
              Tempor porttitor at tempus vestibulum lectus volutpat facilisis tortor. Aliquet turpis est dictumst justo
              duis diam ultrices. Faucibus nunc sed ultrices suscipit.
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>



      
      <TouchableOpacity
        onPress={toggleThird}
        style={[
          styles.faqContainer,
          { height: third ? 150 : 56 },
        ]}
      >
        <View style={styles.faqHeader}>
          <Text style={styles.faqHeaderText}>How can I swap meals on CHUNKY CHICKEN App?</Text>
          <Image style={styles.arrowIcon} source={third ? require('../../Assets/icons/uparrow.png') : require('../../Assets/icons/downarrow.png')} />
        </View>
        {third ? (
          <View>
            <Image style={styles.separator} source={require('../../Assets/icons/faqline.png')} />
            <Text style={styles.faqText}>
              Lorem ipsum dolor sit amet consectetur. Convallis vel eget pretium et dignissim commodo lacus nulla.
              Tempor porttitor at tempus vestibulum lectus volutpat facilisis tortor. Aliquet turpis est dictumst justo
              duis diam ultrices. Faucibus nunc sed ultrices suscipit.
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>


      <TouchableOpacity
        onPress={toggleFourth}
        style={[
          styles.faqContainer,
          { height: fourth ? 150 : 56 },
        ]}
      >
        <View style={styles.faqHeader}>
          <Text style={styles.faqHeaderText}>How can I get new recipes?</Text>
          <Image style={styles.arrowIcon} source={fourth ? require('../../Assets/icons/uparrow.png') : require('../../Assets/icons/downarrow.png')} />
        </View>
        {fourth ? (
          <View>
            <Image style={styles.separator} source={require('../../Assets/icons/faqline.png')} />
            <Text style={styles.faqText}>
              Lorem ipsum dolor sit amet consectetur. Convallis vel eget pretium et dignissim commodo lacus nulla.
              Tempor porttitor at tempus vestibulum lectus volutpat facilisis tortor. Aliquet turpis est dictumst justo
              duis diam ultrices. Faucibus nunc sed ultrices suscipit.
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 42,
    backgroundColor: COLOR.grey,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '6%',
    marginTop: '8%',
    borderRadius: 8,
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginLeft: '3%',
  },
  searchInput: {
    color: COLOR.black,
    fontSize: 14,
    fontFamily: FONT.Roboto_Regular,
    paddingLeft: 10,
    width: '90%',
  },
  faqContainer: {
    height: 56,
    width: '90%',
    backgroundColor: COLOR.white,
    elevation: 2,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  faqHeaderText: {
    fontSize: 14,
    fontFamily: FONT.Roboto_Medium,
    color: COLOR.black,
    width:'90%'
  },
  arrowIcon: {
    height: 16,
    width: 16,
  },
  separator: {
    height: 1,
    width: 303,
    alignSelf: 'center',
    marginTop: '5%',
  },
  faqText: {
    fontSize: 12,
    fontFamily: FONT.Roboto_Regular,
    marginLeft: '5%',
    width: '90%',
    marginTop: 10,
    color: COLOR.grey_1,
  },
});
