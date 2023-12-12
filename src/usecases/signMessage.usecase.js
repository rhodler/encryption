const bitcoin = require("bitcoinjs-lib");

const crypto = require("crypto");
const buffer = require("buffer");
const { ECPairFactory } = require("ecpair");
const ecc = require("tiny-secp256k1");
const CryptoJS = require("crypto-js");

const { AppError } = require("../exception/ApprError");

async function execute(message, secretKey) {
  try {
    const ECPair = ECPairFactory(ecc);
    const encryptedText = CryptoJS.AES.encrypt(
      `
    lucky
    fortune
    original
    soap
    salad
    dress
    `,
      "jean 3:16"
    ).toString();
    console.log();
    const bytes = CryptoJS.AES.decrypt(process.env.PRIVATE_KEY, secretKey);
    const privateKey = bytes.toString(CryptoJS.enc.Utf8);
    const keyPair = ECPair.fromWIF(privateKey);

    /*
      generates a random key pair
      const keyPair = ECPair.makeRandom();
  
      Get the public key
      const publicKey = keyPair.publicKey.toString("hex");
      console.log(`Public Key: ${publicKey}\n`);
  
      Get the private key
      const privateKey = keyPair.toWIF();
      console.log(`Private Key: ${privateKey}\n`);
    */

    const hash = bitcoin.crypto.sha256(message);
    const signature = keyPair.sign(hash);

    /*
      Verify the signature
      const verified = keyPair.verify(hash, signature);
    */

    return signature.toString("base64");
  } catch (error) {
    if (error.message) {
      console.log(error.message);
      throw new AppError({
        httpCode: 500,
        description: "The secret key is invalid.",
      });
    }
  }
}

module.exports = { execute };
