import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';

import SettingsEventConversationsScreen from './SettingsEventConversationsScreen';
import SettingsEventPollsScreen from './SettingsEventPollsScreen';
import SettingsEventDetailsScreen from './SettingsEventDetailsScreen';
import SourceSansProText from '../../common/StyledText';
import eventStyles from '../../../assets/styles/components/event';
import globalStyles from '../../../assets/styles/base/global';

const activeTab = (type, index, routeIndex) => {
  if (type === 'text') {
    if (index === routeIndex) {
      return [eventStyles.linkText, eventStyles.activeLinkText];
    }
    return eventStyles.linkText;
  }
  if (type === 'link') {
    if (index === routeIndex) {
      return [globalStyles.col_4, eventStyles.link, eventStyles.activeLink];
    }
    return [globalStyles.col_4, eventStyles.link];
  }
  return {};
};

@inject('uiStore')
@observer
class Header extends Component {
  render() {
    const { navigation, navigationState } = this.props;
    return (
      <SafeAreaView>
        <View style={[
            globalStyles.row,
            globalStyles.m_t_md,
            eventStyles.linkContainer,
          ]}
        >
          <TouchableOpacity
            style={activeTab('link', navigationState.index, 0)}
            onPress={() => navigation.navigate('SettingsEventConversationsScreen')}
          >
            <SourceSansProText
              name="Conversations"
              style={activeTab('text', navigationState.index, 0)}
              text="Conversations"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab('link', navigationState.index, 1)}
            onPress={() => navigation.navigate('SettingsEventPollsScreen')}
          >
            <SourceSansProText
              style={activeTab('text', navigationState.index, 1)}
              text="Polls"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab('link', navigationState.index, 2)}
            onPress={() => navigation.navigate('SettingsEventDetailsScreen')}
          >
            <SourceSansProText
              style={activeTab('text', navigationState.index, 2)}
              text="Details"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default createMaterialTopTabNavigator({
  SettingsEventConversationsScreen,
  SettingsEventPollsScreen,
  SettingsEventDetailsScreen,
}, {
  initialRouteName: 'SettingsEventConversationsScreen',
  tabBarComponent: Header,
});
