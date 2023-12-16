import { View, Text, ScrollView, TouchableOpacity, Image, Modal, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './styles'
import Input from '../../../components/reuseables/Input'
import { COLOR, FONT } from '../../../data/StyleGuides'
import Button from '../../../components/reuseables/Button'
import DocumentPicker from 'react-native-document-picker';



export const EditProfile = ({navigation}) => {
 
    const [singleFile, setSingleFile] = useState('');
  const [cont,setcont] = useState(false);
  
  
 
  
    
    const selectOneFile = async () => {
     
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
      });
  
        if (res.length > 0) {
          console.log('res : ' + JSON.stringify(res));
          console.log('URI : ' + res[0].uri);
          setSingleFile(res[0].uri);
          console.log('Type : ' + res[0].type);
          console.log('File Name : ' + res[0].name);
          console.log('File Size : ' + res[0].size);
        }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          Alert.alert('Canceled', 'File selection was canceled.');
        } else {
          Alert.alert('Error', 'An unknown error occurred: ' + JSON.stringify(err));
          throw err;
        }
      }
      setcont(true)
    };
  

    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image style={styles.backIcon} source={require('../../../Assets/images/Signup/back.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Payment</Text>
                </View>
                <View style={styles.User_Avatar}>
                    <ImageBackground
                        style={{ height: 100, width: 100, margin: 20, marginTop: '8%' }}
                        source={require('../../../Assets/images/Profile/EditProfile/AvatarBackground.png')}>
                       
                        <Image style={{ height: 60, width: 60, marginLeft: 20, marginTop: 15 }} source={require('../../../Assets/images/Profile/EditProfile/Avatar.png')} />
                        <TouchableOpacity style={{ position: "absolute", left: 70, top: 60 }} onPress={selectOneFile}>
                            <Image style={{ height: 30, width: 30 }} source={require('../../../Assets/images/Profile/EditProfile/Edit.png')} />
       
                        
                        </TouchableOpacity>

                    </ImageBackground>
                </View>

                <Input placeholder={'Name'} placeholderColor={COLOR.black}
                    addLeft={<Image source={require('../../../Assets/images/Signup/person.png')} style={{ height: 30, width: 30 }} />}
                />
                <Input placeholder={'Luke.Skywalker@domain.com'} placeholderColor={COLOR.black}
                    addLeft={<Image source={require('../../../Assets/images/Signup/Message.png')} style={{ height: 30, width: 30 }} />}
                />

                <Button onPress={() => navigation.goBack()} marginTop={'20%'} title={'Save'} />
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={{ fontSize: 16, fontFamily: FONT.Urbanist_SemiBold, color: COLOR.primary }}>Change Password</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>

    )
}

