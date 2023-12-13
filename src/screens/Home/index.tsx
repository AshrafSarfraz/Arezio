import { View, Text, Image, FlatList, ImageBackground ,ScrollView} from 'react-native'
import React from 'react'
import { COLOR, FONT } from '../../data/StyleGuides'
import { styles } from './styles'
import BotttomHeight from '../../components/reuseables/BotttomHeight';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home({}) {
const navigation = useNavigation()

 
      const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>navigation.navigate('UserDetails')} style={styles.box}>
          <Image style={styles.image} source={item.imageUrl } />
          <View style={styles.rowContainer}>
          <Text style={styles.text}>{item.text}</Text>
            <Image style={styles.imagecake} source={require('../../Assets/images/Home/cake.png')} />
          </View>
          <Image style={styles.imagedate} source={require('../../Assets/images/Home/date.png')} />

        </TouchableOpacity>
      );
    

      const renderItem2 = ({ item }) => (
        <View style={styles.box2}>
       <Image resizeMode='contain' style={styles.position} source={item.position}/>
<View style={{flexDirection:'row'}}>
<Image style={styles.imageman} source={item.imageUrl } />
<View>
<Text style={styles.text}>{item.text}</Text>
<Image style={styles.imagedate} source={require('../../Assets/images/Home/date.png')} />

</View>
    
</View>



        </View>
      );



      const renderItem3 = ({ item }) => (
       <View>
<ImageBackground
      source={require('../../Assets/images/Home/Card.png')}
      style={styles.imageBackground}
    >
      <View style={styles.cardContentContainer}>
        <Image style={styles.boyImage} source={require('../../Assets/images/Home/boy.png')} />
        <View style={styles.textContainer2}>
          <Text style={styles.text2}>Dennis Reynolds</Text>
          <Text style={styles.text2}>2 hours ago</Text>
        </View>
        <Image
          resizeMode='contain'
          style={styles.dotsImage}
          source={require('../../Assets/images/Home/dots.png')}
        />
      </View>
    </ImageBackground>
<Text style={{fontSize:14,color:COLOR.black,marginLeft:'5%',marginTop:'2%'}}>Amidst the breathtaking serenity of this picturesque hill, nature joins us in celebrating..See  more</Text>

       </View>
      );
  return (
    <View style={{flex: 1,backgroundColor:COLOR.white}}>
<ScrollView>


<View style={styles.headercontainer}>
      <Image style={styles.logo} source={require('../../Assets/images/Forgot/logo.png')} />
      <View>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.usernameText}>Tony</Text>
      </View>
      <View style={styles.textContainer}>
        <Image style={[styles.icon, styles.searchIcon]} source={require('../../Assets/images/Home/bell.png')} />
        <Image style={styles.icon} source={require('../../Assets/images/Home/search.png')} />
        <Image style={[styles.icon, styles.plusIcon]} source={require('../../Assets/images/Home/plus.png')} />
      </View>
    </View>

    <View style={styles.birthdayContainer}>
      <Text style={styles.birthdayTitle}>Today’s Birthday!</Text>
      <Text style={styles.viewAllText}>View All</Text>
    </View>

   <View>
   <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginTop:'5%'}}
      />
   </View>
<Image style={styles.line} source={require('../../Assets/images/Home/line.png')}/>
<Text style={styles.earner}>Top Earners</Text>

<View>
<FlatList
        data={data2}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={renderItem2}
      
        contentContainerStyle={{marginTop:'5%'}}
        showsHorizontalScrollIndicator={false}
      />
</View>
<Image style={styles.line} source={require('../../Assets/images/Home/line.png')}/>




<View>
<FlatList
        data={data2}
        keyExtractor={(item) => item.id}
        renderItem={renderItem3}
        contentContainerStyle={{marginTop:'5%'}}
      />
</View>
<View style={{height:150}}/>
</ScrollView>

    </View>
  )
}


const data = [
    { id: '1', text: 'Ayla Fergusan', imageUrl: require('../../Assets/images/Home/girldp.png') },
    { id: '2', text: 'Ayla Fergusan', imageUrl: require('../../Assets/images/Home/girldp.png')},
    { id: '3', text: 'Ayla Fergusan', imageUrl: require('../../Assets/images/Home/girldp.png')},

    // Add more items as needed
  ];


  const data2 = [
    { id: '1', text: 'Mark Farais', imageUrl: require('../../Assets/images/Home/man.png'),position: require('../../Assets/images/Home/1st.png') },
    { id: '2', text: 'Mark Farais', imageUrl: require('../../Assets/images/Home/man.png'),position: require('../../Assets/images/Home/2nd.png')},
    // Add more items as needed
  ];

