import { configure } from 'mobx';
import UIStore from './UIStore';

configure({ enforceActions: 'observed' });

const uiStore = new UIStore();

export default {
  uiStore,
};
