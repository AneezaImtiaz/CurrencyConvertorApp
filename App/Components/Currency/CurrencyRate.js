import React, { Component } from 'react'
import { TextInput, Text, Image, View } from 'react-native'
import { AlertMessageWithHandler, showAlert } from '../Controls/AlertHandler'
import CurrencyActions from '../../Redux/CurrencyRedux'
import ModalSelector from 'react-native-modal-selector'
import { getCurrencyData } from '../Controls/CurrencyData'// currency data for dropdown
import styles from '../Styles/CurrencyStyles' // currency screen styles
import CustomHeader from '../Controls/Header'
import { Messages } from '../../Helpers/AppConstants'
import Loader from '../Controls/Loader'
import { connect } from 'react-redux'
import { Images, Colors } from '../../Themes'

const { currency } = Messages

class CurrencyRate extends Component {

	constructor (props) {
		super(props)
		this.state={ 
			textInputValue: null,
			data: null,
			isFetching: false
		}
	}	

	getRate = (currency) => {
		if(currency && currency !== null){
			this.props.getCurrencyRate(currency)
		}
	}

	static getDerivedStateFromProps (props, state) {
		if (props.isFetching !== state.isFetching) {
		  return {
			isFetching: props.isFetching,
			results: props.results,
			error: props.error,
			errorMsg: props.errorMsg
		   }
		}
	  return null
	}

	componentDidUpdate (prevProps) {
		let states = {}
		if (prevProps.isFetching !== this.props.isFetching) {

		  const {isFetching, error, errorMsg, results} = this.props
		  states.isFetching = isFetching
	
		  if (!isFetching) {
			if (results) {
			  states.data = results.data
			  if(results.data === null)
			  showAlert({ title: 'Alert!', message: currency.emptyMsg },
			  { title: 'Cancel' }, { title: 'Ok' }
			)
			} 
			else if (error && errorMsg && errorMsg !== '') {
			  if (!this.state.alertPresent) {
				AlertMessageWithHandler(errorMsg, () => { this.handleError() })
			  }
			}
		  }
		  this.setState(states)
		}
	  }

  render () {
	let { navigation } = this.props
	
    return (

      <View style={styles.mainContainer}>
	    
		<CustomHeader navigation={navigation} title={currency.title} />
		
		<View style={styles.innerContainer}>

			<View style={styles.rateContainer}>
				<TextInput
                 style={styles.searchText}
			 	 placeholderTextColor={Colors.placeholderGray}
				 maxLength={3}
				 placeholder={currency.hintText}
				 onChangeText={(value) => {this.setState({textInputValue: value}); if(value === '') this.setState({data: null})}}
				 onSubmitEditing={(e) => this.getRate(e.nativeEvent.text)}
                 value={this.state.textInputValue}/>
		    
				<ModalSelector
                 data={getCurrencyData()}
                 initValue={''}
                 supportedOrientations={['portrait']}
              	 accessible
              	 style={styles.modelContainer}
              	 scrollViewAccessibilityLabel={'Scrollable options'}
			  	 cancelButtonAccessibilityLabel={'Cancel Button'}
			  	 onChange={option => {this.setState({textInputValue: option.label}, () => {this.getRate(option.label)})}}>

					   <Image style={styles.arrowDown} 
					   resizeMode={'contain'} source={Images.arrowDownIcon} />
       
				</ModalSelector>
			</View>

			{this.state.data && this.state.data !== null && 

				<View style={styles.dataContainer}>

					<View style={styles.currencyContainer}>
						<Text style={[styles.text, { fontWeight:'500'}]}>{currency.currency}</Text>
						<Text style={styles.text}>{this.state.data.currency}</Text>
					</View>

					<View style={{flexDirection:'row',  width:'100%', marginTop:30,   borderRadius:5, height:58, backgroundColor:'white'}}>
						<Text style={[styles.text, { fontWeight:'500'}]}>{currency.rate}</Text>
						<Text style={styles.text}>{this.state.data.value}</Text>
					</View>

				</View>
			}

		</View>
	
	{this.state.isFetching && ( <Loader isLoading={this.props.fetching} /> )}
    
	</View>
    )
  }
}

const mapStateToProps = (state, props) => {
	return {
	  isFetching: state.currency.fetching,
	  errorMsg: state.currency.errorMsg,
	  error: state.currency.error,
	  results: state.currency.results,
	}
}
  
const mapDispatchToProps = dispatch => ({
	getCurrencyRate: (currency) => dispatch(CurrencyActions.getCurrencyRateRequest(currency))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(CurrencyRate)
  
