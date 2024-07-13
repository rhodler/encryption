const { decrypt } = require("../helpers/crypto.helper");

async function execute(data) {
  try {
    return decrypt(data);
  } catch (error) {
    throw new Error('Failed to decrypt data');
  }
}

module.exports = { execute };
