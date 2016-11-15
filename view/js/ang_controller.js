var app = angular.module("productapp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when("/Product/:id", {
		controller:function(){
		}
    })
});

app.controller('homeProductCtrl', function($scope, $location, $http){
    //If you have node server installed please replace below url with http://localhost:5000
    $http.get('http://ec2-35-164-39-54.us-west-2.compute.amazonaws.com').success(function(data) {
       $scope.productlist = data.items;
    });
});

app.controller('searchPageCtrl', function($scope, $location, $http){	
    //If you have node server installed please replace below url with http://localhost:5000/trending
    $http.get('http://ec2-35-164-39-54.us-west-2.compute.amazonaws.com/trending').success(function(data) {
       $scope.trendList = data.trends;
    });
});

app.controller('productPageCtrl', function($scope, $location, $http, $filter){
    var path = $location.$$path;
    productId = path.split('/').pop();
    $scope.productId = productId;
    
    //If you have node server installed please replace below url with http://localhost:5000
    $http.get('http://ec2-35-164-39-54.us-west-2.compute.amazonaws.com').success(function(data) {
       single_object = $filter('filter')(data.items, function (d) {return d.product_id === productId;})[0];
       $scope.productAuImage = single_object.product_au_image;
       $scope.product_seller = single_object.product_seller;
       $scope.product_distance = single_object.product_distance;
       $scope.product_image = single_object.product_image;
       $scope.product_name = single_object.product_name;
       $scope.product_price = single_object.product_price;
       $scope.product_likes = single_object.product_likes;
       $scope.product_desc = single_object.product_desc;
       $scope.product_tags = single_object.product_tags;
       $scope.product_comments = single_object.product_comments;
       $scope.product_image_array = single_object.product_image_array;

       setTimeout(function(){
            $('.main-gallery').flickity({
              // options
              cellAlign: 'left',
              contain: true
            });
        }, 300);

    });

});


