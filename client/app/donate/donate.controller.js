'use strict';

angular.module('heartHammerApp')
  .controller('DonateCtrl', function ($scope, $state, $http) {

    $scope.donationForm = {
      amount: 10,
      sendBracelet: true
    };
    $scope.$watch('donationForm.amount', function () {
      $scope.totalCost = $scope.donationForm.amount;
      $scope.riceAmount = $scope.totalCost / 10 < 0 ? 'None' : $scope.totalCost / 10;
      $scope.toiletryAmount = $scope.totalCost / 20 < 0 ? 'None' : $scope.totalCost / 20;

      if ($scope.riceAmount > 1) {
        $scope.rice = Math.round($scope.riceAmount * 18) + ' lbs of rice'
      } else if ($scope.riceAmount === 1) {
        $scope.rice = Math.round($scope.riceAmount * 18) + ' lbs of rice'
      } else {
        $scope.rice = 'a partial bag of rice'
      }

      if ($scope.toiletryAmount > 1) {
        $scope.toiletries = Math.round($scope.toiletryAmount * 4) + ' food packs'
      } else if ($scope.toiletryAmount === 1) {
        $scope.toiletries = Math.round($scope.toiletryAmount * 4) + ' food packs'
      } else {
        $scope.toiletries = 'a partial food pack'
      }
    });

    // $scope.goToPaypal = function () {
    //   $http.post('https://www.paypal.com/cgi-bin/webscr', $scope.donationForm).
    //     success(function(data, status, headers, config) {
    //       console.log('success')
    //     }).
    //     error(function(data, status, headers, config) {
    //       console.log('error')
    //     });
    // }

    $('#shipping-check').on('click', function () {
      $("#shipping_section").toggleClass('hidden');
    });

    var from,to,subject,text;
    $scope.submitForm = function () {
      $http.post('/api/donations/send', $scope.donationForm)
      .success(function(data, headers) {
        $state.go('donate-success');
      })
      .error(function(data, headers) {
        $state.go('donate-error');

      });
    };
  });
