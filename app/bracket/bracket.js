'use strict';

angular.module('myApp.bracket', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bracket', {
    templateUrl: 'bracket/bracket.html',
    controller: 'bracketCtrl'
});
}])

.controller('bracketCtrl', ['$scope', function($scope) {

    $scope.print_text = function(){
        if ($scope.text == 4) {
            $scope.changeView = function(view){
                $location.path(view);
            }
        else if ($scope.text == 8) {
            $scope.changeView = function(view){
                $location.path(view);
            }
        else if ($scope.text == 16) {
            $scope.changeView = function(view){
                $location.path(view);
            }




        } else {
            alert("Please input 4, 8 or 16 into the search box.")
        }
    }

    


}]);