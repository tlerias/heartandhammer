'use strict';

angular.module('heartHammerApp')
  .controller('DonateCtrl', function ($scope, $state, $http) {

    $scope.donationForm = {
      amount: '',
      sendBracelet: true
    };
    $scope.$watch('donationForm.amount', function () {
      $scope.totalCost = $scope.donationForm.amount;
      $scope.riceAmount = $scope.totalCost / 0.55 < 0 ? 'None' : $scope.totalCost / 0.55;
      $scope.toiletryAmount = $scope.totalCost / 5 < 0 ? 'None' : $scope.totalCost / 5;

      if ($scope.riceAmount > 1) {
        $scope.rice = Math.round($scope.riceAmount) + ' lbs of rice'
      } else if ($scope.riceAmount === 1) {
        $scope.rice = Math.round($scope.riceAmount) + ' lbs of rice'
      } else {
        $scope.rice = 'a partial bag of rice'
      }

      if ($scope.toiletryAmount > 1) {
        $scope.toiletries = Math.round($scope.toiletryAmount) + ' food packs'
      } else if ($scope.toiletryAmount === 1) {
        $scope.toiletries = Math.round($scope.toiletryAmount) + ' food pack'
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

    // $scope.invalidNumberInput = function (form) {
    //   if (form.$dirty && ($scope.donationForm.amount < 1 || typeof $scope.donationForm.amount === 'undefined' )) {

    //     return true
    //   } else {
    //     return false;
    //   }
    // };

    // $scope.$watch('amount', function () {
    //   if ($scope.donationForm.amount.$dirty && donationForm.amount < 1) {
    //     return true
    //   } else {
    //     return false;
    //   }
    // });

    $('#shipping-check').on('click', function () {
      $("#shipping_section").toggleClass('hidden');
    });

    var from,to,subject,text;
    $scope.submitForm = function () {
      $http.post('/api/donations/send', $scope.donationForm)
      .success(function(data, headers) {
        $state.go('donate-submitted');
      })
      .error(function(data, headers) {
        $state.go('donate-submitted');

      });
    };
  });
