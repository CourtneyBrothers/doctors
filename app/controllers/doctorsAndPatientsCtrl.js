"use strict";

angular.module("DoctorsAndPatients").controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
    routeFactory.getDoctorsAndPatients()
    .then((docObjects)=>{
        $scope.listDrPat = docObjects.data.doctors;

    });
});