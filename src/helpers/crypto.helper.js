const CryptoJS = require('crypto-js');

/**
 * Encrypts text using AES-256 encryption
 * @param {string} text - The text to encrypt
 * @param {string} secretKey - The secret key for encryption
 * @returns {string} - The encrypted text
 * @throws {Error} - If input parameters are invalid
 */
const encrypt = ({text, secretKey}) => {
    if (!text || !secretKey) {
        throw new Error('Text and secret key are required');
    }

    try {
        const encrypted = CryptoJS.AES.encrypt(text, secretKey);
        return encrypted.toString();
    } catch (error) {
        throw new Error(`Encryption failed: ${error.message}`);
    }
};

/**
 * Decrypts text using AES-256 decryption
 * @param {string} encryptedText - The text to decrypt
 * @param {string} secretKey - The secret key for decryption
 * @returns {string} - The decrypted text
 * @throws {Error} - If input parameters are invalid or decryption fails
 */
const decrypt = ({ encrypted, secretKey }) => {
    if (!encrypted || !secretKey) {
        throw new Error('Encrypted text and secret key are required');
    }
    try {
        const decrypted = CryptoJS.AES.decrypt(encrypted, secretKey);
        const plainText = decrypted.toString(CryptoJS.enc.Utf8);

        console.log({encrypted, secretKey, plainText});
        
        if (!plainText) {
            throw new Error('Invalid encrypted text or secret key');
        }

        return plainText;
    } catch (error) {
        throw new Error(`Decryption failed: ${error.message}`);
    }
};

module.exports = {
    encrypt,
    decrypt
};
