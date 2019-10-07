import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
// import Collapsible from 'react-native-collapsible';

import SourceSansProText from '../../common/StyledText';
import eventStyles from '../../../assets/styles/components/event';
import globalStyles from '../../../assets/styles/base/global';
import placeholders from '../../../assets/styles/base/placeholders';

class SettingsEventPollScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Poll Details',
  });

  render() {
    return (
      <ScrollView style={[
          globalStyles.container,
          globalStyles.m_t_sm,
          { marginBottom: 10 },
        ]}
      >
        <Image
          source={require('../../../assets/images/poll.png')}
          style={eventStyles.pollImage}
        />
        <SourceSansProText
          size={14}
          style={[globalStyles.m_b_lg, { color: placeholders.almostBlack }]}
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident?"
        />

        <TouchableOpacity
          style={[
            globalStyles.fullButton,
            globalStyles.m_b_md,
            { backgroundColor: placeholders.green },
          ]}
        >
          <View style={globalStyles.row}>
            <View style={globalStyles.col_2}>
              <View style={eventStyles.pollTextContainer}>
                <SourceSansProText
                  family="SourceSansProBold"
                  size={14}
                  style={{ color: placeholders.darkGray }}
                  text="60%"
                />
              </View>
            </View>
            <View style={[
                globalStyles.col_10,
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <SourceSansProText
                size={18}
                style={{ color: 'white', right: 14 }}
                text="Yes"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.fullButton,
            globalStyles.m_b_md,
            { backgroundColor: placeholders.blue },
          ]}
        >
          <View style={globalStyles.row}>
            <View style={globalStyles.col_2}>
              <View style={eventStyles.pollTextContainer}>
                <SourceSansProText
                  family="SourceSansProBold"
                  size={14}
                  style={{ color: placeholders.darkGray }}
                  text="30%"
                />
              </View>
            </View>
            <View style={[
                globalStyles.col_10,
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <SourceSansProText
                size={18}
                style={{ color: 'white', right: 14 }}
                text="No"
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            globalStyles.fullButton,
            globalStyles.m_b_md,
            { backgroundColor: placeholders.darkGray },
          ]}
        >
          <View style={globalStyles.row}>
            <View style={globalStyles.col_2}>
              <View style={eventStyles.pollTextContainer}>
                <SourceSansProText
                  family="SourceSansProBold"
                  size={14}
                  style={{ color: placeholders.darkGray }}
                  text="10%"
                />
              </View>
            </View>
            <View style={[
                globalStyles.col_10,
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
            >
              <SourceSansProText
                size={18}
                style={{ color: 'white', right: 14 }}
                text="Maybe"
              />
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

export default SettingsEventPollScreen;
