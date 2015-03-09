'use strict';

var _ = require('lodash');
var GeneData = require('./geneData.model');

// Get list of geneDatas
exports.index = function(req, res) {
  GeneData.find(function (err, geneDatas) {
    if(err) { return handleError(res, err); }
    return res.json(200, geneDatas);
  });
};

// Get a single geneData
exports.show = function(req, res) {
  GeneData.findById(req.params.id, function (err, geneData) {
    if(err) { return handleError(res, err); }
    if(!geneData) { return res.send(404); }
    return res.json(geneData);
  });
};

// Creates a new geneData in the DB.
exports.create = function(req, res) {
  GeneData.create(req.body, function(err, geneData) {
    if(err) { return handleError(res, err); }
    return res.json(201, geneData);
  });
};

// Updates an existing geneData in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  GeneData.findById(req.params.id, function (err, geneData) {
    if (err) { return handleError(res, err); }
    if(!geneData) { return res.send(404); }
    var updated = _.merge(geneData, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, geneData);
    });
  });
};

// Deletes a geneData from the DB.
exports.destroy = function(req, res) {
  GeneData.findById(req.params.id, function (err, geneData) {
    if(err) { return handleError(res, err); }
    if(!geneData) { return res.send(404); }
    geneData.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

// Get distinct of values from chrom field
exports.distinctChrom = function(req, res) {
  GeneData.distinct('chrom', function (err, geneDatas) {
    if(err) { return handleError(res, err); }
    return res.json(200, geneDatas);
  });
};

// Get distinct of values from name field
exports.names = function(req, res) {
  GeneData.distinct('name', function (err, geneDatas) {
    if(err) { return handleError(res, err); }
    return res.json(200, geneDatas);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}