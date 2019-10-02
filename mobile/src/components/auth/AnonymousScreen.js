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
class AnonymousScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={globalStyles.container}>
          <View style={[
              globalStyles.m_t_md,
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
              value="Temporary password"
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
              value="Email address (Optional)"
            />
          </View>
              
          <TouchableOpacity style={[
              globalStyles.fullButton,
              globalStyles.m_b_sm,
              { backgroundColor: placeholders.darkGray },
            ]}
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

        </ScrollView>
      </SafeAreaView>
    );
  }
}

AnonymousScreen.navigationOptions = {
  headerTitle: 'Anonymous Access',
};

export default AnonymousScreen;
