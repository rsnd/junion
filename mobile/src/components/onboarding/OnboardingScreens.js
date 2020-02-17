import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  StatusBar,
  View,
  AsyncStorage,
  ImageBackground,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';

import SourceSansProText from '../common/StyledText';
import placeholders from '../../assets/styles/base/placeholders';
import globalStyles from '../../assets/styles/base/global';
import onboardingStyles from '../../assets/styles/components/onboarding';

const setOnboardingComplete = async navigation => {
  await AsyncStorage.setItem('onboardingComplete', 'true');
  navigation.navigate('Main');
};

const bottomActions = (navigation, activeDot, color) => (
  <View style={[globalStyles.row, globalStyles.m_t_md]}>
    <View
      style={[globalStyles.col_6, globalStyles.p_h_xs, onboardingStyles.dotContainer]}
    >
      <View style={[
          onboardingStyles.dot,
          activeDot === 1 ? { backgroundColor: color } : {},
        ]}
      />
      <View style={[
          onboardingStyles.dot,
          activeDot === 2 ? { backgroundColor: color } : {},
        ]}
      />
    </View>
    <View
      style={[globalStyles.col_6, globalStyles.p_h_xs, { flexDirection: 'row-reverse' }]}
    >
      <TouchableOpacity onPress={() => setOnboardingComplete(navigation)}>
        <Image
          source={require('../../assets/images/icons/right_purple.png')}
          style={onboardingStyles.right}
        />
      </TouchableOpacity>
    </View>
  </View>
);

class OnboardingScreens extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  componentWillUnmount() {
    StatusBar.setHidden(false);
  }

  bootstrapAsync = async () => {
    const onboardingComplete = await AsyncStorage.getItem('onboardingComplete');
    if (onboardingComplete === 'true') {
      // this.props.navigation.navigate('Main');
    }
    else {
      await AsyncStorage.setItem('onboardingComplete', 'false');
    }
  };

  render() {
    return (
      <Swiper showsPagination={false} loop={false}>
        <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/onboarding/1.png')}>
          <View style={onboardingStyles.slide}>
            <LinearGradient
              colors={['transparent', 'black']}
              start={[0.9, 0.1]}
              style={{ flex: 1 }}
            >
              <View style={onboardingStyles.textBox}>
                {bottomActions(this.props.navigation, 1, '#1089FF', 'white')}
                <SourceSansProText
                  style={onboardingStyles.text}
                  text="Junion provides audiences a platform to actually be a part of the events they are attending."
                />
                <Text style={[onboardingStyles.headingText, { fontFamily: 'SourceSansProBold' }]}>
                  Connecting Audiences
                  {' '}
                  <Text style={[{ color: placeholders.blue }]}>
                    To Events
                  </Text>
                </Text>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>

        <ImageBackground style={{ flex: 1 }} source={require('../../assets/images/onboarding/2.png')}>
          <View style={onboardingStyles.slide}>
            <LinearGradient
              colors={['transparent', 'black']}
              start={[0.9, 0.1]}
              style={{ flex: 1 }}
            >
              <View style={onboardingStyles.textBox}>
                {bottomActions(this.props.navigation, 2, '#1089FF', 'white')}
                <SourceSansProText
                  style={onboardingStyles.text}
                  text="Junion provides interactive tools for audiences to communicate during and within an event."
                />
                <Text style={[onboardingStyles.headingText, { fontFamily: 'SourceSansProBold' }]}>
                  Interactive Tools
                  {'\n'}
                  <Text style={[{ color: placeholders.blue }]}>
                    For Audiences
                  </Text>
                </Text>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>

      </Swiper>
    );
  }
}

export default OnboardingScreens;
