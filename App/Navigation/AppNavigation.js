import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import LaunchScreen from '../Components/LaunchScreen'
import CurrencyRate from '../Components/Currency/CurrencyRate'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({

  LaunchScreen: { screen: LaunchScreen },

  CurrencyRate: { screen: CurrencyRate }

}, {

  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
  
})

export default createAppContainer(PrimaryNav)
