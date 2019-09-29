import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OnboardingScreens from '../onboarding/OnboardingScreens';

const RootNavigation = createSwitchNavigator(
  {
    Onbording: OnboardingScreens,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Onbording',
  },
);

export default createAppContainer(RootNavigation);
