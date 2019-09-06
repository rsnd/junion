require('dotenv').config();

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */

const config = Object.freeze({
  APPLICATION_ENV: process.env.APPLICATION_ENV,
  database: {
    MONGODB_URI: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_PWD}@${process.env.MONGODB_URI}`,
    DB_NAME: process.env.APPLICATION_ENV === 'dev'
      ? process.envMONGODB_DEV_DB
      : process.envMONGODB_PROD_DB,
    DB_PASSWORD: process.env.MONGODB_USER_PWD,
    DB_USERNAME: process.env.MONGODB_USER
  },
  FRONTEND_URL : {
    LOCAL: process.env.LOCAL_URL,
    STAGING: process.env.STAGING_URL,
    LIVE: process.env.FE_BASE_URL,
  }
});

module.exports = config;
