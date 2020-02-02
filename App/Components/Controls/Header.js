import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import styles from '../Styles/HeaderStyles'
import { Images } from '../../Themes'

const CustomHeader = props => {

  let { title, navigation } = props

  return (
		<View style={styles.card}>
			<View style={styles.headerContainer}>
				<TouchableOpacity style={styles.headerImageArea}
			  	 onPress={() => {navigation.goBack()} }>
				 	<Image style={styles.headerImage} resizeMode={'contain'} source={Images.backArrowIcon} />
				</TouchableOpacity>
				<Text style={styles.headerText}>{title}</Text>
			</View>
		</View>
  )
}

export default CustomHeader
