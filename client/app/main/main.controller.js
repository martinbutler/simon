'use strict';

angular.module('simonsFoundationApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.searchableBy = [{'field': 'chrom', 
      'selectTitle': 'Chromosome',
      'description': 'Reference sequence chromosome or scaffold'
    }, {'field': 'name', 
      'selectTitle': 'Name',
      'description': 'Name of gene',
      'typeAheadData': ''
    }];
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
    $scope.searchBy = $scope.searchableBy[0];
    $scope.getrefGeneData = function(field, criteria) {
      $http.get('/api/genedata/search/' + field + '/' + criteria).success(function(data) {
      });
    }

  });
