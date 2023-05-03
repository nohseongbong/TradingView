import React from 'react';
import {Platform, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

export default function App(): JSX.Element {
  const uri =
    Platform.OS === 'ios' ? 'themed.html' : 'file:///android_asset/themed.html';

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        style={{flex: 1}}
        source={{uri}}
        allowFileAccessFromFileURLs={true}
        domStorageEnabled={true}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        originWhitelist={['*']}
        onShouldStartLoadWithRequest={() => true}
      />
    </SafeAreaView>
  );
}
