import React, { Component } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import SourceSansProText from '../common/StyledText';
import homeStyles from '../../assets/styles/components/home';
import authStyles from '../../assets/styles/components/auth';
import placeholders from '../../assets/styles/base/placeholders';
import globalStyles from '../../assets/styles/base/global';

// eslint-disable-next-line react/prefer-stateless-function
class SignupScreen extends Component {
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

          <View style={[
              globalStyles.m_b_sm,
              homeStyles.inputBoxContainer,
              authStyles.inputBoxContainer,
            ]}
          >
            <TextInput
              style={homeStyles.inputBox}
              value="Full name"
            />
          </View>
          <View style={[
              globalStyles.m_b_sm,
              homeStyles.inputBoxContainer,
              authStyles.inputBoxContainer,
            ]}
          >
            <TextInput
              style={homeStyles.inputBox}
              value="Username"
            />
          </View>
          <View style={[
              globalStyles.m_b_sm,
              homeStyles.inputBoxContainer,
              authStyles.inputBoxContainer,
            ]}
          >
            <TextInput
              style={homeStyles.inputBox}
              value="Email address."
            />
          </View>
          <View style={[
              globalStyles.m_b_sm,
              homeStyles.inputBoxContainer,
              authStyles.inputBoxContainer,
            ]}
          >
            <TextInput
              style={homeStyles.inputBox}
              value="Password"
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
              value="Confirm password"
            />
          </View>
              
          <TouchableOpacity
            style={[
              globalStyles.fullButton,
              globalStyles.m_b_sm,
            ]}
            onPress={() => this.props.navigation.navigate('Login')}
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

        </ScrollView>
      </SafeAreaView>
    );
  }
}

SignupScreen.navigationOptions = {
  headerTitle: 'Sign Up',
};

export default SignupScreen;
