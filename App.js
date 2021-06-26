

import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './Screens/writeScreen';
import ReadScreen from './Screens/readScreen'

export default class App extends React.Component{
  render() {
    return <AppContainer/>;

  }
}



const TabNavigator = createBottomTabNavigator({
  WRITING: {screen: WriteScreen},
  READING: {screen: ReadScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "READING"){
      return(
        <Image
         source = {require('./read.png')}
         style = {{width: 30, height: 30}}
        />
      )
    }
    else if(routeName == "WRITING"){
      return(
        <Image
         source = {require('./write.png')}
         style = {{width: 30, height: 30}}
        />
      )
    }
   }
  })
}
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "white",
    alignItems : "center",
    justifyContent : "center",
    
  }
});