'use strict';

var express = require('express');
var controller = require('./geneData.controller');

var router = express.Router();

router.get('/distinctChrom/', controller.distinctChrom);
router.get('/search/chrom/:criteria', controller.searchByChrom);
router.get('/search/name/:criteria', controller.searchByName);
router.get('/names/', controller.names);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;