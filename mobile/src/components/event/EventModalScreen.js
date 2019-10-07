import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Image,
  Text,
  TextInput,
} from 'react-native';
import { inject, observer } from 'mobx-react';

import SourceSansProText from '../common/StyledText';
import eventStyles from '../../assets/styles/components/event';
import homeStyles from '../../assets/styles/components/home';
import globalStyles from '../../assets/styles/base/global';
import authStyles from '../../assets/styles/components/auth';
import placeholders from '../../assets/styles/base/placeholders';

@inject('uiStore')
@observer
class EventModalScreen extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={
          this.props.uiStore.modal.open && this.props.uiStore.modal.type === 'join events'
        }
        onRequestClose={() => this.props.closeModal()}
      >
        <View style={eventStyles.modal}>
          <View style={eventStyles.modalContent}>
            <View style={[
                globalStyles.row,
                { alignItems: 'center', justifyContent: 'center' },
              ]}
            >
              <View style={globalStyles.col_10}>
                <Text style={[
                    homeStyles.headingText,
                    { fontFamily: 'SourceSansProSemiBold', fontSize: 24 },
                  ]}
                >
                  Join an
                  {' '}
                  <Text style={[{ color: placeholders.blue }]}>
                    event
                  </Text>
                </Text>
              </View>
              <View style={[globalStyles.col_2, { alignItems: 'flex-end' }]}>
                <TouchableOpacity
                  onPress={() => (
                    this.props.uiStore.setClassProps([
                      {
                        name: 'open',
                        value: false,
                      },
                    ], this.props.uiStore.modal)
                  )}
                >
                  <Image
                    source={require('../../assets/images/icons/close.png')}
                    style={homeStyles.buttonIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <SourceSansProText
              style={[homeStyles.text, globalStyles.m_t_sm, globalStyles.m_b_md]}
              text="Enter an event ID below to join an event."
            />
            <View style={[eventStyles.bottom]}>
              <View style={[
                  globalStyles.m_b_sm,
                  homeStyles.inputBoxContainer,
                  authStyles.inputBoxContainer,
                  eventStyles.inputBoxContainer,
                ]}
              >
                <TextInput
                  style={homeStyles.inputBox}
                  value="Enter event ID"
                />
              </View>
              <TouchableOpacity
                style={eventStyles.bottomButton}
              >
                <SourceSansProText
                  style={eventStyles.bottomButtonText}
                  text="Join"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default EventModalScreen;
