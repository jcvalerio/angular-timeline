'use strict';

/**
 * @ngdoc directive
 * @name angular-timeline
 * @restrict AE
 *
 * @description
 * Primary container for displaying a vertical set of timeline events.
 */
angular.module('angular-timeline').directive('timeline', function() {
  return {
    restrict: 'AE',
    transclude: true,
    scope: {
      side: '@'
    },
    controller: function() {},
    template: '<ul class="timeline"><li class="timeline-beginning"></li><div ng-transclude></div></ul>'
  };
});
