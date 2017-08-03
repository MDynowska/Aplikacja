angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu', {
    url: '/Menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/Login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/Signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.status', {
    url: '/Status',
    views: {
      'side-menu21': {
        templateUrl: 'templates/status.html',
        controller: 'statusCtrl'
      }
    }
  })

  .state('menu.group', {
    url: '/Group',
    views: {
      'side-menu21': {
        templateUrl: 'templates/group.html',
        controller: 'groupCtrl'
      }
    }
  })

  .state('menu.homeoffice', {
    url: '/Homeoffice',
    views: {
      'side-menu21': {
        templateUrl: 'templates/homeoffice.html',
        controller: 'homeofficeCtrl'
      }
    }
  })

  .state('menu.sick', {
    url: '/Sick',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sick.html',
        controller: 'sickCtrl'
      }
    }
  })

  .state('menu.vacation', {
    url: '/Vaction',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vacation.html',
        controller: 'vacationCtrl'
      }
    }
  })

  .state('menu.training', {
    url: '/Training',
    views: {
      'side-menu21': {
        templateUrl: 'templates/training.html',
        controller: 'trainingCtrl'
      }
    }
  })

  .state('menu.late', {
    url: '/Late',
    views: {
      'side-menu21': {
        templateUrl: 'templates/late.html',
        controller: 'lateCtrl'
      }
    }
  })

  .state('menu.editProfile', {
    url: '/Edit',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('menu.myProfile', {
    url: '/My profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('menu.moreInformation', {
    url: '/more',
    views: {
      'side-menu21': {
        templateUrl: 'templates/moreInformation.html',
        controller: 'moreInformationCtrl'
      }
    }
  })

  .state('menu.sendMessage', {
    url: '/message',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sendMessage.html',
        controller: 'sendMessageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Login')


});