'use strict';

angular.module('simonFoundationApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Simons Society of Fellows',
      'link': 'https://www.simonsfoundation.org/simons-society-of-fellows/',
      'style': 'menu1'
    }, {
      'title': 'Data Resources',
      'link': 'https://www.simonsfoundation.org/simons-foundation-data-resources/',
      'style': 'menu1'
    }, {
      'title': 'Foundation News',
      'link': 'https://www.simonsfoundation.org/category/features/foundation-news/',
      'style': 'menu1'
    }, {
      'title': 'Multimedia',
      'link': 'https://www.simonsfoundation.org/category/multimedia/',
      'style': 'menu1'
    }, {
      'title': 'Funding',
      'link': 'https://www.simonsfoundation.org/funding/funding-opportunities/',
      'style': 'menu1'
    }, {
      'title': 'Lectures',
      'link': 'https://www.simonsfoundation.org/lectures/',
      'style': 'menu1'
    }, {
      'title': 'About Us',
      'link': 'https://www.simonsfoundation.org/about-us/',
      'style': 'menu1'
    }];
    $scope.menu.reverse();
   $scope.menu2 = [{
      'title': 'Mathematics & Physical Sciences',
      'link': 'https://www.simonsfoundation.org/mathematics-and-physical-science/',
      'style': 'menu2'
    }, {
      'title': 'Life Sciences',
      'link': 'https://www.simonsfoundation.org/life-sciences/',
      'style': 'menu2'
    }, {
      'title': 'Autism Research',
      'link': 'http://sfari.org',
      'style': 'menu2'
    }, {
      'title': 'Education & Outreach',
      'link': 'https://www.simonsfoundation.org/education-outreach/',
      'style': 'menu2'
    }, {
      'title': 'Simons Center for Data Analysis',
      'link': 'https://www.simonsfoundation.org/simons-center-for-data-analysis/',
      'style': 'menu2'
    }];
    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
