const { encrypt } = require("../helpers/crypto.helper");

async function execute(data, secretKey) {
  return encrypt(data, secretKey);
}

module.exports = { execute };
