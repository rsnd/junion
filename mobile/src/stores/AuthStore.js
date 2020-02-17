import { AsyncStorage } from 'react-native';
import { observable, action, runInAction } from 'mobx';

import config from '../../config';
import { globalErrorHandler } from '../utils/errorHandler';
import { setClassProps } from '../utils/helpers';

const axios = require('axios');

export default class AuthStore {
	@observable
	loginCredentials = {
		email: 'Email address',
		password: 'Password',
		strategy: 'local',
	};

	@observable
	errors = {
		visible: true,
		type: '',
		message: '',
  };

	@action
	login = () => {
		axios.post(`${config.API_URL}/authentication`, this.loginCredentials)
			.then(res => {
				runInAction(() => {
					this.errors = {
						visible: false,
						type: '',
						message: '',
					};
				});
				AsyncStorage.setItem('user', JSON.stringify(res.data));
			})
			.catch(e => {
				if (e.response.status === 401) {
					runInAction(() => {
						this.errors = {
							visible: true,
							type: 'loginError',
							message: e.response.data.message,
						};
					});
				}
				return globalErrorHandler(e.response.data);
			});
	}

	@action
	setClassProps = (arr, self = this) => setClassProps(arr, self);
}
