const mongoose = require('mongoose');
const Requests = require('../../utils/schemas/requests');

/**
 * Handles all get requests.
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {object} - Request record(s)
 */
async function handleGet(req, res) {
  return await Requests.find(req);
}

/**
 * Handles all post requests.
 * @param {object} req - request object
 * @param {object} res - response object
 * @returns {object} - status and id of created object
 */
async function handlePost(body) {
  const newRequest = await Requests.create(body);
  return newRequest.save().catch((err) => err);
}
/*
async function handleGetAll(req, res) {
  const result = {
    message: 'hello',
  };
  return result;
}
*/

const handler = {
  handleGet,
  handlePost,
};

module.exports = handler;
