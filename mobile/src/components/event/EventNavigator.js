import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { createMaterialTopTabNavigator, SafeAreaView } from 'react-navigation';

import EventConversationsScreen from './EventConversationsScreen';
import EventPollsScreen from './EventPollsScreen';
import EventDetailsScreen from './EventDetailsScreen';
import EventModalScreen from './EventModalScreen';
import SourceSansProText from '../common/StyledText';
import homeStyles from '../../assets/styles/components/home';
import eventStyles from '../../assets/styles/components/event';
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

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
        <EventModalScreen />
        <View style={eventStyles.container}>
          <View style={[
              globalStyles.row,
              { alignItems: 'center', justifyContent: 'center' },
            ]}
          >
            <View style={globalStyles.col_10}>
              <Text style={[
                  homeStyles.headingText,
                  { fontFamily: 'SourceSansProBold' },
                ]}
              >
                GDG Lagos...
              </Text>
            </View>
            <View style={[globalStyles.col_2, { alignItems: 'flex-end' }]}>
              <TouchableOpacity
                onPress={() => (
                  this.props.uiStore.setClassProps([
                    {
                      name: 'open',
                      value: true,
                    },
                    {
                      name: 'type',
                      value: 'join events',
                    },
                  ], this.props.uiStore.modal)
                )}
              >
                <Image
                  source={require('../../assets/images/icons/join.png')}
                  style={homeStyles.buttonIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <SourceSansProText
            style={[homeStyles.text, { color: placeholders.green }]}
            text="Ongoing event."
          />
        </View>
        <View style={[
            globalStyles.row,
            globalStyles.m_t_md,
            eventStyles.linkContainer,
          ]}
        >
          <TouchableOpacity
            style={activeTab('link', navigationState.index, 0)}
            onPress={() => navigation.navigate('EventConversationsScreen')}
          >
            <SourceSansProText
              name="Conversations"
              style={activeTab('text', navigationState.index, 0)}
              text="Conversations"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab('link', navigationState.index, 1)}
            onPress={() => navigation.navigate('EventPollsScreen')}
          >
            <SourceSansProText
              style={activeTab('text', navigationState.index, 1)}
              text="Polls"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab('link', navigationState.index, 2)}
            onPress={() => navigation.navigate('EventDetailsScreen')}
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
  EventConversationsScreen,
  EventPollsScreen,
  EventDetailsScreen,
}, {
  initialRouteName: 'EventConversationsScreen',
  tabBarComponent: Header,
});
