'use strict';

//
// dependencies
const common      = require('common-lambda-tools');
const snsService  = require('../services/sns.service');

const sendMessageToTopicSNS = async (event) => {
  try {
    const result = await snsService.sendMessage();
    return new common.customResponse(result, 204);
  } catch (err) {
    common.logger.error('sendMessageToTopicSNS', err);
    throw err;
  }
};

module.exports = {
  sendMessageToTopicSNS
};
