import React, { Component } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { inject, observer } from 'mobx-react';

import { renderIf } from '../../utils/helpers';
import SourceSansProText from '../common/StyledText';
import homeStyles from '../../assets/styles/components/home';
import authStyles from '../../assets/styles/components/auth';
import placeholders from '../../assets/styles/base/placeholders';
import globalStyles from '../../assets/styles/base/global';

@inject('authStore')
@observer
class LoginScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Login',
  });

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={globalStyles.container}>
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

          <View style={homeStyles.sectionDivider} />
          <SourceSansProText
            style={homeStyles.smallText}
            text="Or"
          />
          {renderIf(
            this.props.authStore.errors.visible
            && this.props.authStore.errors.type === 'loginError',
            <SourceSansProText
              size={14}
              style={[globalStyles.m_b_sm, { color: placeholders.red }]}
              text={`Sorry, an error occured, ${this.props.authStore.errors.message.toLowerCase()}.`}
            />,
          )}
          <View style={[
              globalStyles.m_b_sm,
              homeStyles.inputBoxContainer,
              authStyles.inputBoxContainer,
            ]}
          >
            <TextInput
              style={homeStyles.inputBox}
              value={this.props.authStore.loginCredentials.email}
              onChangeText={text => {
                this.props.authStore.setClassProps([
                  {
                    name: 'email',
                    value: text,
                  },
                ], this.props.authStore.loginCredentials);
              }}
            />
          </View>
          <View style={[
              globalStyles.m_b_md,
              homeStyles.inputBoxContainer,
              authStyles.inputBoxContainer,
            ]}
          >
            <TextInput
              style={homeStyles.inputBox}
              value={this.props.authStore.loginCredentials.password}
              onChangeText={text => {
                this.props.authStore.setClassProps([
                  {
                    name: 'password',
                    value: text,
                  },
                ], this.props.authStore.loginCredentials);
              }}
            />
          </View>

          <TouchableOpacity
            style={[
              globalStyles.fullButton,
              globalStyles.m_b_sm,
              { backgroundColor: placeholders.green },
            ]}
            onPress={() => this.props.navigation.navigate('EventNavigator')}
            // onPress={() => this.props.authStore.login()}
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
          <TouchableOpacity>
            <SourceSansProText
              style={homeStyles.linkText}
              text="Forgotten Password ?"
            />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
