/* eslint-disable no-console */
const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('./index');

const mongooseConfig = () => {
  mongoose.connect(config.database.MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on('connected', () => {
    console.log('%s MongoDB connection established!', chalk.green('✓'));
  });
  mongoose.connection.on('error', () => {
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
  });
};

module.exports = mongooseConfig;
