angular.module('inews.localNews', [])

.controller('localNewsController', function($scope, News, $location, geolocate) {
  $scope.news = {};
  $scope.lat =  '37.783682999999996';
  $scope.long = '-122.40906949999999';

  geolocate.getLoc(function(position) {
    $scope.position = position;
  });

  var initializeLocalNews = function(lat, long) {
    News.getNeighborhood(lat, long)
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  initializeLocalNews($scope.lat, $scope.long);

});
