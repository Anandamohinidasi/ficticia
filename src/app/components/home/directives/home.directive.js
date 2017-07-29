// angular.module(require('../home.module'))
angular.module('ficticia.home')
.directive('fctHome', function() {
  return {
      restrict: 'E',
      scope: {},
    templateUrl: 'components/home/directives/home.html',
    link : function(){
        
    }
  };
});