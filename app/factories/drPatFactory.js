"use strict";

angular.module("DoctorsAndPatients").factory("routeFactory",function(FBUrl, $q,$http){
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