import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image,
         TouchableHighlight, TouchableOpacity, Keyboard, 
         TouchableWithoutFeedback} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import stylesH from './Home.js';
import  ActivityComponent  from './ActivityComponent.js';
import GLOBAL from './global.js';

export default class Search extends React.Component {
	
	constructor()
	{
		super();
		this.state={
			aFooter:true,
			mFooter:false,
	        loading:false
		}
	}

	onMenuItem(value)
  	{
      //console.log(value);
      switch(value)
      {
        case('all'):
          this.setState({
            aFooter:true,
            mFooter:false
              });
          break;

        case('ment'):
          this.setState({
            mFooter:true,
            aFooter:false
              });
          break; 
      }
      
      
  	}

  	LoadData(value)
  	{
  		let val = value.trim()
  		if(val !== '' && val.length > 0)
		{
	  		this.setState({
	  			loading:true
	  		});
	  		//console.log('Done Type'+this.state.loading);
	  	}
  	}

  	FinishLoadData()
  	{
  		this.setState({
  			loading:false
  		});
  		
  		//console.log('Done Type'+this.state.loading);
  	}

  	componentDidMount()
  	{
  		this.search1.focus();
  	}

	render()
	{	
		return(
				<TouchableWithoutFeedback style={stylesS.Container} onPress={Keyboard.dismiss}>
				<View style={stylesS.Container}>
					<View style={stylesS.SearchView} >
						<TouchableOpacity activeOpacity={0.3}  
							onPress={() => this.props.navigation.goBack()} 
							style={stylesS.BackButton}
							>
							<Icon3
								name='keyboard-arrow-left'
								color='#1da1f2'
								size={35}
							/>
						</TouchableOpacity>

						<SearchBar
							lightTheme
							//round
							 ref={search1 => this.search1 = search1}
							disableFullscreenUI={false}
							data={GLOBAL.data1}
							icon={{color:'#1da1f2'}}
							containerStyle={{width:370}}
							clearIcon={{color:'red'}}
							loadingIcon={{color:'red'}}
							onChangeText={(value) => {this.LoadData(value)}}
							onEndEditing={() => this.FinishLoadData()}
							onClearText={() => this.FinishLoadData()}
							inputStyle={{backgroundColor:'white',paddingLeft:30,borderRadius:12}}
							placeholder='  Search Twitter'
						/>
							
					</View>

					<ActivityComponent loading={ this.state.loading } />

					<View style={stylesS.Footer} >

					        <TouchableOpacity id='Footer-All'
					            activeOpacity={0.5}
					            onPress={(value) => this.onMenuItem('all')}
				            	>  
					        	
					        	<Text style={{fontSize:18,fontWeight:'bold',paddingLeft:20,color:this.state.aFooter?'#1da1f2':'gray'}} >All</Text>
					             
					        </TouchableOpacity>

					        <TouchableOpacity id='Footer-Ment'
					            activeOpacity={0.5} 
					            onPress={(value) => this.onMenuItem('ment')}
					          	>  
								
								<Text  style={{fontSize:18,fontWeight:'bold',paddingLeft:25,color:this.state.mFooter?'#1da1f2':'gray'}}>Mentions</Text>
					              
					        </TouchableOpacity>

					        <TouchableOpacity id='Footer-settings'
					        	activeOpacity={0.5}
					            style={{flexDirection:'row',alignItems:'center',height:50,marginLeft:230}}
					            >  
					            
					        	<Icon3  
					              name='settings'
					              size={25}
					              color='#1da1f2' />
					              
					        </TouchableOpacity>
		         
	      			</View>	
	      			</View>
				</TouchableWithoutFeedback>);
	}
}
  export  const stylesS = StyleSheet.create({
	Container:{
		height:'100%',
		backgroundColor:'white'
	},
	BackButton:{
		backgroundColor:'rgb(225,232,238)',
		paddingLeft:10,
		height:58,
		width:42,
		flexDirection:'row',
		alignItems:'center'
	},
	SearchView:{
		marginTop:23,
		flexDirection:'row',
		alignItems:'center',
		width:150
	},
	Footer:{
	    height:45,
	    width:'100%',
	    position:'absolute',
	    bottom:0,
	    borderTopWidth:0.5,
	    borderTopColor:'gray',
	    flexDirection:'row',
	    alignItems:'center',
	    backgroundColor:'white'

 	}

});

AppRegistry.registerComponent('Search', () => Search);