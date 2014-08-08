var app = angular.module('RPSLS', ['ngAnimate']);

app.controller('MainCtrl', function ($scope) {
  $scope.choices = [
    {choice: 'Rock', result: 'You Lost'},
    {choice: 'Paper', result: 'You Won'},
    {choice: 'Scissors', result: 'You Lost'},
    {choice: 'Lizard', result: 'You Won'},
    {choice: 'Spock', result: 'You Lost'},
  ];
});

// Math.floor(Math.random()*5+1);

app.directive('choice', function () {
  var controller = function ($scope) {
    $scope.showResult = false;
  };

  return {
    restrict: 'E',
    scope: true,
    controller: controller
  }
});

app.animation('.choice-animation', function () {
  TweenLite.set('.cardWrapper', {perspective: 800});
  TweenLite.set('.card', {transformStyle: 'preserve-3d'});
  TweenLite.set('.back', {rotationY: -180});
  TweenLite.set(['.back', '.front'], {backfaceVisibility: 'hidden'});

  return {
    beforeAddClass: function (element, className, done) {
      if (className == 'choice') {
        TweenLite.to(element.find('.card'), 1.2,
          {rotationY:180, ease:Back.easeOut, onComplete:done});
      }
      else {
        done();
      }
    },

    beforeRemoveClass: function (element, className, done) {
      if (className == 'choice') {
        TweenLite.to(element.find('.card'), 1.2,
          {rotationY:0, ease:Back.easeOut, onComplete:done});
      }
      else {
        done();
      }
    }
  };
});