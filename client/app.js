var app = angular.module('chatapp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'controlLogin'

    })
    .state('register',{
        url: '/register',
        templateUrl: 'templates/register.html',
        controller: 'controlRegister'
    })
    $stateProvider.state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'templates/forgotPassword.html',
        controller: 'controlForgotPassword'

    })
    $stateProvider.state('resetPassword', {
        url: '/resetPassword',
        templateUrl: 'templates/resetPassword.html',
        controller: 'controlRestPassword'

    })
    .state('dashboard',{
        url: '/dashboard',
        templateUrl: 'templates/dashboard.html',
        controller: 'chatController'
    });
    
     $urlRouterProvider.otherwise('login');

    
});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory){
    return socketFactory({
        ioSocket: io.connect('http://localhost:3000')  //connecting socket io
    })
}])

