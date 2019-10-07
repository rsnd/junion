import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

import SourceSansProText from '../common/StyledText';
import eventStyles from '../../assets/styles/components/event';
import homeStyles from '../../assets/styles/components/home';
import authStyles from '../../assets/styles/components/auth';
import placeholders from '../../assets/styles/base/placeholders';
import globalStyles from '../../assets/styles/base/global';

const EventDetailsScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={eventStyles.detailsBox}>
        <SourceSansProText
          style={[eventStyles.smallTitle, globalStyles.m_b_sm]}
          text="Event Title"
        />
        <SourceSansProText
          size={14}
          text="GDG Lagos (Devfest)"
        />
      </View>
      <View style={[eventStyles.detailsBox, eventStyles.detailsBoxGreen]}>
        <SourceSansProText
          style={[eventStyles.smallTitle, globalStyles.m_b_sm]}
          text="Event ID"
        />
        <SourceSansProText
          size={14}
          text="e-knsnk23343mUkn"
        />
      </View>
      <View style={eventStyles.detailsBox}>
        <SourceSansProText
          style={[eventStyles.smallTitle, globalStyles.m_b_sm]}
          text="Description"
        />
        <SourceSansProText
          size={14}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </View>
      <View style={[eventStyles.detailsBox, eventStyles.detailsBoxGreen]}>
        <SourceSansProText
          style={[eventStyles.smallTitle, globalStyles.m_b_sm]}
          text="Date &amp; Time"
        />
        <SourceSansProText
          size={14}
          text="Sat, October 2, 2019, 12:00 PM"
        />
      </View>
      <View style={eventStyles.detailsBox}>
        <SourceSansProText
          style={[eventStyles.smallTitle, globalStyles.m_b_sm]}
          text="Upcoming Events"
        />
        <SourceSansProText
          size={14}
          text="Firebase - October 10, 2019, 12:00 PM"
        />
        <SourceSansProText
          size={14}
          text="TensorFlow - October 13, 2019, 12:00 PM"
        />
      </View>
      <View style={[eventStyles.detailsBox, eventStyles.detailsBoxGreen]}>
        <SourceSansProText
          style={[eventStyles.smallTitle, globalStyles.m_b_sm]}
          text="Links &amp; Social"
        />
        <SourceSansProText
          size={14}
          text="http://gdglagos.com"
        />
        <View style={[globalStyles.row, globalStyles.m_t_md]}>
          <View style={globalStyles.col_4}>
            <TouchableOpacity
              style={[
                globalStyles.fullButton,
                globalStyles.m_b_sm,
                authStyles.linkButton,
                {
                  backgroundColor: placeholders.facebook,
                  marginRight: 2.5,
                },
              ]}
            >
              <Image
                source={require('../../assets/images/icons/facebook.png')}
                style={homeStyles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={globalStyles.col_4}>
            <TouchableOpacity
              style={[
                globalStyles.fullButton,
                globalStyles.m_b_sm,
                authStyles.linkButton,
                {
                  backgroundColor: placeholders.google,
                  marginHorizontal: 2.5,
                },
              ]}
            >
              <Image
                source={require('../../assets/images/icons/google.png')}
                style={homeStyles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={globalStyles.col_4}>
            <TouchableOpacity
              style={[
                globalStyles.fullButton,
                globalStyles.m_b_sm,
                authStyles.linkButton,
                {
                  backgroundColor: placeholders.twitter,
                  marginLeft: 2.5,
                },
              ]}
            >
              <Image
                source={require('../../assets/images/icons/twitter.png')}
                style={homeStyles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EventDetailsScreen;
