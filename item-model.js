'use strict';

const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_URL)

const ItemSchema = new mongoose.Schema({
  name: { type: 'String', required: true },
  description: { type: 'String', required: true },
  notes: { type: 'String' },
});

module.exports = mongoose.model('item', ItemSchema);
