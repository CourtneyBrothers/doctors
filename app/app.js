"use strict";

angular.module("DoctorsAndPatients", ["ngRoute"])
.constant('FBUrl','https://doctors-and-patie.firebaseio.com/')
.config($routeProvider => {
    $routeProvider
    .when("/",{
        templateUrl: "partials/doctors.html",
        controller: "doctorsAndPatientsCtrl" 
    })
    .when("/doctors",{
        templateUrl: "partials/doctors.html",
        controller: "doctorsAndPatientsCtrl"

    })
    .when("/patients",{
        templateUrl: "partials/patients.html",
        controller:"doctorsAndPatientsCtrl"
    })
    .otherwise("/");
});