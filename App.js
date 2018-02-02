import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { TabsMenu } from './Navigators.js'


export default class App extends React.Component {
  
// renderScenes(route,navigator)
// {
//   switch(route.id)
//   {
//     case 'Home':
//       return(<Home  />);
//   }

// }

  render() {
    return(
      <TabsMenu/>
      
    );
  
  }
}

const styles = StyleSheet.create({
  });
AppRegistry.registerComponent('App',() => App);