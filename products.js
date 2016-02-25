(function() {
	
  	angular.module('store-directives', [])
	
	// directives make HTML easier, pull in subfiles without much effort.
	// <product-title></>
	.directive('productTitle', function(){
		return {
			restrict: 'E', // type of directive = element
			templateUrl: 'components/product-title.html' // url of template
		};//directive configuration office
	})
	
	// dynimcally fillign panels. Brign controller in.
	.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'components/product-panels.html',
			controller:function(){
		      this.tab = 1;

		      this.setTab = function(newValue){
		        this.tab = newValue;
		      };

		      this.isSet = function(tabName){
		        return this.tab === tabName;
		      };
			},
			controllerAs: 'tab'
		};
	})
	.directive('productDescription', function(){
		return {
			restrict: 'A', // type of directive = element
			templateUrl: 'components/product-description.html' // url of template
		};//directive configuration office
	});//*/
	
	
})();
