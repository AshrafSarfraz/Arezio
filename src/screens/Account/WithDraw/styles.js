// SplashStyles.js
import { StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../../data/StyleGuides';


export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
      },
      image: {
        height: 59,
        width: 234,
      },
      welcomeText: {
        fontSize: 24,
        fontFamily: FONT.Urbanist_SemiBold,
        color: COLOR.black,
        marginTop: '5%',
      },
      signInText: {
        fontSize: 14,
        fontFamily: FONT.Urbanist_Medium,
        color: COLOR.black,
        marginTop: '2%',
      },
      inputContainer: {
        marginTop: '15%',
      },
      input: {
        borderColor: COLOR.black,
        borderWidth: 0,
      },
      focusedInput: {
        borderWidth: 1.5,
        borderColor:COLOR.primary
      },
      Container:{
        flex:1
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '5%',
        marginLeft: '5%',
      },
      backIcon: {
        height:28,
        width: 28,
      },
      // modal style 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  contentContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    height: "30%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Option: {
marginTop:15,
fontSize:24,
fontWeight:"600",
    width: "80%",
    textAlign: "center",
    padding: 10,
    color: COLOR.black
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%',
    marginLeft: '5%',
  },
  backButton: {
    // Style for the back button
  },
  backIcon: {
    height: 28,
    width: 28,
  },
  headerText: {
    fontSize: 20,
    fontFamily: FONT.Urbanist_SemiBold,
    color: COLOR.black,
    marginLeft: '5%',
  },
});
