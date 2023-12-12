const CryptoJS = require("crypto-js");

function encrypt(message, secretKey) {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
}

function decrypt(data, secretKey) {
  try {
    const bytes = CryptoJS.AES.decrypt(data, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { encrypt, decrypt };
