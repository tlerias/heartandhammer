'use strict';

angular.module('heartHammerApp')
  .controller('NavbarCtrl', function ($scope, $state) {
    $scope.menu = [
    {
      'title': 'Donate Now',
      'state': 'donate'
    },
    {
      'title': 'Who We Are',
      'state': '/'
    },
    {
      'title': 'Mission 2015',
      'state': '/'
    },
    {
      'title': 'Connect',
      'state': '/'
    }];

    $scope.isActive = function(route) {
      return route === $state.current.name;
    };
  });