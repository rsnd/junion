import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Image,
  Text,
} from 'react-native';
import { inject, observer } from 'mobx-react';

import SourceSansProText from '../common/StyledText';
import eventStyles from '../../assets/styles/components/event';
import homeStyles from '../../assets/styles/components/home';
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

@inject('uiStore')
@observer
class DeleteEventModalScreen extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={
          this.props.uiStore.modal.open && this.props.uiStore.modal.type === 'delete event'
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
                  Delete Event
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
              style={[
                homeStyles.text,
                globalStyles.m_t_sm,
                globalStyles.m_b_md,
                { color: placeholders.red },
              ]}
              text="Warning, this process cannot be undone."
            />
            <View style={eventStyles.bottom}>
              <View style={globalStyles.row}>
                <View style={[globalStyles.col_6, globalStyles.m_r_xs]}>
                  <TouchableOpacity style={[
                      eventStyles.bottomButton,
                      { backgroundColor: placeholders.darkGray },
                    ]}
                  >
                    <SourceSansProText
                      style={eventStyles.bottomButtonText}
                      text="Cancel"
                    />
                  </TouchableOpacity>
                </View>
                <View style={[globalStyles.col_6, globalStyles.m_l_xs]}>
                  <TouchableOpacity style={[
                      eventStyles.bottomButton,
                      { backgroundColor: placeholders.red },
                    ]}
                  >
                    <SourceSansProText
                      style={eventStyles.bottomButtonText}
                      text="Delete Event"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default DeleteEventModalScreen;
