import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import SourceSansProText from '../common/StyledText';
import eventStyles from '../../assets/styles/components/event';
import homeStyles from '../../assets/styles/components/home';
import authStyles from '../../assets/styles/components/auth';
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

class EventConversationScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Responses',
  });

  render() {
    const commentArr = [1, 2, 3];

    return (
      <View style={globalStyles.container}>
        <ScrollView style={[globalStyles.m_t_sm, { marginBottom: 10 }]}>
          <View style={eventStyles.messageBoxContainer}>
            <View
              style={[
                eventStyles.messageBox,
                { backgroundColor: placeholders.green },
              ]}
            >
              <SourceSansProText
                size={14}
                style={{ color: 'white' }}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              />

              <View style={[globalStyles.m_t_md, globalStyles.row]}>
                <View style={[globalStyles.col_3]}>
                  <SourceSansProText
                    size={12}
                    family="SourceSansProBold"
                    style={{ color: 'white' }}
                    text="- John Doe"
                  />
                </View>

                <View style={[globalStyles.col_6, globalStyles.row]}>
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

                </View>

                <View style={[globalStyles.col_3]}>
                  <SourceSansProText
                    size={12}
                    style={{ textAlign: 'right', color: 'white' }}
                    text="12: 34 PM"
                  />
                </View>
              </View>
            </View>

            <View>
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

            </View>
          </View>
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
              value="Make a comment"
            />
          </View>
          <TouchableOpacity
            style={eventStyles.bottomButton}
          >
            <SourceSansProText
              style={eventStyles.bottomButtonText}
              text="Add Comment"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default EventConversationScreen;
