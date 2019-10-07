/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,  StyleSheet,
  ScrollView,  View, Button,
  Image,  Text,
  StatusBar } from 'react-native';

import {
  Header,  LearnMoreLinks,
  Colors,  DebugInstructions,
  ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import logo from './img/logo.png'

class Home extends React.Component{
    render(){
      return (
        <>
          <StatusBar backgroundColor='blue' barStyle='light-content' />
          <SafeAreaView style={styles.container} backgroundColor='darkblue'>
              <View style={styles.container}>
                <Image style={{
                  flex: 1,
                  alignSelf: "center",
                  height: 50,
                  width: 500
                }}
                resizeMode='stretch'
                source={logo}/>
              </View>
              <View>{/* similar to divs*/}
                <Button title='LOGIN'/>
                <Button title='REGISTER'/>
              </View>
          </SafeAreaView>
          
        </>
        );
    }
}

// kinda like css
const styles = StyleSheet.create({ 
  container:{
    flex: 1,
  },
  logo_container: {
    flex: 1
  }
});

export default Home;
