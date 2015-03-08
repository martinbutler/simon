'use strict';

angular.module('simonFoundationApp')
  .controller('FooterCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Simons Society of Fellows',
      'link': 'https://www.simonsfoundation.org/about-us/'
    }, {
      'title': 'Physical Sciences',
      'link': 'https://www.simonsfoundation.org/mathematics-and-physical-science/'
    }, {
      'title': 'Foundation News',
      'link': 'https://www.simonsfoundation.org/category/features/foundation-news/'
    }, {
      'title': 'Life Sciences',
      'link': 'https://www.simonsfoundation.org/life-sciences/'
    }, {
      'title': 'Autism Research',
      'link': 'http://www.sfari.org/'
    }, {
      'title': 'Education & Outreach',
      'link': 'https://www.simonsfoundation.org/education-outreach/'
    }, {
      'title': 'Center for Data Analysis',
      'link': 'https://www.simonsfoundation.org/simons-center-for-data-analysis/'
    }, {
      'title': 'Contact Us',
      'link': 'https://www.simonsfoundation.org/about-us/contact-us/'
    }];
    $scope.isCollapsed = false;

  });
