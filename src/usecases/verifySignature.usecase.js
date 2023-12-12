const bitcoin = require("bitcoinjs-lib");
const { ECPairFactory } = require("ecpair");
const ecc = require("tiny-secp256k1");
const CryptoJS = require("crypto-js");

async function execute(message, secretKey) {
  const ECPair = ECPairFactory(ecc);
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

  const verified = keyPair.verify(hash, signature);

  return { verified };
}

module.exports = { execute };
