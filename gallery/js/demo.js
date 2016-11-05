/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'

  var linksContainer = $('#links')
  var carouselLinks = []
  var max = 64;
  var dir = "images/";
  var i = 1;

  for (i; i < max; i++) {

    $('<a/>')
      .append($('<img>').prop('src', dir + i + '_s.jpeg'))
      .prop('href', dir + i + '.jpeg')
      .prop('title', i)
      .attr('data-gallery', '')
      .appendTo(linksContainer)

    carouselLinks.push({
          href: dir + i + '.jpeg',
          title: i
        })
  }





  // Load demo images from flickr:
  // $.ajax({
  //   // Flickr API is SSL only:
  //   // https://code.flickr.net/2014/04/30/flickr-api-going-ssl-only-on-june-27th-2014/
  //   url: 'https://api.flickr.com/services/rest/',
  //   data: {
  //     format: 'json',
  //     method: 'flickr.interestingness.getList',
  //     api_key: '7617adae70159d09ba78cfec73c13be3' // jshint ignore:line
  //   },
  //   dataType: 'jsonp',
  //   jsonp: 'jsoncallback'
  // }).done(function (result) {
  //   var carouselLinks = []
  //   var linksContainer = $('#links')
  //   var baseUrl
  //   // Add the demo images as links with thumbnails to the page:
  //   $.each(result.photos.photo, function (index, photo) {
  //     baseUrl = 'https://farm' + photo.farm + '.static.flickr.com/' +
  //     photo.server + '/' + photo.id + '_' + photo.secret
  //     $('<a/>')
  //       .append($('<img>').prop('src', baseUrl + '_s.jpg'))
  //       .prop('href', baseUrl + '_b.jpg')
  //       .prop('title', photo.title)
  //       .attr('data-gallery', '')
  //       .appendTo(linksContainer)
  //     carouselLinks.push({
  //       href: baseUrl + '_c.jpg',
  //       title: photo.title
  //     })
  //   })




    // Initialize the Gallery as image carousel:
    blueimp.Gallery(carouselLinks, {
      container: '#blueimp-image-carousel',
      carousel: true
    })
  // })

})
