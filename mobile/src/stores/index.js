import { configure } from 'mobx';
import UIStore from './UIStore';
import AuthStore from './AuthStore';

configure({ enforceActions: 'observed' });

const uiStore = new UIStore();
const authStore = new AuthStore();


export default {
  uiStore,
  authStore,
};
