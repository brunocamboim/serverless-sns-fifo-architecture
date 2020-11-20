'use strict';

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

AWS.config.update({
  // accessKeyId: process.env.AWS_ACCESS_KEY,
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'//process.env.AWS_REGION
});

const sendMessage = () => {
  // Create publish parameters
  var params = {
    Message: JSON.stringify({test: 'SOME DATA'}), /* required */
    TopicArn: process.env.TOPIC_ARN_SNS,
    MessageGroupId: 'MessageGroupId',
    MessageDeduplicationId: 'MessageDeduplicationId'
  };

  // Create promise and SNS service object
  var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

  return publishTextPromise.then(
    function(data) {
      console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
      console.log("MessageID is " + data.MessageId);
      return data;
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });
};

module.exports = {
  sendMessage
};