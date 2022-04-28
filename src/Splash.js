import React from 'react';
import {SafeAreaView,StyleSheet, StatusBar,View,Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNetInfo} from "@react-native-community/netinfo";
import LottieView from 'lottie-react-native';
const Splash = () => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
      
         <LottieView source={require('../assets/splash.json')} autoPlay loop />
        
      </SafeAreaView>
    </>
  );
};



export default Splash;