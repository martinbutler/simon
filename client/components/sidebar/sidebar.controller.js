'use strict';

angular.module('simonsFoundationApp')
  .controller('SidebarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Mission',
      'link': 'https://www.simonsfoundation.org/about-us/'
    }, {
      'title': 'Programs',
      'link': 'https://www.simonsfoundation.org/program-areas/'
    }, {
      'title': 'Funding',
      'link': 'https://www.simonsfoundation.org/funding/funding-opportunities/'
    }, {
      'title': 'Feedback',
      'link': 'https://www.simonsfoundation.org/about-us/contact-us/'
    }];
    $scope.isCollapsed = false;

    $scope.video = {
      'title': 'Science Lives',
      'href': 'https://www.simonsfoundation.org/science_lives_video/paul-sally/',
      'src': './assets/images/paul_sally.jpg',
      'subtitle': 'Paul Sally'
    }
  });

