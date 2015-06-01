'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
});
}])

.controller('View1Ctrl', ['$scope', function($scope) {

    $scope.print_text = function(){
        if ($scope.text == 4 || $scope.text == 8 || $scope.text == 16) {
            $scope.changeView = function(view){
                $location.path(view);
            }
        } else {
            alert("Please input 4, 8 or 16 into the search box.")
        }
    }

    


}]);