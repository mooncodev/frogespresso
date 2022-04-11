const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const config = require('../config/config');
const userService = require('./user.service');
const {
  Epic
} = require('../models');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');

/**
 * Create a user
 * @param {Object} epicBody
 * @returns {Promise<Epic>}
 */
const createEpic = async (epicBody) => {
  console.log(`[[[ service, epicBody: `, epicBody);

  return Epic.create(epicBody);
};


module.exports = {
  createEpic
};
