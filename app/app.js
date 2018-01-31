"use strict";

angular.module("DoctorsAndPatients", ["ngRoute"])
.config($routeProvider => {
    $routeProvider

    .when("/doctors",{
        templateUrl: "partials/doctors.html",
        controller: "doctorsCtrl"

    })
    .when("/patients",{
        templateUrl: "partials/patients.html",
        controller:"patientsCtrl"
    })
    .otherwise("/");
});