import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

import SourceSansProText from '../common/StyledText';
import homeStyles from '../../assets/styles/components/home';
import placeholders from '../../assets/styles/base/placeholders';
import globalStyles from '../../assets/styles/base/global';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcodeCollapse: false,
      authCollapse: false,
    };
  }

  componentDidMount() {
    StatusBar.setHidden(false);
  }

  onCollapse = obj => {
    this.setState(obj);
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={homeStyles.container}>
          <Text style={[homeStyles.headingText, { fontFamily: 'SourceSansProBold' }]}>
            Join an
            {' '}
            <Text style={[{ color: placeholders.blue }]}>
              event
            </Text>
          </Text>
          <SourceSansProText
            style={homeStyles.text}
            text="Enter an event ID below to join an event."
          />
          <View style={[
            globalStyles.row,
            globalStyles.m_b_sm,
            { marginTop: 30 },
          ]}
          >
            <View style={[
                globalStyles.col_10,
                homeStyles.inputBoxContainer,
                this.state.passcodeCollapse
                ? {}
                : { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
              ]}
            >
              <TextInput
                style={homeStyles.inputBox}
                value="Enter event ID..."
              />
            </View>
            <TouchableOpacity
              style={[
                globalStyles.col_2,
                homeStyles.button,
                {
                  display: this.state.passcodeCollapse
                  ? 'flex'
                  : 'none',
                },
              ]}
              onPress={() => this.onCollapse({ passcodeCollapse: !this.state.passcodeCollapse })}
            >
              <Image
                source={require('../../assets/images/icons/right_white.png')}
                style={homeStyles.icon}
              />
            </TouchableOpacity>
          </View>

          <Collapsible collapsed={this.state.passcodeCollapse}>
            <View style={globalStyles.row}>
              <View style={[globalStyles.col_10, homeStyles.inputBoxContainer]}>
                <TextInput
                  style={homeStyles.inputBox}
                  value="Enter event passcode"
                />
              </View>
              <TouchableOpacity
                style={[globalStyles.col_2, homeStyles.button]}
                onPress={() => this.props.navigation.navigate('EventNavigator')}
              >
                <Image
                  source={require('../../assets/images/icons/right_white.png')}
                  style={homeStyles.icon}
                />
              </TouchableOpacity>
            </View>
          </Collapsible>

          <Collapsible collapsed={this.state.authCollapse}>
            <View>
              <View style={[homeStyles.sectionDivider, globalStyles.m_b_md]} />
              <SourceSansProText
                size={24}
                family="SourceSansProBold"
                style={{ color: placeholders.almostBlack }}
                text="Account Details"
              />
              <SourceSansProText
                style={[homeStyles.text, globalStyles.m_t_sm, globalStyles.m_b_md]}
                text="You can login, sign up or join an event anonymously."
              />

              <TouchableOpacity
                style={[
                  globalStyles.fullButton,
                  globalStyles.m_b_sm,
                  { backgroundColor: placeholders.green },
                ]}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                <View style={globalStyles.row}>
                  <View style={globalStyles.col_1}>
                    <Image
                      source={require('../../assets/images/icons/login.png')}
                      style={homeStyles.buttonIcon}
                    />
                  </View>
                  <View style={[
                      globalStyles.col_11,
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    ]}
                  >
                    <SourceSansProText
                      size={16}
                      style={{ color: 'white', right: 12.5 }}
                      text="Login"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  globalStyles.fullButton,
                  globalStyles.m_b_sm,
                ]}
                onPress={() => this.props.navigation.navigate('Signup')}
              >
                <View style={globalStyles.row}>
                  <View style={globalStyles.col_1}>
                    <Image
                      source={require('../../assets/images/icons/signup.png')}
                      style={homeStyles.buttonIcon}
                    />
                  </View>
                  <View style={[
                      globalStyles.col_11,
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    ]}
                  >
                    <SourceSansProText
                      size={16}
                      style={{ color: 'white', right: 12.5 }}
                      text="Sign Up"
                    />
                  </View>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[
                  globalStyles.fullButton,
                  globalStyles.m_b_sm,
                  { backgroundColor: placeholders.darkGray },
                ]}
                onPress={() => this.props.navigation.navigate('AnonymousAccess')}
              >
                <View style={globalStyles.row}>
                  <View style={globalStyles.col_1}>
                    <Image
                      source={require('../../assets/images/icons/ghost.png')}
                      style={homeStyles.buttonIcon}
                    />
                  </View>
                  <View style={[
                      globalStyles.col_11,
                      {
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                    ]}
                  >
                    <SourceSansProText
                      size={16}
                      style={{ color: 'white', right: 12.5 }}
                      text="Continue Anonymously"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </Collapsible>

          <View style={homeStyles.sectionDivider} />
          <SourceSansProText
            style={homeStyles.smallText}
            text="Or"
          />
          <TouchableOpacity>
            <SourceSansProText
              style={homeStyles.linkText}
              text="Create your own event"
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
