const mongoose = require('mongoose');

const timeEntrySchema = new mongoose.Schema({
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
});

const timesheetsSchema = new mongoose.Schema({
  user: mongoose.ObjectId,
  entries: [timeEntrySchema],
  created_at: { type: Date, default: Date.now },
  created_by_user: { type: String, default: 'System' },
});

const Timesheets = mongoose.model('Timesheets', timesheetsSchema);

exports = Timesheets;
