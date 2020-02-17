/* eslint-disable import/prefer-default-export */

import {
  ENVIRONMENT,
  LOCAL_API_URL,
} from '../env/env';

const config = {
  development: {
    API_URL: LOCAL_API_URL,
  },
};

export default config[ENVIRONMENT];
