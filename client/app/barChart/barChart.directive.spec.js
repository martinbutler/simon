'use strict';

describe('Directive: barChart', function () {

  // load the directive's module and view
  beforeEach(module('simonFoundationApp'));
  beforeEach(module('app/barChart/barChart.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bar-chart></bar-chart>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the barChart directive');
  }));
});