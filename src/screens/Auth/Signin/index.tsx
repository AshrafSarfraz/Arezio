import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { COLOR, FONT } from '../../../data/StyleGuides'
import Input from '../../../components/reuseables/Input'
import CustomCheckbox from '../../../components/reuseables/CheckBox'
import Button from '../../../components/reuseables/Button'
import { styles } from './styles'

export default function Signin({navigation}) {
  const [NextDoorid, setNextDoorid] = useState(null)

  const [values, setValues] = useState({
    passFocus: false,
    idFocus: false,
})
const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
const [password, setpassword] = useState(null)
const togglePassword = () => {
  setPasswordVisible(!passwordVisible)
}
const handleChange = (name: string, value: any) => { setValues((prevState) => ({ ...prevState, [name]: value })) };

  return (
    <View style={styles.Container}>
      <ScrollView>

   <View style={styles.container}>
  <Image style={styles.image} source={require('../../../Assets/images/Signin/Arezio.png')} />
  <Text style={styles.welcomeText}>Welcome Back!</Text>
  <Text style={styles.signInText}>Sign in with your account</Text>
  <View style={styles.inputContainer}>
    <Input
      onChange={(text) => setNextDoorid(text)}
      placeholder={'Luke.Skywalker@domain.com'}
      placeholderColor={values.idFocus ? COLOR.black : COLOR.grey_1}
      style={[styles.input, values.idFocus && styles.focusedInput]}
      onFocus={() => handleChange('idFocus', true)}
      onBlur={() => handleChange('idFocus', false)}
      addLeft={<Image source={require('../../../Assets/images/Signin/Message.png')}
       style={[styles.leftIcon,{tintColor:values.idFocus ? COLOR.black : COLOR.grey_1 }]} />}
    />

    <Input
onChange={(text) => setpassword(text)}
placeholder={'Password'}
placeholderColor={values.passFocus ? COLOR.black : COLOR.grey_1} 
style={[styles.input, values.passFocus && styles.focusedInput]}
onFocus={() => handleChange('passFocus', true)}
onBlur={() => handleChange('passFocus', false)}
addLeft={<Image source={require('../../../Assets/images/Signin/Lock.png')}  style={[styles.passwordIcon,{tintColor:values.passFocus ? COLOR.black : COLOR.grey_1 }]} resizeMode='contain' />}
secureText={!passwordVisible}
onRightPress={togglePassword}
addRight={<Image source={passwordVisible ? require('../../../Assets/images/Signin/Hide.png') : require('../../../Assets/images/Signin/show.png')} style={styles.passwordIcon} resizeMode='contain' />}
/>
  </View>
</View>
<CustomCheckbox onPress={()=>navigation.navigate('ForgotPassword')} />
<Button onPress={()=>navigation.navigate('TabNavigator')}  marginTop={'10%'} title={'Sign In'}/>
<View style={styles.footerContainer}>
  <Text style={styles.footerText}>Don’t have an account?</Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Signup')} style={styles.footerLinkContainer}>
    <Text style={styles.footerLink}>Sign Up</Text>
  </TouchableOpacity>
</View>
</ScrollView>

    </View>
  )
}