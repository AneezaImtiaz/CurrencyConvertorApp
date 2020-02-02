import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
	card: {
		justifyContent: 'flex-end',
		backgroundColor: Colors.black,
		borderBottomColor: Colors.borderColor,
		borderBottomWidth: 0.4,
		shadowColor: Colors.white,
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		height: '11%'
	  },
	  headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginBottom: '2%'
	  },
	  headerImageArea: {
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: '2.5%'
	  },
	  headerImage: {
		width: 18,
		height: 18,
		justifyContent: 'center',
		paddingLeft: '4%'
	  },
	  headerText: {
		...Fonts.style.h5,
		fontWeight: '400',
		color: Colors.white
	  }
})
