'use strict';

describe('Service: naturalSort', function () {

  // load the service's module
  beforeEach(module('simonsFoundationApp'));

  // instantiate service
  var naturalSort;
  beforeEach(inject(function (_naturalSort_) {
    naturalSort = _naturalSort_;
  }));

  it('should do something', function () {
    expect(!!naturalSort).toBe(true);
  });

});
