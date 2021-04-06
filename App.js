import * as React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  WriteStoryScreen:{screen:WriteStoryScreen,
  navigationOptions:{
    tabBarIcon: <Image source = {require("./assets/write.png")}style = {{width: 25, height: 30}}/>
  }},
  ReadStoryScreen:{screen:ReadStoryScreen,
  navigationOptions:{
    tabBarIcon: <Image source = {require("./assets/read.png")}style = {{width: 25, height: 30}}/>
  }}
  })
  const AppContainer = createAppContainer(TabNavigator)