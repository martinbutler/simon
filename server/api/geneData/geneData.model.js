'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GeneDataSchema = new Schema({
  chrom: String,
  name: String,
  txEnd: Number,
  txStart: Number
});

module.exports = mongoose.model('GeneData', GeneDataSchema);