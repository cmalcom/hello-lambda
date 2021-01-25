'use strict';
const common = require('../common/common.js');

module.exports.hello = async event => {
  console.log(`Event request:  `, event)
  const currentEnvironment = process.APP_ENVIRONMENT || '<none>';
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `This is Corey\'s really nice Lambda, running in the ${currentEnvironment} environment! ${common.MoreText}`,
        input: event,
      },
      null,
      2
    ),
  };
};
