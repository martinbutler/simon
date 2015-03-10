'use strict';

angular.module('simonsFoundationApp')
  .controller('MainCtrl', function ($scope, $http, ngTableParams, $filter) {
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
    $scope.userStyles = [{
      'title': 'Default',
      'css_class': 'searchDefault'
    }, {
      'title': 'Midnight',
      'css_class': 'searchMidnight'
    }, {
      'title': 'Emerald',
      'css_class': 'searchEmerald'
    }, {
      'title': 'Blues',
      'css_class': 'searchBlues'
    }]
    $scope.searchBy = $scope.searchableBy[0];
    var data = [];
    $scope.haveData = false;
    $scope.userStyle = $scope.userStyles[0];

    $scope.getrefGeneData = function(field, criteria) {
      $http.get('/api/genedata/search/' + field + '/' + criteria).success(function(geneData) {
        if(geneData.length > 0) {
          data = geneData;
          $scope.tableParams.reload();
          $scope.tableParams.total(data.length);
          $scope.haveData = true;
          $scope.searchError = false;
        } else {
          $scope.searchError = "ERROR: No records found for '" + criteria + "'";
        }
      });
    }

    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      sorting: {}         // set a default sort
    }, {
      total: data.length, // length of data
      getData: function($defer, params) {
        // use build-in angular filter
        var orderedData = params.sorting() ?
                            $filter('orderBy')(data, params.orderBy()) :
                            data;

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });

    $scope.notValid = true;
    $scope.validateCriteria = function(crit) {
      if(crit.length === 0 || $scope.searchBy.typeAheadData && $scope.searchBy.typeAheadData.indexOf(crit) < 0) {
        $scope.notValid = true;
      } else {
        $scope.notValid = false;
      }
    }

    $scope.keyPressed = function(keyEvent) {
      if (keyEvent.which === 13 && !$scope.notValid) {
        $scope.getrefGeneData($scope.searchBy.field, $scope.criteria);
      }
    }

  });
