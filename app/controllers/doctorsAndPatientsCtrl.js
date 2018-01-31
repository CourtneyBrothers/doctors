"use strict";

angular.module("DoctorsAndPatients").controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
    routeFactory.getDoctors()
    .then((docObjects)=>{
        $scope.doctors = docObjects;
        let keys = Object.keys(docObjects);
        console.log("keys",keys);


        console.log("doc Objects", docObjects);

        docObjects.forEach( (object)=> console.log(object,"object"));
    });
});