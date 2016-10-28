'use strict';

/**
 * @ngdoc function
 * @name scrapWebSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scrapWebSiteApp
 */
angular.module('scrapWebSiteApp')
  .controller('MainCtrl', function () {
  
  

    //("../../images/testPic");
  
    var photosTestList = [
      "CANNES_PLAGE.jpg",
      "Hopetoun_falls.jpg",
      "coeur-nature-ban.jpg",
      "fete-de-la-nature.jpg",
      "images.jpg",
      "marennes-plage.jpg",
      "pass_famille.jpg",
      "skiabout.jpeg",
      "telechargement.jpg",
      "toutes-les-plages.jpg"];
  
  this.photos = [];
  
  var picName = {};
  for (var i = 0; i < photosTestList.length; i++) {
    picName = {};
    picName.short = photosTestList[i] ;
    picName.full = "../../images/testPic/"+picName.short ;
    picName.mark = i % 5 ;
    this.photos.push(picName) ;
  }  
  
  });
