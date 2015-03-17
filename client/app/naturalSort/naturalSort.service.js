'use strict';

angular.module('simonsFoundationApp')
  .factory('naturalSort', function () {
    // Service logic
    var serviceSort = {};
    var reA = /[^a-zA-Z]/g;
    var reN = /[^0-9]/g;
    serviceSort.sort = function(data) {
      data.sort(function(as, bs) {
        var a, b, a1, b1, i= 0, n, L,
        rx=/(\.\d+)|(\d+(\.\d+)?)|([^\d.]+)|(\.\D+)|(\.$)/g;
        if(as=== bs) return 0;
        a= as.toLowerCase().match(rx);
        b= bs.toLowerCase().match(rx);
        L= a.length;
        while(i<L){
          if(!b[i]) return 1;
          a1= a[i],
          b1= b[i++];
          if(a1!== b1){
            n= a1-b1;
              if(!isNaN(n)) return n;
              return a1>b1? 1:-1;
          }
        }
        return b[i]? -1:0;
      })
      return data;
    }

    var meaningOfLife = 42;

    // Public API here
    return serviceSort;
  });
