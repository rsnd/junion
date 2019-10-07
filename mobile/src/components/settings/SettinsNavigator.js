import { createStackNavigator } from 'react-navigation';

import SettingsScreen from './SettingsScreen';
import ChangeCredentialsScreen from './ChangeCredentialsScreen';
import CreateEventScreen from './CreateEventScreen';
import ManageEventsScreen from './ManageEventsScreen';
import AttendedEvents from './AttendedEvents';
import SettingsEventNavigator from './events/SettingsEventNavigator';
import SettingsEventConversationScreen from './events/SettingsEventConversationScreen';
import SettingsEventPollScreen from './events/SettingsEventPollScreen';

export default createStackNavigator({
  SettingsScreen,
  ChangeCredentialsScreen,
  CreateEventScreen,
  ManageEventsScreen,
  AttendedEvents,
  SettingsEventNavigator: {
    screen: SettingsEventNavigator,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
  SettingsEventResponses: SettingsEventConversationScreen,
  SettingsEventPoll: SettingsEventPollScreen,
}, {
  initialRouteName: 'SettingsScreen',
});
