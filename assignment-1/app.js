(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.fruit_list = "";
        $scope.message = "";

        $scope.sayMessage = function () {
            if ($scope.fruit_list.trim() == "") {
                $scope.message = "Please enter data first";
                return;
            }
            var amount_fruits = calcFruits($scope.fruit_list);
            if (amount_fruits <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };

        function calcFruits(fruit_list) {
            return fruit_list.split(",").length;
        }
    }

})();