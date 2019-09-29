import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import {
  Platform,
  StatusBar,
  View,
} from 'react-native';

import AppNavigator from './src/components/app/AppNavigator';
import appStyles from './src/assets/styles/components/app';

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./src/assets/images/onboarding/1.png'),
      require('./src/assets/images/onboarding/2.png'),
    ]),
    Font.loadAsync({
      SourceSansPro: require('./src/assets/fonts/SourceSansPro-Regular.ttf'),
      SourceSansProSemiBold: require('./src/assets/fonts/SourceSansPro-SemiBold.ttf'),
      SourceSansProBold: require('./src/assets/fonts/SourceSansPro-Bold.ttf'),
      SourceSansProBlack: require('./src/assets/fonts/SourceSansPro-Black.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // eslint-disable-next-line no-console
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <View style={appStyles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}
