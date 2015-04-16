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
      'state': 'about'
    },
    {
      'title': 'Missions',
      'state': 'missions'
    }];

    $scope.isActive = function(route) {
      return route === $state.current.name;
    };
  });