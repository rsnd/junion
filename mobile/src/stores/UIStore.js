import { observable, action } from 'mobx';
import { setClassProps } from '../utils/helpers';

export default class UIStore {
	@observable
	settingsEventsRoute = 'SettingsEventConversationsScreen';

	@observable
	modal = {
		open: false,
		type: '',
  };

	@observable
	activeTabs = {
		auth: 'signin',
		serviceType: 'Airport Pickup',
  };

	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}
