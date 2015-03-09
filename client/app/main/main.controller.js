'use strict';

angular.module('simonsFoundationApp')
  .controller('MainCtrl', function ($scope, $http, ngTableParams) {
    $http.get('/api/genedata/distinctChrom/').success(function(chroms) {
      var reA = /[^a-zA-Z]/g;
      var reN = /[^0-9]/g;
      $scope.searchableBy[0].typeAheadData = chroms.sort(function(a, b) {
        var aA = a.replace(reA, "");
        var bA = b.replace(reA, "");
        if(aA === bA) {
            var aN = parseInt(a.replace(reN, ""), 10);
            var bN = parseInt(b.replace(reN, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
      })
    });

    $scope.searchableBy = [{
      'field': 'chrom', 
      'selectTitle': 'Chromosome',
      'description': 'Reference sequence chromosome or scaffold'
    }, {
      'field': 'name', 
      'selectTitle': 'Name',
      'description': 'Name of gene',
      'typeAheadData': ''
    }];
    $scope.searchBy = $scope.searchableBy[0];
    var data = [];
    $scope.haveData = false;

    $scope.getrefGeneData = function(field, criteria) {
      $http.get('/api/genedata/search/' + field + '/' + criteria).success(function(geneData) {
        data = geneData;
        $scope.tableParams.reload();
        $scope.haveData = true;
      });
    }

    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
      }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });

  });
