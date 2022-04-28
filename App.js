import React from 'react';
import {SafeAreaView,StyleSheet, StatusBar,View,Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNetInfo} from "@react-native-community/netinfo";
import LottieView from 'lottie-react-native';
const App = () => {
  const netInfo = useNetInfo();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        {/* <WebView source={{uri: 'https://s517.sgp8.mysecurecloudhost.com:2096'}} /> */}
       {netInfo.isConnected == true?
      (
        <>
         <WebView source={{uri: 'https://s517.sgp8.mysecurecloudhost.com:2096'}} />
        </>
      ) :(
         <>
         <LottieView source={require('./assets/no-internet-connection.json')} autoPlay loop />
         <Text style={{textAlignVertical: "center",textAlign: "center", fontWeight: 'bold',marginBottom:0}}>No Internet...</Text>
         </>
      )
      }
      </SafeAreaView>
    </>
  );
};



export default App;