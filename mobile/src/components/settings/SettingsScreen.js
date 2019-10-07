import React, { Component } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { inject, observer } from 'mobx-react';

import DeleteAccountModalScreen from './DeleteAccountModalScreen';
import DeleteEventModalScreen from './DeleteEventModalScreen';
import SourceSansProText from '../common/StyledText';
import settingsStyles from '../../assets/styles/components/settings';
import eventStyles from '../../assets/styles/components/event';
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

@inject('uiStore')
@observer
class SettingsScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Settings',
  });

  render() {
    return (
      <ScrollView style={[
          globalStyles.container,
          globalStyles.p_v_md,
        ]}
      >
        <DeleteAccountModalScreen />
        <DeleteEventModalScreen />
        <View style={globalStyles.row}>
          <View style={globalStyles.col_2} />
          <View style={globalStyles.col_8}>
            <SourceSansProText
              style={eventStyles.smallTitle}
              text="Account"
            />
          </View>
          <View style={globalStyles.col_2} />
        </View>

        <TouchableOpacity
          style={[globalStyles.row, settingsStyles.linkContainer]}
          onPress={() => this.props.navigation.navigate('ChangeCredentialsScreen')}
        >
          <View style={[globalStyles.col_2, { alignItems: 'center' }]}>
            <Image
              source={require('../../assets/images/icons/account.png')}
              style={settingsStyles.icon}
            />
          </View>
          <View style={globalStyles.col_8}>
            <SourceSansProText
              size={14}
              text="Change credentials"
            />
          </View>
          <View style={[globalStyles.col_2, globalStyles.p_r_sm, { alignItems: 'flex-end' }]}>
            <Image
              source={require('../../assets/images/icons/right_link.png')}
              style={settingsStyles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.row, settingsStyles.linkContainer]}
        >
          <View style={globalStyles.col_2} />
          <View style={globalStyles.col_8}>
            <SourceSansProText
              size={14}
              text="Sign out"
            />
          </View>
          <View style={[globalStyles.col_2, globalStyles.p_r_sm, { alignItems: 'flex-end' }]}>
            <Image
              source={require('../../assets/images/icons/right_link.png')}
              style={settingsStyles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.row, settingsStyles.linkContainer]}
          onPress={() => (
            this.props.uiStore.setClassProps([
              {
                name: 'open',
                value: true,
              },
              {
                name: 'type',
                value: 'delete account',
              },
            ], this.props.uiStore.modal)
          )}
        >
          <View style={globalStyles.col_2} />
          <View style={globalStyles.col_8}>
            <SourceSansProText
              size={14}
              style={{ color: placeholders.red }}
              text="Delete account"
            />
          </View>
          <View style={[globalStyles.col_2, globalStyles.p_r_sm, { alignItems: 'flex-end' }]}>
            <Image
              source={require('../../assets/images/icons/right_link.png')}
              style={settingsStyles.icon}
            />
          </View>
        </TouchableOpacity>

        <View style={globalStyles.row}>
          <View style={globalStyles.col_2} />
          <View style={globalStyles.col_8}>
            <SourceSansProText
              style={[eventStyles.smallTitle, globalStyles.p_t_md]}
              text="Events"
            />
          </View>
          <View style={globalStyles.col_2} />
        </View>

        <TouchableOpacity
          style={[globalStyles.row, settingsStyles.linkContainer]}
          onPress={() => this.props.navigation.navigate('CreateEventScreen')}
        >
          <View style={[globalStyles.col_2, { alignItems: 'center' }]}>
            <Image
              source={require('../../assets/images/icons/event.png')}
              style={settingsStyles.icon2}
            />
          </View>
          <View style={globalStyles.col_8}>
            <SourceSansProText
              size={14}
              text="Create Event"
            />
          </View>
          <View style={[globalStyles.col_2, globalStyles.p_r_sm, { alignItems: 'flex-end' }]}>
            <Image
              source={require('../../assets/images/icons/right_link.png')}
              style={settingsStyles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.row, settingsStyles.linkContainer]}
          onPress={() => this.props.navigation.navigate('ManageEventsScreen')}
        >
          <View style={globalStyles.col_2} />
          <View style={globalStyles.col_8}>
            <SourceSansProText
              size={14}
              text="Manage created events"
            />
          </View>
          <View style={[globalStyles.col_2, globalStyles.p_r_sm, { alignItems: 'flex-end' }]}>
            <Image
              source={require('../../assets/images/icons/right_link.png')}
              style={settingsStyles.icon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyles.row, settingsStyles.linkContainer]}
          onPress={() => this.props.navigation.navigate('AttendedEvents')}
        >
          <View style={globalStyles.col_2} />
          <View style={globalStyles.col_8}>
            <SourceSansProText
              size={14}
              text="Previously attended events"
            />
          </View>
          <View style={[globalStyles.col_2, globalStyles.p_r_sm, { alignItems: 'flex-end' }]}>
            <Image
              source={require('../../assets/images/icons/right_link.png')}
              style={settingsStyles.icon}
            />
          </View>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

export default SettingsScreen;
