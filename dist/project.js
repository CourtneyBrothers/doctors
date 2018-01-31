//====================================================================================================================
// Module:    DoctorsAndPatients
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
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

}) (angular.module ('DoctorsAndPatients', ['ngRoute']));



//====================================================================================================================
// Module:    DoctorsAndPatients
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctorsAndPatients()
      .then((docObjects)=>{
          $scope.listDrPat = docObjects.data.doctors;

      });
  });

}) (angular.module ('DoctorsAndPatients', ['ngRoute']));


