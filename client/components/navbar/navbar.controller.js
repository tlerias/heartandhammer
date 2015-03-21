'use strict';

angular.module('heartHammerApp')
  .controller('NavbarCtrl', function ($scope, $state) {
    $scope.leftMenu = [
    {
      'title': 'Donate Now',
      'state': 'donate'
    },
    {
      'title': 'Who We Are',
      'state': '/'
    },
    {
      'title': 'Philippines 2015',
      'state': '/'
    },
    {
      'title': 'Connect',
      'state': '/'
    }

    ];

    $scope.isActive = function(route) {
      return route === $state.current.name;
    };
  });