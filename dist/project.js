
//====================================================================================================================
// Module:    DoctorsAndPatients
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module
  .constant('FBUrl','https://doctors-and-patie.firebaseio.com/')
  .config($routeProvider => {
      $routeProvider
      .when("/",{
          templateUrl: "partials/doctors.html",
          controller: "doctorsAndPatientsCtrl" 
      })
  
      .when("/patients",{
          templateUrl: "partials/patients.html",
          controller:"doctorsAndPatientsCtrl"
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      let getDoctorsAndPatients = () =>{
          console.log(FBUrl, "fbURL");
          // return $q((resolve,reject)=>{
          //     $http
          // //     .get(`${FBUrl}`);

          // });
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      let getDoctorsAndPatients = () =>{
          console.log(FBUrl, "fbURL");
          return $q((resolve,reject)=>{
              $http
              .get(`${FBUrl}`);

          });
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      let getDoctorsAndPatients = () =>{
          console.log(FBUrl, "fbURL");
          return $q((resolve,reject)=>{
              $http
              .get(`${FBUrl}`);

          });
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      let getDoctorsAndPatients = () =>{
          console.log(FBUrl, "fbURL");
          return $q((resolve,reject)=>{
              $http
              .get(`${FBUrl}`)
              .then(()=>{
                  resolve();
              });
          });
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      let getDoctorsAndPatients = () =>{
          console.log(FBUrl, "fbURL");
          return $q((resolve,reject)=>{
              $http
              .get(`${FBUrl}`)
              .then(()=>{
                  resolve();
              });
          });
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      let getDoctorsAndPatients = () =>{
          console.log(FBUrl, "fbURL");
          return $q((resolve,reject)=>{
              $http
              .get(`${FBUrl}`)
              .then((data)=>{
                  resolve();
              });
          });
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      let getDoctorsAndPatients = () =>{
          console.log(FBUrl, "fbURL");
          return $q((resolve,reject)=>{
              $http
              .get(`${FBUrl}`)
              .then((data)=>{
                  resolve(data);
              });
          });
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctorsAndPatients : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctorsAndPatients : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}.json`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}.json`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.listDrPat = docObjects.data.doctors;

      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects.data.doctors;

      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;

      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;

      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          console.log("doc Objects", docObjects);
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data);
                      resolve(data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          console.log("doc Objects", docObjects);
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data);
                      resolve(data.data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          console.log("doc Objects", docObjects);
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data.data);
                      resolve(data.data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          let keys = Object.keys(docObjects);
          console.log("keys",keys);
          console.log("doc Objects", docObjects);
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data.data);
                      resolve(data.data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          let keys = Object.keys(docObjects);
          console.log("keys",keys);


          console.log("doc Objects", docObjects);

          docObjects.forEach( (object)=> console.log(object,"object"));
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data.data);
                      resolve(data.data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          let keys = Object.keys(docObjects);
          console.log("keys",keys);


          console.log("doc Objects", docObjects);

          docObjects.forEach( (object)=> console.log(object,"object"));
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data.data);
                      resolve(data.data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          let keys = Object.keys(docObjects);
          console.log("keys",keys);


          console.log("doc Objects", docObjects);

          docObjects.forEach( (object)=> console.log(object,"object"));
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data.data);
                      resolve(data.data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          let keys = Object.keys(docObjects);
          console.log("keys",keys);


          console.log("doc Objects", docObjects);

          docObjects.forEach( (object)=> console.log(object,"object"));
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data.data);
                      resolve(data.data);
                  });
          });
       }
      };
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
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/doctorsAndPatientsCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("doctorsAndPatientsCtrl",function($scope, routeFactory){
      routeFactory.getDoctors()
      .then((docObjects)=>{
          $scope.doctors = docObjects;
          let keys = Object.keys(docObjects);
          console.log("keys",keys);


          console.log("doc Objects", docObjects);

          docObjects.forEach( (object)=> console.log(object,"object"));
      });
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/drPatFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("routeFactory",function(FBUrl, $q,$http){
      return{
          getDoctors : () =>{
              console.log(FBUrl, "fbURL");
              return $q((resolve,reject)=>{
                  $http
                  .get(`${FBUrl}/doctors.json`)
                  .then((data)=>{
                      console.log("data",data.data);
                      resolve(data.data);
                  });
          });
       }
      };
  });

}) (angular.module ('DoctorsAndPatients', ['ngRoute']));


