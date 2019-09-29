import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import SourceSansProText from '../common/StyledText';
import homeStyles from '../../assets/styles/components/home';
import placeholders from '../../assets/styles/base/placeholders';
import globalStyles from '../../assets/styles/base/global';

class HomeScreen extends Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={homeStyles.container}
          // contentContainerStyle={{ flex: 1, justifyContent: 'center' }}
        >
          <Text style={[homeStyles.headingText, { fontFamily: 'SourceSansProBold' }]}>
            Join an
            {' '}
            <Text style={[{ color: placeholders.blue }]}>
              event
            </Text>
          </Text>
          <SourceSansProText
            style={homeStyles.text}
            text="Enter an event ID below to join an event."
          />
          <View style={[globalStyles.row, homeStyles.inputRow]}>
            <View style={[globalStyles.col_10, homeStyles.inputBoxContainer]}>
              <TextInput
                style={homeStyles.inputBox}
                value="Enter event ID..."
              />
            </View>
            <TouchableOpacity style={[globalStyles.col_2, homeStyles.button]}>
              <Image
                source={require('../../assets/images/icons/right_white.png')}
                style={homeStyles.right}
              />
            </TouchableOpacity>
          </View>
          <SourceSansProText
            style={homeStyles.smallText}
            text="Or"
          />
          <TouchableOpacity>
            <SourceSansProText
              style={homeStyles.linkText}
              text="Create your own event"
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
