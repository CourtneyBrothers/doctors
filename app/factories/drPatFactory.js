"use strict";

angular.module("DoctorsAndPatients").factory("routeFactory",function(FBUrl, $q,$http){
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