const express = require("express");

const signMessageUsecase = require("../usecases/signMessage.usecase");
const encryptUsecase = require("../usecases/encrypt.usecase");
const decryptUsecase = require("../usecases/decrypt.usecase");

const router = express.Router();

function signMessage(req, res, next) {
  signMessageUsecase
    .execute(req.query.message, req.query.secretKey)
    .then((response) => res.status(200).json(response))
    .catch((error) => next(error));
}

function encryptData(req, res, next) {
  encryptUsecase
    .execute(req.query.data, req.query.secretKey)
    .then((response) => res.status(200).json(response))
    .catch((error) => next(error));
}

function decryptData(req, res, next) {
  decryptUsecase
    .execute(req.body)
    .then((response) => res.status(200).json(response))
    .catch((error) => next(error));
}

router.post("/encrypt-data", encryptData);
router.post("/decrypt-data", decryptData);
router.post("/sign-message", signMessage);

module.exports = router;
