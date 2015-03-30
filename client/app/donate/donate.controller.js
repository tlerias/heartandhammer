'use strict';

angular.module('heartHammerApp')
  .controller('DonateCtrl', function ($scope, $http) {

    $scope.goToPaypal = function () {
      $http.post('https://www.paypal.com/cgi-bin/webscr', {msg:'hello word!'}).
        success(function(data, status, headers, config) {
          console.log('success')
        }).
        error(function(data, status, headers, config) {
          console.log('error')
        });
    }
  });
