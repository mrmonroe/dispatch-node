const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const requestsSchema = new mongoose.Schema({
  companyName: String,
  companyContact: String,
  companyPhone: String,
  companyEmail: String,
  serviceAddr1: String,
  serviceAddr2: String,
  serviceCity: String,
  serviceZipCode: String,
  serviceState: [{ type: String, default: 'FL' }],
  serviceClient: String,
  serviceDates: [{ type: Date, default: Date.now }],
  serviceNotes: String,
  isAccepted: [{ type: Boolean, default: false }],
  tier: Number,
  assignedTo: [{ type: ObjectId }],
  created_at: { type: Date, default: Date.now },
  created_by_user: { type: String, default: 'System' },
});

const Requests = mongoose.model('Requests', requestsSchema);

module.exports = Requests;
