"use strict";angular.module("edmApp",["ngMaterial","ngAnimate","ui.router"]),angular.module("edmApp").config(["$mdThemingProvider","$locationProvider","$urlRouterProvider","$stateProvider",function(e,r,o,l){o.otherwise("/"),r.html5Mode({enabled:!0,requireBase:!0}),l.state("app",{controllerAs:"vm",url:"/",controller:"AppController",templateUrl:"views/app.html"})}]),angular.module("edmApp").controller("AppController",["$mdSidenav",function(e){var r=this;r.toggleMenu=function(){e("left").toggle()}}]);