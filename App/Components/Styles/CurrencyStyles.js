import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
 
  innerContainer: {
	marginTop: Metrics.section,
	padding:'5%',
	width:'100%', 
	height:'100%',
	alignSelf:'center'
  },
  rateContainer: {
	flexDirection:'row', 
	width:'100%', 
	height:44, 
	borderRadius: Metrics.containerRadius, 
	borderColor: Colors.black, 
	borderWidth:0.7, 
	justifyContent:'space-between'
  },
  searchText: {
	color: Colors.black, 
	width:'85%', 
	marginLeft:'2.5%', 
	...Fonts.style.normal
  },
  modelContainer: {
	width:30, 
	height:24, 
	borderRadius: Metrics.modelRadius, 
	backgroundColor: Colors.black, 
	alignSelf:'center',
	justifyContent: 'center', 
	alignItems:'center', 
	marginRight:'2.5%'
  },
  arrowDown: {
	width:18, 
	height:18, 
	alignSelf:'center'
  },
  dataContainer: {
	height:220, 
	width:'100%',
	marginTop: Metrics.doubleSection,
	justifyContent:'space-between', 
    alignSelf:'center', 
    padding:'10%',  
    borderRadius: Metrics.containerRadius, 
    borderColor: Colors.containerShadow, 
    borderWidth:0.5, 
    backgroundColor: Colors.container, 
  },
  currencyContainer: {
	flexDirection:'row', 
	width:'100%',
	height:58,   
	borderRadius: Metrics.containerRadius,  
	backgroundColor: Colors.white
  },
 text: {
	color: Colors.black, 
	alignSelf:'center', 
	...Fonts.style.text
  }
})
