import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({

  ...ApplicationStyles.screen, // application styles

  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
	alignItems: 'center',
	marginTop:'8%'
  },
  title: {
	...Fonts.style.h4,
	alignSelf:'center', 
	fontWeight:'700', 
	color: Colors.black
  },
  button: {
    backgroundColor: Colors.black,
	justifyContent: 'center',
	alignSelf:'center',
    height: 40,
    width: 180,
    borderRadius: Metrics.containerRadius
  },
  buttonText: {
	...Fonts.style.normal,
    alignSelf: 'center',
    color: Colors.white
  }

})
