angular.module('inews.localNews', [])

.controller('localNewsController', function($scope, News, $location, geolocate) {
  $scope.localnews = {};
  $scope.searchnews = {};

  $scope.lat =  '37.793595';
  $scope.long = '-122.401307';

  geolocate.getLoc(function(position) {
    $scope.position = position;
  });

  var query;
  var initializeLocalNews = function(lat, long) {
    News.getNeighborhood(lat, long)
      .then(function(data) {
        query = data.neighbourhood.split(' ').join('+') + '+' + data.city.split(' ').join('+');
        return News.getBingNews(query);
      })
      .then(function(data) {
        $scope.localnews = data.data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  $scope.initializeSearch = function(query1) {
      News.getBingNews(query1)
      .then(function(data) {
        $scope.searchnews = data.data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  initializeLocalNews($scope.lat, $scope.long);

});
