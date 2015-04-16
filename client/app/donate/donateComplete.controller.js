'use strict';

angular.module('heartHammerApp')
  .controller('DonateCompleteCtrl', function ($scope, $state, $http, $stateParams) {
    console.log($stateParams)
    $scope.message = $stateParams.message;
  });
