import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image,
         TouchableHighlight, TouchableOpacity, FlatList } from 'react-native';

import { List, ListItem } from 'react-native-elements';         
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { SideMenu } from './Navigators.js';
import GLOBAL from './global.js'

export default class Home extends React.Component {
  constructor()
  {
    super();
    this.state = {
          hBottom:true,
          sBottom:false,
          nBottom:false,
          msBottom:false,
          aFooter:true,
          mFooter:false,
          refreshing:false
        }
        
    console.log('Hello'+GLOBAL.data1[0].TitleLink);
  }
  
  onMenuItem(value)
  {
      //console.log(value);
      switch(value)
      {
        case'h':
          this.setState({
            hBottom:true,
            sBottom:false,
            nBottom:false,
            msBottom:false
              });
          break;

        case('s'):
          this.setState({
            hBottom:false,
            sBottom:true,
            nBottom:false,
            msBottom:false
              });
          console.log('Hey');
          this.props.navigation.navigate('Search');
          break;

        case('n'):
          this.setState({
            hBottom:false,
            sBottom:false,
            nBottom:true,
            msBottom:false
              });
          this.props.navigation.navigate('empty');
          break;

        case('ms'):
          this.setState({
            hBottom:false,
            sBottom:false,
            nBottom:false,
            msBottom:true
              });
          this.props.navigation.navigate('empty');
          break;    

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

  press1(item)
  {
    console.log(item.TitleName);
  }
  
  MenuToggle()
  {
    this.props.navigation.navigate('DrawerToggle');
    console.log('Clicked!');
  }

  StopRefresh()
  {
    this.setState({
      refreshing:false
    });
  } 

  

  renderHeader()
  {
    return (
      <View  >

        <View id={'TopBar'} style={stylesH.TopBar}>
          <View id='Title' style={stylesH.Title}>
            <TouchableOpacity activeOpacity={0.5}
              onPress={() => this.MenuToggle() }
              >  
              <Image 
                  source={require('./Images/profile-picture-none.png')}
                  style={stylesH.TopBarImg}
                  />
            </TouchableOpacity>
            <Text style={stylesH.TopBarText}>Home</Text>
         </View>

          <View id='TopNavBar' style={stylesH.TopNavBar}>

           <TouchableOpacity id='Home'
              style={stylesH.MenuItem}
              onPress={(value) => this.onMenuItem('h')}
            >
              
                <Icon
                name='home'
                color={this.state.hBottom?'#1da1f2':'gray'}
                size={35} />

                <View style={stylesH.BottomBar} backgroundColor={this.state.hBottom?'#1da1f2':'white'}></View>
            </TouchableOpacity>
            

            <TouchableOpacity id='Search'
              //activeOpacity={1.0}
              //hitSlop={{bottom:20,top:20,right:20,left:20}}
              //underlayColor='red'
              style={stylesH.MenuItem}
              onPress={(value) => this.onMenuItem('s')}
            >
              <Icon
                name='search'
                color={this.state.sBottom?'#1da1f2':'gray'}
                size={35}
              />

              <View style={stylesH.BottomBar} backgroundColor={this.state.sBottom?'#1da1f2':'white'}></View>
            </TouchableOpacity>

            <TouchableOpacity id='Notification'
              style={stylesH.MenuItem}
              onPress={(value) => this.onMenuItem('n')}
            >
              <Icon1
                name='bell'
                color={this.state.nBottom?'#1da1f2':'gray'}
                size={34}
              />

              <View style={stylesH.BottomBar} backgroundColor={this.state.nBottom?'#1da1f2':'white'}></View>
            </TouchableOpacity>

            <TouchableOpacity id='Messages'
              style={stylesH.MenuItem}
              onPress={(value) => this.onMenuItem('ms')}
            >
              <Icon1
                name='envelope'
                color={this.state.msBottom?'#1da1f2':'gray'}
                size={34}
              />

              <View style={stylesH.BottomBar} backgroundColor={this.state.msBottom?'#1da1f2':'white'}></View>
            </TouchableOpacity>

          </View>  
        </View>
      </View>
      );
  }

 

  render() {
    return(
      <View>
        <List  containerStyle={{paddingBottom:43}} >
          <FlatList
            data={GLOBAL.data1}

            renderItem={ ( {item} ) =>
              {
                //console.log('yo2'+item.TitleName);
                return(
                <ListItem
                  roundAvatar
                  hideChevron={true}
                  //style={stylesH.Tweet}
                  title={
                    <View id='Title' style={{marginLeft:15,flexDirection:'column',justifyContent:'flex-start'}}>
                      <View  style={{flexDirection:'row',justifyContent:'flex-start',height:20}} >

                        <View id='TitleName'>
                          <Text style={{fontWeight:'bold',fontSize:15}} >{item.TitleName}</Text>
                        </View>
                        
                        <View id='TitleLink'>
                          <Text style={{color:'gray',fontSize:15}} >{item.TitleLink}</Text>
                        </View>

                        <View id='TimeStamp'>
                           <Text style={{color:'gray',fontSize:15,marginLeft:10,alignSelf:'center'}} > . {item.TimeStamp}</Text>
                        </View>

                      </View>

                      <View style={{alignItems:'flex-start'}}>
                        <Text style={{fontSize:17,marginLeft:10,alignSelf:'stretch'}}>{item.Description}</Text>
                      </View>

                    </View>
                  }
                  subtitle={
                      <View id='SubTitle' style={{width:'90%',height:225,marginLeft:15,marginTop:10}} >
                        
                        <Image
                          source={ item.TweetImage }
                          style={{borderRadius:10,height:'85%',width:'100%'}}
                        />
                        
                        <View id='TweetBottomBar' style={{flexDirection:'row',justifyContent:'space-between' ,height:'15%',marginTop:10,marginBottom:10}}>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon2
                              name='comment'
                              color='gray'
                              size={30}
                            />
                            <Text style={{color:'gray'}}>{item.FirstIcon}</Text> 
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon2
                              name='retweet'
                              color='gray'
                              size={30}
                            />
                            <Text style={{color:'gray'}}>{item.SecondIcon}</Text> 
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon2
                              name='heart'
                              color='gray'
                              size={30}
                            />
                            <Text style={{color:'gray'}}>{item.ThirdIcon}</Text> 
                          </TouchableOpacity>

                          <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon1
                              name='envelope'
                              color='gray'
                              size={25}
                            />
                          </TouchableOpacity>

                        </View>
                              
                      </View> 
                  }
                  avatar={ item.ProfileImage }
                  // avatarStyle={{}}
                  // avatarContainerStyle={{xxlargw}}
                  // avatarOverlayContainerStyle={{width:50,height:50}}
                  containerStyle={{}}
                />
                );
              }
            }
          keyExtractor={item  => item.TitleLink }
          ListHeaderComponent={this.renderHeader()}
          refreshing= {this.state.refreshing}
          onRefresh={() => {
              console.log('Refreshing Items');
              this.setState({
                refreshing:true
              });
              setTimeout(() => this.StopRefresh(),2000);
            }}
          />
        </List>
        
        <TouchableOpacity style={stylesH.addTweet} >
          <Icon2
            name='sc-twitter'
            size={60}
            color='darkblue'
            />
        </TouchableOpacity>
        
        <View style={stylesH.Footer} >

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
            style={{flexDirection:'row',alignItems:'center',height:50,marginLeft:'55%'}}>  
            
            <Icon3  
              name='settings'
              size={25}
              color='#1da1f2' />
              
          </TouchableOpacity>
         
        </View>

      </View>

    );

  }
}

export const stylesH = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000f',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TopBar:{
    // paddingTop:40,
    padding:15,
    backgroundColor:'white',
    height:140,
    borderColor:'gray',
    borderBottomWidth:1
    
  },
  Title:{
    flexDirection:'row',
    alignItems:'center'
  },
  TopBarText:{
    fontSize:25,
    fontWeight:'500',
    paddingLeft:35
  },
  TopBarImg:{
    height:45,
    width:45,
  },
  TopNavBar:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:2.5
  },
  MenuItem:{
      height:90,
      width:105,
      justifyContent:'center',
      alignItems:'center',
      //padding:30
  },
  BottomBar:{
    width:110,
    height:5,
    padding:0,
    marginTop:22,
    borderRadius:50
  },
  Tweet:{
    height:1000
  },
  addTweet:{
    position:'absolute',
    bottom:48,
    right:10,
    backgroundColor:'#1da1f2',
    borderRadius:100,
    height:65,
    width:65,
    alignItems:'center',
    justifyContent:'center'

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

  },
 
});

AppRegistry.registerComponent('Home',() => Home);