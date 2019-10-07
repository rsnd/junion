import { AsyncStorage } from 'react-native';
import { runInAction } from 'mobx';

const setClassProps = (arr, self) => {
	arr.forEach(elem => {
		self[elem.name] = elem.value;
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
};
