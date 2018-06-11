var myLists = [];
var myList = new Object();
myList.name = "Cookies";
myList.quantity = 10;
myLists.push(myList);
var myList = new Object();
myList.name = "Pizza";
myList.quantity = 1;
myLists.push(myList);
var myList = new Object();
myList.name = "Meat";
myList.quantity = 5;
myLists.push(myList);
var myList = new Object();
myList.name = "Cheese";
myList.quantity = 7;
myLists.push(myList);
var myList = new Object();
myList.name = "Milk";
myList.quantity = 1;
myLists.push(myList);

(function(){
    angular.module('myapp',[]);
}());


(function(){
    var app = angular.module("myapp");
    var myController  = function($scope){
        $scope.boughtList = [];
        $scope.removeItem = function(index){
            var newItem = $scope.myLists.splice(index,1);
            var newObject = new Object();
            newObject.name = newItem[0].name;
            newObject.quantity = newItem[0].quantity;
            $scope.boughtList.push(newObject);
        };
        $scope.showLeft = function(){
            if($scope.myLists.length > 0 ){
                return false;
            }else{
                return true;
            }
        };
        $scope.showRight = function(){
            if($scope.boughtList.length > 0 ){
                return false;
            }else{
                return true;
            }
        };
        $scope.myLists = myLists;
    };
    app.controller("controller",myController);
}());
    