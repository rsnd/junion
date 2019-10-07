import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

import SourceSansProText from '../common/StyledText';
import eventStyles from '../../assets/styles/components/event';
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

class ManageEventsScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Manage Created Events',
  });

  render() {
    return (
      <ScrollView style={[globalStyles.container, globalStyles.m_t_sm, { marginBottom: 10 }]}>
        {
          [0, 1, 2, 3, 4, 5].map(() => (
            <TouchableOpacity
              style={[eventStyles.messageBox, { marginBottom: 15 }]}
              onPress={() => {
                this.props.navigation.navigate('SettingsEventNavigator', {
                  title: 'GDG Lagos (Devfest)',
                  showEdit: true,
                });
              }}
            >
              <SourceSansProText
                family="SourceSansProSemiBold"
                style={[eventStyles.messageText, globalStyles.m_b_sm]}
                text="GDG Lagos (Devfest)"
              />
              <SourceSansProText
                style={eventStyles.messageText}
                text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.?"
              />
              <View style={[globalStyles.m_t_md, globalStyles.row]}>
                <View style={[globalStyles.col_6]}>
                  <SourceSansProText
                    size={12}
                    style={{ color: placeholders.almostBlack }}
                    text="Event ID: e-sdkm32d"
                  />
                </View>
                <View style={[globalStyles.col_6]}>
                  <SourceSansProText
                    size={12}
                    style={{ color: placeholders.gray, textAlign: 'right' }}
                    text="12: 34 PM"
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    );
  }
}

export default ManageEventsScreen;
