import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

import SourceSansProText from '../common/StyledText';
import eventStyles from '../../assets/styles/components/event';
import homeStyles from '../../assets/styles/components/home';
import authStyles from '../../assets/styles/components/auth';
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

class EventConversationsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panelCollapsed: true,
      panelNumber: 0,
    };
  }

  onCollapse = obj => {
    this.setState(obj);
  };

  checkCollapsed = num => (
    !(this.state.panelCollapsed && this.state.panelNumber === num)
  );

  render() {
    const commentArr = [1, 2, 3];

    return (
      <View style={globalStyles.container}>
        <ScrollView style={[globalStyles.m_t_sm, { marginBottom: 10 }]}>
          {
            [1, 2, 3, 4, 5, 6].map(num => (
              <View style={eventStyles.messageBoxContainer}>

                <TouchableOpacity
                  style={[
                    eventStyles.messageBox,
                    this.checkCollapsed(num)
                    ? { backgroundColor: placeholders.lightGreen }
                    : { backgroundColor: placeholders.green },
                  ]}
                  onPress={() => this.onCollapse({ panelNumber: num })}
                >
                  <SourceSansProText
                    size={14}
                    style={
                      this.checkCollapsed(num)
                      ? { color: placeholders.almostBlack }
                      : { color: 'white' }
                    }
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                  />

                  <View style={[globalStyles.m_t_md, globalStyles.row]}>
                    <View style={[globalStyles.col_3]}>
                      <SourceSansProText
                        size={12}
                        family="SourceSansProBold"
                        style={
                          this.checkCollapsed(num)
                          ? { color: placeholders.almostBlack }
                          : { color: 'white' }
                        }
                        text="- John Doe"
                      />
                    </View>

                    <View style={[globalStyles.col_6, globalStyles.row]}>
                      {
                        this.checkCollapsed(num)
                        ? (
                          <View style={[
                              globalStyles.col_6,
                              globalStyles.row,
                              { alignItems: 'center', justifyContent: 'center' },
                            ]}
                          >
                            <Image
                              source={require('../../assets/images/icons/like.png')}
                              style={[eventStyles.icon, globalStyles.m_r_xs]}
                            />
                            <SourceSansProText
                              size={12}
                              style={{ color: placeholders.almostBlack }}
                              text="20"
                            />
                          </View>
                        )
                        : (
                          <View style={[
                              globalStyles.col_6,
                              globalStyles.row,
                              { alignItems: 'center', justifyContent: 'center' },
                            ]}
                          >
                            <SourceSansProText
                              size={12}
                              style={{ color: 'white' }}
                              text="20 Likes"
                            />
                          </View>
                        )
                      }

                      {
                        this.checkCollapsed(num)
                        ? (
                          <View style={[
                              globalStyles.col_6,
                              globalStyles.row,
                              { alignItems: 'center', justifyContent: 'center' },
                            ]}
                          >
                            <Image
                              source={require('../../assets/images/icons/comment.png')}
                              style={[eventStyles.icon, globalStyles.m_r_xs]}
                            />
                            <SourceSansProText
                              size={12}
                              style={{ color: placeholders.almostBlack }}
                              text="5"
                            />
                          </View>
                        )
                        : (
                          <View style={[
                              globalStyles.col_6,
                              globalStyles.row,
                              { alignItems: 'center', justifyContent: 'center' },
                            ]}
                          >
                            <SourceSansProText
                              size={12}
                              style={{ color: 'white' }}
                              text="500 Comments"
                            />
                          </View>
                        )
                      }

                    </View>

                    <View style={[globalStyles.col_3]}>
                      <SourceSansProText
                        size={12}
                        style={[
                          { textAlign: 'right' },
                          this.checkCollapsed(num)
                          ? { color: placeholders.gray }
                          : { color: 'white' },
                        ]}
                        text="12: 34 PM"
                      />
                    </View>
                  </View>
                </TouchableOpacity>

                <Collapsible collapsed={this.checkCollapsed(num)}>
                  <View style={[
                      globalStyles.row,
                      globalStyles.m_b_md,
                      eventStyles.linkContainer,
                      eventStyles.actionsWrapper,
                    ]}
                  >
                    <View style={[
                        globalStyles.col_6,
                        globalStyles.row,
                        globalStyles.p_sm,
                        eventStyles.actionContainer,
                      ]}
                    >
                      <Image
                        source={require('../../assets/images/icons/like.png')}
                        style={[eventStyles.icon, globalStyles.m_r_xs]}
                      />
                      <SourceSansProText
                        size={14}
                        style={{ color: placeholders.blue }}
                        text="Like"
                      />
                    </View>
                    <View style={[
                        globalStyles.col_6,
                        globalStyles.row,
                        globalStyles.p_sm,
                        { alignItems: 'center', justifyContent: 'center' },
                      ]}
                    >
                      <Image
                        source={require('../../assets/images/icons/comment.png')}
                        style={[eventStyles.icon, globalStyles.m_r_xs]}
                      />
                      <SourceSansProText
                        size={14}
                        style={{ color: placeholders.blue }}
                        text="Comment"
                      />
                    </View>
                  </View>

                  {
                    commentArr.map((e, i) => (
                      <View style={[
                          eventStyles.messageBox,
                          globalStyles.p_b_sm,
                          commentArr.length === i + 1
                          ? {}
                          : {
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderBottomColor: placeholders.gray,
                          },
                        ]}
                      >
                        <SourceSansProText
                          style={eventStyles.messageText}
                          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        />
                        <View style={[globalStyles.m_t_md, globalStyles.row]}>
                          <View style={[globalStyles.col_6]}>
                            <SourceSansProText
                              size={12}
                              family="SourceSansProBold"
                              style={{ color: placeholders.almostBlack }}
                              text="- John Doe"
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
                      </View>
                    ))
                  }

                  <TouchableOpacity
                    style={[
                      globalStyles.fullButton,
                      globalStyles.m_b_xs,
                    ]}
                    onPress={() => this.props.navigation.navigate('Responses')}
                  >
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <SourceSansProText
                        size={14}
                        style={{ color: 'white' }}
                        text="View more responses"
                      />
                    </View>
                  </TouchableOpacity>

                </Collapsible>
              </View>
            ))
          }
        </ScrollView>

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
              value="Join the conversation."
            />
          </View>
          <TouchableOpacity
            style={eventStyles.bottomButton}
          >
            <SourceSansProText
              style={eventStyles.bottomButtonText}
              text="Send Message"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EventConversationsScreen;
