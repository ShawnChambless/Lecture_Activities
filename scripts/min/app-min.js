app=angular.module("routingPractice",["ngRoute"]),app.config(function(e){e.when("/home",{templateUrl:"html/page1.html",controller:"ctrl1",resolve:{user:function(e){return e.getUser()}}}).when("/away/:lat",{templateUrl:"/html/away.html",controller:"ctrl2",resolve:{weather:function(e,t){console.log(t.curent.params)}}}).otherwise("home")});