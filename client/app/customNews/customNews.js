angular.module('inews.customNews', [])

.controller('customNewsController', function($scope, News, $location) {
  $scope.custom1news = {};
  $scope.custom2news = {};

  var query1 = 'Fremont+CA';
  var query2 = 'Oakland+CA';

  var initializeCustom1 = function() {
      News.getBingNews(query1)
      .then(function(data) {
        $scope.custom1news = data.data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  var initializeCustom2 = function() {
      News.getBingNews(query2)
      .then(function(data) {
        $scope.custom2news = data.data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  initializeCustom1();
  initializeCustom2();
});
