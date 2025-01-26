const { encrypt } = require("../helpers/crypto.helper");

async function execute(data) {
  return encrypt(data);
}

module.exports = { execute };
