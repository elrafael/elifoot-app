angular.module('Elifoot').filter('teamIdFilter', function(){

	return function(url){
		return url.slice( (url.lastIndexOf('/') + 1) - url.length );
	};

});