# TradingView


# TradingView 라이브러이 ReactNative 세팅 방법

## 파일 다운로드


https://github.com/tradingview/charting_library/ 해당 레파지토리로 접속 후 파일들을 다운받는다.
다만 레파지토리 읽기 권한이 없을 경우 요청 후 받아야 한다.

## Android

안드로이드에서 세팅 방법은 다운로드 받은 3개의 파일을 밑에 경로에 복사한다.

```
android/app/src/main/assets/index.html
android/app/src/main/assets/charting_library/
android/app/src/main/assets/datafeeds/
```

다만 index.html 파일은 다른 html 파일로 대체 가능하다 (ui 및 구성요소가 다르다)

## iOS

iOS 에서도 다운로드 받은 3개의 파일을 밑에 방법으로 추가 하면 된다.
1. xcode를 열어 프로젝트 폴더에 우클릭
2. Add files to 클릭
3. Create folder references 체크
```
index.html
charting_library/
datafeeds/
```
4. 위 3개 파일을 추가한다 (여기서도 index.html은 선택사항)


## 사용법

```
import React from 'react';
import {Platform, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

export default function App(): JSX.Element {
  const uri =
    Platform.OS === 'ios' ? 'index.html' : 'file:///android_asset/index.html';

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
```

추가한 파일들은 webview uri 로 사용한다.
