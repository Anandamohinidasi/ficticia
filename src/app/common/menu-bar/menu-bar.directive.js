// import common from '../common.module';
angular.module("ficticia.common")
.directive('fctMenuBar', function() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'common/menu-bar/menu-bar.html',
      link: function() {

      }
    };
  });
