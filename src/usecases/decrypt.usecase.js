const { decrypt } = require("../helpers/crypto.helper");

async function execute(data, secretKey) {
  return decrypt(data, secretKey);
}

module.exports = { execute };
