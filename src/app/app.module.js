// import common from './common/common.module';
// import home from './components/home/home.module';
// import searchResult from './components/search-result/search-result.module'
// import videos from './components/videos/videos.module'

// angular.module('common', [])
//   .directive('fctMenuBar', function() {
//     return {
//       restrict: 'E',
//       scope: {},
//       template: 'munu bar',
//       link: function() {

//       }
//     };
//   });

angular.module("ficticia", [
    'ficticia.common',
    'ficticia.home',
    'searchResult',
    'videos',
    'ngMaterial'
]);


// var load = require.context('./', true, /\.js$/);
// load.keys().forEach(load); 
// console.log(load.keys())
// module.exports = angular.module('ficticia', []).name;