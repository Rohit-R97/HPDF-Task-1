import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';
import Home from './Home.js';
import Menu from './Menu.js';
import Search from './Search.js';
import Empty from './Empty.js';


// class renderHome extends React.Component {
// 	render() {
// 		return( <Home  /> );
// 	}
// }

// class renderMenu extends React.Component {
// 	render() {
// 		return( <Menu /> );
// 	}
// }

const DrawerComponents = (props) => (
  <ScrollView>
   
      <DrawerItems {...props} />
   
  </ScrollView>
);
	
export const SideMenu = DrawerNavigator ({
        
	    Profile:{
	      	screen: Home,
	      	navigatorOptions:{
	        	title:'Home'
	      	}
	    },
	    Lists:{
			screen: Menu
	    },
	    Moments:{
	    	screen:Home
	    },
	    Highlights:{
	    	screen:Menu
	    }
	},
	{
	    drawerWidth:330,
	    contentComponent:Menu
});

export const TabsMenu = StackNavigator({
	Home:{
		screen:SideMenu,
		// navigationOptions: {
		// 	tabBarVisible:false
		// }
	},
	Search:{
		screen:Search,	
	},
	empty:{
		screen:Empty
	}
},
	{
		headerMode:'none',
		mode:'modal',
		navigationOptions: {
	    	gesturesEnabled: true,
	   	}

		//tabBarVisible:false,
		
});
