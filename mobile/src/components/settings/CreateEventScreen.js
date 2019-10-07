import React, { Component } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import SourceSansProText from '../common/StyledText';
import homeStyles from '../../assets/styles/components/home';
import authStyles from '../../assets/styles/components/auth';
import globalStyles from '../../assets/styles/base/global';
import placeholders from '../../assets/styles/base/placeholders';

class CreateEventScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Create Event',
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
              value="Event Title"
            />
          </View>

          <View style={[
              globalStyles.row,
              globalStyles.m_b_sm,
            ]}
          >
            <View style={[
                globalStyles.col_8,
                homeStyles.inputBoxContainer,
                { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
              ]}
            >
              <TextInput
                style={homeStyles.inputBox}
                value="Event ID"
              />
            </View>
            <TouchableOpacity
              style={[
                globalStyles.col_4,
                homeStyles.button,
                { display: 'flex' },
              ]}
              onPress={() => this.onCollapse({ passcodeCollapse: !this.state.passcodeCollapse })}
            >
              <SourceSansProText
                size={14}
                style={{ color: 'white' }}
                text="Generate"
              />
            </TouchableOpacity>
          </View>

          <View style={[
              globalStyles.m_b_sm,
              homeStyles.inputBoxContainer,
              authStyles.inputBoxContainer,
            ]}
          >
            <TextInput
              style={[homeStyles.inputBox, { height: 150 }]}
              multiline
              numberOfLines={10}
              // value="Description"
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
              value="Date &amp; Time"
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
              value="Upcoming Events (Optional)"
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
              value="Second upcoming Events (Optional)"
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
              value="Website URL (Optional) "
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
              value="Facebook link (Optional) "
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
              value="Twitter link (Optional) "
            />
          </View>
          <SourceSansProText
            size={14}
            style={[globalStyles.m_b_sm, { color: placeholders.blue }]}
            text="Hint: You cannot edit the above details after the event ends."
          />

          <TouchableOpacity style={[
              globalStyles.fullButton,
              globalStyles.m_b_sm,
            ]}
          >
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SourceSansProText
                size={16}
                style={{ color: 'white', right: 12.5 }}
                text="Save"
              />
            </View>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CreateEventScreen;
