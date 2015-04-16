'use strict';

angular.module('heartHammerApp')
  .controller('MissionsCtrl', function ($scope, $state, $http, $stateParams, $anchorScroll, $location) {
    if ($stateParams.scrollTo) {
      $location.hash($stateParams.scrollTo);
      $anchorScroll();
    }

});
