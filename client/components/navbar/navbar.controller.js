'use strict';

angular.module('heartHammerApp')
  .controller('NavbarCtrl', function ($scope, $state) {
    $scope.menu = [
    {
      'title': 'Home',
      'state': 'main'
    },
    {
      'title': 'Who We Are',
      'state': 'about'
    },
    {
      'title': 'Events',
      'state': 'missions'
    },
    {
      'title': 'Donate Now',
      'state': 'donate'
    }];

    $scope.isActive = function(route) {
      return route === $state.current.name;
    };
  });