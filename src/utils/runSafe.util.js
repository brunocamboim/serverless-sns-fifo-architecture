'use strict';

//
// dependencies
const common = require('common-lambda-tools');

module.exports = async (functionName, functionToExecute, event) => {
  try {
    const result = await functionToExecute(event);
    return common.responseHttp.success(result);
  } catch (error) {
    common.logger.error(functionName, error);
    return common.responseHttp.error(event, error);
  }
};
