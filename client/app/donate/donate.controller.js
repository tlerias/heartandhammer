'use strict';

angular.module('heartHammerApp')
  .controller('DonateCtrl', function ($scope, $http) {

    $scope.donationForm = {
      amount: 10
    };

    $scope.$watch('donationForm.amount', function () {
      $scope.totalCost = $scope.donationForm.amount - 2.50;
      $scope.riceAmount = $scope.totalCost / 5 < 0 ? 'None' : $scope.totalCost / 5;
      $scope.toiletryAmount = $scope.totalCost / 10 < 0 ? 'None' : $scope.totalCost / 10;

      if ($scope.riceAmount > 1) {
        $scope.rice = Math.round($scope.riceAmount) + ' bags of rice'
      } else if ($scope.riceAmount === 1) {
        $scope.rice = Math.round($scope.riceAmount) + ' bag of rice'
      } else {
        $scope.rice = 'a partial bag of rice'
      }

      if ($scope.toiletryAmount > 1) {
        $scope.toiletries = Math.round($scope.toiletryAmount) + ' toiletry bags'
      } else if ($scope.toiletryAmount === 1) {
        $scope.toiletries = Math.round($scope.toiletryAmount) + ' toiletry bag'
      } else {
        $scope.toiletries = 'a partial toiletry bag'
      }
    });

    $scope.goToPaypal = function () {
      $http.post('https://www.paypal.com/cgi-bin/webscr', {msg:'hello word!'}).
        success(function(data, status, headers, config) {
          console.log('success')
        }).
        error(function(data, status, headers, config) {
          console.log('error')
        });
    }

    $('#shipping-check').on('click', function () {
      $("#shipping_section").toggleClass('hidden');
    });

    $scope.sendBracelet = true;
  });
