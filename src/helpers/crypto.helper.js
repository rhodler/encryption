const CryptoJS = require("crypto-js");

function encrypt(message, secretKey) {
  return CryptoJS.DES.encrypt(message, secretKey).toString();
}

function decrypt({ encrypted, secretKey }) {
  const decrypted = CryptoJS.DES.decrypt(encrypted, secretKey);

  return decrypted.toString(CryptoJS.enc.Utf8);
}

module.exports = { encrypt, decrypt };
