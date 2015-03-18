'use strict';

angular.module('simonsFoundationApp')
  .controller('MainCtrl', function ($scope, $http, ngTableParams, $filter, naturalSort) {
    // get the distinct values in the chrom field for typeahead
    $http.get('/api/genedata/distinctChrom/').success(function(chroms) {
      $scope.searchableBy[0].typeAheadData = naturalSort.sort(chroms);
    });

    // selectable fields and attributes to search on
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
    $scope.searchBy = $scope.searchableBy[0];  // default searchby field

    // user selectable css style options
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
    $scope.userStyle = $scope.userStyles[0];  // default css style for table
    
    var data = [];  // init search results array 
    // get search results
    $scope.getrefGeneData = function(field, criteria) {
      $http.get('/api/genedata/search/' + field + '/' + criteria).success(function(geneData) {
        data = geneData;
        $scope.tableParams.reload();
        $scope.tableParams.total(data.length);
        // validate that data was returned, if not provide error msg to user
        if(geneData.length > 0) {
          $scope.searchError = false;
        } else {
          $scope.searchError = "ERROR: No records found for '" + criteria + "'";
        }
      });
    }

    // table object, includes sorting and pagination
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

        var pageData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());                            
        $defer.resolve(pageData);
        // bar chart data
        $scope.set = {
          x: [ ],
          y: [ ]
        };
        for(var i=0; i<pageData.length; i++) {
          $scope.set.x.push(pageData[i].name);
          $scope.set.y.push(pageData[i].txEnd - pageData[i].txStart);
        }
      }

    });

    // user input validation
    $scope.notValid = true;
    $scope.validateCriteria = function(crit) {
      // will check if there is a match in typeAheadData for chrom
      // will ensure that at least one character has been entered for 
      //    fields with no typeahead data
      if(crit.length === 0 || $scope.searchBy.typeAheadData && $scope.searchBy.typeAheadData.indexOf(crit) < 0) {
        $scope.notValid = true;
      } else {
        $scope.notValid = false;
      }
    }

    // check if user pressed enter and run search
    $scope.keyPressed = function(keyEvent) {
      if (keyEvent.which === 13 && !$scope.notValid) {
        $scope.getrefGeneData($scope.searchBy.field, $scope.criteria);
      }
    }

    // CSV export of data
    $scope.csvHeader=['chrom', 'name', 'txEnd', 'txStart'];
    $scope.getData = function() {
      return data;
    }

  });
