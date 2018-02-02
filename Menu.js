import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image,
         TouchableHighlight, TouchableOpacity, ScrollView,
         Picker, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Menu extends React.Component {
	
	constructor()
	{
		super();
		this.state={
			UserName:'User_Name',
			UserNameLink:'@User_Name_Link',
			UserPicLink:require('./Images/profile-picture-none.png'),
			Following:690,
			Followers:653,
			data1:[
				{
					Title:'Profile',
					Icon:'user'
				},
				{
					Title:'Lists',
					Icon:'th-list'
				},
				{
					Title:'Moments',
					Icon:'flash'
				},
				{
					Title:'Highlights',
					Icon:'bullseye'
				}
			],
			data2:[
				{
					Title:'Settings and Privacy'
				},
				{
					Title:'Help Center'
				}
			]
		}
	}

	render()
	{
		return(

			<ScrollView>
		   
		    	<View id='MenuHeader' style={{marginLeft:20,marginTop:10}} >
			      	<View>
			      		<Image
			      			source={this.state.UserPicLink}
			      			style={stylesM.TopBarImg}
			      		/>
			      	</View>

			      	<View style={stylesM.MenuTitle} >
			      		<View >
			      			<Text style={{fontWeight:'bold',fontSize:25}}  >{this.state.UserName}</Text>		
			      			<Text style={{color:'gray',fontSize:15,}} >{this.state.UserNameLink}</Text>
			      		</View>
			      		
			      		<Picker style={{color:'#1da1f2',width:50,marginLeft:120,marginBottom:20}} mode='dropdown'>
			      			<Picker.Item label='Option1'/>
			      			<Picker.Item label='Option2'/>
			      		</Picker>
			      	</View>


			      	<View style={{flexDirection:'row'}} >
			      		<Text style={{fontWeight:'bold',fontSize:15}}>{this.state.Following} </Text> 
			      		<Text style={{color:'grey',fontSize:15}}>Following</Text>

			      		<Text  style={{paddingLeft:20,fontWeight:'bold',fontSize:15}}>{this.state.Followers} </Text> 
			      		<Text style={{color:'grey',fontSize:15}}>Followers</Text>
			      	</View>
		    	</View>
		   		
		   		<FlatList
		   			style={{marginTop:25,borderTopWidth:0.5,borderTopColor:'lightgrey'}}
		   			data={this.state.data1}
		   			renderItem={( {item} ) => {
		   				return(
			   				<TouchableOpacity activeOpacity={0.53} style={stylesM.SideMenuItem} onPress={() => this.props.navigation.navigate('Profile')} >
			   					<View style={{width:35,flexDirection:'row',justifyContent:'center'}} >
				   					<Icon 
				   						name={item.Icon}
				   						size={30}
				   						color='#1da1f2'
				   					/>
			   					</View>
			   					<Text style={stylesM.ListText} > {item.Title} </Text>
			   					
			   				</TouchableOpacity>
		   				);
		   			}}
		   			keyExtractor={item => item.Title}
		   		/>

		   		<FlatList
		   			style={{marginTop:10}}
		   			data={this.state.data2}
		   			renderItem={( {item} ) => {
		   				return(
			   				<TouchableOpacity activeOpacity={0.53} 
			   					style={stylesM.SideMenuItem} 
			   					onPress={() => {this.props.navigation.navigate('Lists')}}
			   				>
			   					
			   					<Text style={{fontSize:20,fontWeight:'400',borderBottomWidth:0.5,borderBottomColor:'gray'}} > {item.Title} </Text>
			   					
			   				</TouchableOpacity>
		   				);
		   			}}
		   			keyExtractor={item => item.Title}
		   		/>


		   		<View id='MenuFooter' style={stylesM.MenuFooter}>
		   			<TouchableOpacity activeOpacity={0.53} style={{marginLeft:20}}>
			   			<Icon
			   				name='moon-o'
			   				size={25}
			   				color='#1da1f2'

			   			/>
		   			</TouchableOpacity>

		   			<TouchableOpacity activeOpacity={0.53} style={{marginLeft:'74%'}}>
			   			<Icon
			   				name='qrcode'
			   				size={25}
			   				color='#1da1f2'

			   			/>
		   			</TouchableOpacity>

		   		</View>

		  	</ScrollView>
		);	
	}
}

const stylesM = StyleSheet.create({
	container:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	TopBarImg:{
	    height:60,
	    width:60,
	    //marginLeft:20,
	    //marginBottom:0,
	    marginTop:30
  	},
  	MenuTitle:{
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		paddingBottom:10
  	},
  	MenuFooter:{
  		marginTop:50,
  		width:'100%',
  		height:40,
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		borderTopWidth:0.5,
  		borderTopColor:'gray'
  		//backgroundColor:'red'
  	},
  	SideMenuItem:{
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		paddingLeft:30,
  		padding:15
  	},
  	ListText:{
  		fontSize:20,
  		fontWeight:'400',
  		paddingLeft:20
  	}

});

AppRegistry.registerComponent('Menu',() => Menu);