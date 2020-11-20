'use strict';

//
// dependecies
const common  = require('common-lambda-tools');

const _runSafe          = require('../utils/runSafe.util');
const sendController    = require('./send.controller');
const receiveController = require('./receive.controller');

const root = async (event) => {
  return common.responseHttp.success({
    headers: event.headers,
    body: {
      message: 'Ok'
    }
  });
};

const sendMessageToTopicSNSRoute = async (event) => {
  return await _runSafe('sendMessageToTopicSNSRoute', sendController.sendMessageToTopicSNS, event);
};

const receiveMessageFromTopicSNSRoute = async (event) => {
  return await _runSafe('receiveMessageFromTopicSNSRoute', receiveController.receiveMessageFromTopicSNS, event);
};

module.exports = {
  root,
  sendMessageToTopicSNSRoute,
  receiveMessageFromTopicSNSRoute
};