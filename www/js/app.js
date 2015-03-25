// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    if(window.AdMob) {
      var admob_key = "ca-app-pub-6919482594472844/7805215414";
      var admob = window.AdMob;
      console.log('admob: ' + admob);

      admob.createBanner(
        {
          'adId': admob_key,
          'position': AdMob.AD_POSITION.BOTTOM_CENTER,
          'autoShow': true
        },
        function() {
          admob.requestAd(
            { 'isTesting': false },
            function() {
              admob.showAd(true);
            },
            function() { console.log('failed to request ad'); }
          );
        },
        function() { console.log('failed to create banner view'); }
      );
    }
    if(window.analytics) {
      window.analytics.startTrackerWithId("UA-16187991-13");
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('main', {
    url: '/main',
    views: {
      'mainView': {
        templateUrl: 'templates/main.html',
        controller: 'mainCtrl'
      }
    }
  })

  .state('result', {
    url: '/result/',
    params: {name:null,lat:null,long:null,description:null,promo:null},
    views: {
      'mainView': {
        templateUrl: 'templates/result.html',
        controller: 'resultCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});
