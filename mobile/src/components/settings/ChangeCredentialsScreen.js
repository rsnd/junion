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
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

class ChangeCredentialsScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Change Credentials',
  });

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={[globalStyles.container, globalStyles.m_t_md]}>
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
              value="Email address"
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

          <TouchableOpacity style={[
              globalStyles.fullButton,
              globalStyles.m_b_sm,
            ]}
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
                  text="Save"
                />
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ChangeCredentialsScreen;
