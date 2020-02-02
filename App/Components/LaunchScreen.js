import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/LaunchScreenStyles'
import { Messages } from '../Helpers/AppConstants'

const { application } = Messages

export default class LaunchScreen extends Component {

  render () {

    return (

      <View style={styles.mainContainer}>

        <ScrollView style={styles.container}>

          <View style={styles.centered}>
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <View style={styles.section} >
			  <Text style={styles.title}>{application.title}</Text>
			  <Text style={styles.sectionText}>{application.description}</Text>
          </View>

		  <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('CurrencyRate')}>
              <Text style={styles.buttonText}>{application.continue}</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    )
  }
}
