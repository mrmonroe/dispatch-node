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
 * @returns {object} - Promise with status and id of created object
 */
async function handlePost(body) {
  const newRequest = await Requests.create(body);
  return await newRequest.save().catch((err) => err);
}

/**
 * Handles an atomic one record update
 * @param {object} body - the object containing the updates
 * @param {string} id - the mongo id to update
 * @returns Promise with empty object on success
 */
async function handlePut(body, id) {
  const updatedRequest = await Requests.create(body);
  return await updatedRequest
    .findOneAndUpdate({ _id: id }, { body }, { new: true })
    .catch((err) => err);
}

/**
 * Handles an atomic one record delete
 * @param {object} body - the object containing the updates
 * @param {string} id - the mongo id to update
 * @returns Promise with acknowledged and deleted count
 */
async function handleDelete(id) {
  return await Requests.deleteOne({ _id: id }).catch((err) => err);
}

const handler = {
  handleGet,
  handlePost,
  handlePut,
  handleDelete,
};

module.exports = handler;
