angular.module('starter.controllers', ['uiGmapgoogle-maps'])

.controller('mainCtrl', function($state, $stateParams , $scope, $http, $ionicLoading, $ionicPopup) {
  if(window.analytics){
    window.analytics.trackView('Home');
  }
  $scope.universal = function() {
    $ionicLoading.show({
      template: '<i class="icon ion-loading-a" style="font-size:32px;"></i><br>Choosing for you...'
    })
    $http({
        url: 'http://www.winwanwon.in.th/BangmodFood/random.php',
        method: "POST",
        data: {"filter":"universal"}
      }).success(function(data, status, headers, config) {
      console.log(data);
      $ionicLoading.hide()
      $state.go('result', data, {reload: true});
    }).
    error(function(data, status, headers, config) {
      $ionicLoading.hide()
      alert('Cannot connect to server.');
    });
    if(window.analytics){
      window.analytics.trackEvent('filter', 'click', 'universal');
    }
  }

  $scope.lunch = function() {
    $ionicLoading.show({
      template: '<i class="icon ion-loading-a" style="font-size:32px;"></i><br>Thinking where to eat lunch...'
    })
    $http({
        url: 'http://www.winwanwon.in.th/BangmodFood/random.php',
        method: "POST",
        data: {"filter":"lunch"}
      }).success(function(data, status, headers, config) {
      console.log(data);
      $ionicLoading.hide()
      $state.go('result', data, {reload: true});
    }).
    error(function(data, status, headers, config) {
      $ionicLoading.hide()
      alert('Cannot connect to server.');
    });
    if(window.analytics){
      window.analytics.trackEvent('filter', 'click', 'lunch');
    }
  }

  $scope.better = function() {
    $ionicLoading.show({
      template: '<i class="icon ion-loading-a" style="font-size:32px;"></i><br>Choosing better meal for you...'
    })
    $http({
        url: 'http://www.winwanwon.in.th/BangmodFood/random.php',
        method: "POST",
        data: {"filter":"better"}
      }).success(function(data, status, headers, config) {
      console.log(data);
      $ionicLoading.hide()
      $state.go('result', data, {reload: true});
    }).
    error(function(data, status, headers, config) {
      $ionicLoading.hide()
      alert('Cannot connect to server.');
    });
    if(window.analytics){
      window.analytics.trackEvent('filter', 'click', 'better');
    }
  }

  $scope.dessert = function() {
    $ionicLoading.show({
      template: '<i class="icon ion-loading-a" style="font-size:32px;"></i><br>So sweet!'
    })
    $http({
        url: 'http://www.winwanwon.in.th/BangmodFood/random.php',
        method: "POST",
        data: {"filter":"dessert"}
      }).success(function(data, status, headers, config) {
      console.log(data);
      $ionicLoading.hide()
      $state.go('result', data, {reload: true});
    }).
    error(function(data, status, headers, config) {
      $ionicLoading.hide()
      alert('Cannot connect to server.');
    });
    if(window.analytics){
      window.analytics.trackEvent('filter', 'click', 'dessert');
    }
  }

  $scope.buffet = function() {
    $ionicLoading.show({
      template: '<i class="icon ion-loading-a" style="font-size:32px;"></i><br>Calories OVER 9000!'
    })
    $http({
        url: 'http://www.winwanwon.in.th/BangmodFood/random.php',
        method: "POST",
        data: {"filter":"buffet"}
      }).success(function(data, status, headers, config) {
      console.log(data);
      $ionicLoading.hide()
      $state.go('result', data, {reload: true});
    }).
    error(function(data, status, headers, config) {
      $ionicLoading.hide()
      alert('Cannot connect to server.');
    });
    if(window.analytics){
      window.analytics.trackEvent('filter', 'click', 'buffet');
    }
  }

  $scope.showAbout = function() {
   var alertPopup = $ionicPopup.alert({
     title: '<b>About BangmodFood</b>',
     template: 'Developer: Warat Kaweepornpoj (CPE28)<br>Photographer: Sakan Komolvatin (CPE28)<br><br>Contact: winwanwon123[at]gmail.com'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
  };
})

.controller('resultCtrl', function($state, $scope, $stateParams){
    console.log('stateParams: ', $stateParams);
    $scope.name = $stateParams.name;
    $scope.description = $stateParams.description;
    $scope.promo = $stateParams.promo;
    $scope.map = {center: { latitude: $stateParams.lat, longitude: $stateParams.long }, zoom :16};
    $scope.options = {
      scrollwheel: false,
      draggable: false
    }

    $scope.marker = {
      id: 0,
      coords: {
        latitude: $stateParams.lat, longitude: $stateParams.long
      },
      options: { draggable: false, visible: true }
    };

    if($stateParams.promo){
      $scope.promoClass = 'show';
    } else {
      $scope.promoClass = 'hidden';
    }
});
