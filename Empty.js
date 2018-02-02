import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image,
         TouchableHighlight, TouchableOpacity} from 'react-native';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import stylesS from './Search.js';

export default class Empty extends React.Component {
	
	render()
	{
		return(
			<View>
				<TouchableOpacity activeOpacity={0.3}  
					onPress={() => this.props.navigation.goBack()} 
					style={{marginTop:40,paddingLeft:10}}
					>
					<Icon3
						name='keyboard-arrow-left'
						color='#1da1f2'
						size={35}
					/>
				</TouchableOpacity>
				

				<View style={stylesE.Center}  >
					<Text style={stylesE.NoticeText} > Nothing Here ...</Text>
				</View>
			</View>

		);
	}
}

const stylesE = StyleSheet.create({
	Center:{
		justifyContent:'center',
		alignItems:'center',
		flex:1,
		paddingTop:'50%'
	},
	NoticeText:{
		color:'grey',
		fontSize:20,
		fontWeight:'400'
	}

});

AppRegistry.registerComponent('Empty', () => Empty);