'use strict';

//
// dependencies
const common = require('common-lambda-tools');

const receiveMessageFromTopicSNS = async (event) => {
  try {
    return new common.customResponse(event, 204);
  } catch (err) {
    common.logger.error('receiveMessageFromTopicSNS', err);
    throw err;
  }
};

module.exports = {
  receiveMessageFromTopicSNS
};
