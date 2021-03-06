
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/TransactionScreen';
import SearchScreen from './screens/SearchScreen';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <AppContainer/>
    </View>
  );
}
}
const tabNavigator=createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen},
},
{
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
const routeName=navigation.state.routeName;
if(routeName==='Transaction'){
  return(
    <Image
    source={require('./assets/book.png')}
    style={{width:40,height:40}}
    ></Image>
  )
}
else if(routeName==='Search'){
  return(
    <Image
    source={require('./assets/searchingbook.png')}
    style={{width:40,height:40}}
    ></Image>
  )
}
  }
})
}
)
const AppContainer=createAppContainer(tabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
