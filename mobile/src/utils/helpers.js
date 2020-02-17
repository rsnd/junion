import { AsyncStorage } from 'react-native';
import { runInAction } from 'mobx';
import { globalErrorHandler } from './errorHandler';

const axios = require('axios');

const setClassProps = (arr, self) => {
	arr.forEach(elem => {
		self[elem.name] = elem.value;
	});
};

const renderIf = (condition, content) => {
  if (condition) {
    return content;
  }
  return null;
};

const getData = url => axios.get(url).catch(e => globalErrorHandler(e.response.data));

// eslint-disable-next-line arrow-body-style
const postData = (url, data) => {
	return axios.post(url, data)
	.catch(e => {
		if (e.response.status === 401) return e.response.data.message;
		return globalErrorHandler(e.response.data);
	});
};

const getTokenDetails = async () => {
	return AsyncStorage.getItem('tokenDetails');
};

const getProfile = async () => {
	return AsyncStorage.getItem('profileDetails');
};

const runInActionUtil = (data, prop, self) => {
	runInAction(() => {
		self[prop] = data;
	});
};

export {
	setClassProps,
	getTokenDetails,
	getProfile,
	runInActionUtil,
	getData,
	postData,
	renderIf,
};
