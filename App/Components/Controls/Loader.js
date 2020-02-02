import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Colors } from '../../Themes'
import styles from '../Styles/LoaderStyle'

const Loader = ({isLoading, top, style}) => (
  <View style={[styles.container, style]}>
    <ActivityIndicator
      animating={isLoading}
      color={Colors.loader}
      size={'large'} />
  </View>
)

export default Loader
