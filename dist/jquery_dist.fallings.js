/*!
 * 
 * jQuery Fallings - v0.6.0
 * A simple parallax jquery plugin.
 * https://github.com/fuhton/fallings/
 * 
 * Made by Nick Smith
 * Under MIT License
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	(function ($, window, document) {
	  // Create the defaults once
	  var pluginName = 'fallings';
	  var defaults = {
	    velocity: 0,
	    initialPosition: 0,
	    bgParallax: false,
	    bgPercent: '0%',
	    onClass: 'fallings-visible',
	    offClass: 'fallings-invisible'
	  };
	
	  // The actual plugin constructor
	  function Fallings(element, options) {
	    var self = this;
	
	    self.element = element;
	    self.$element = $(self.element);
	    self.options = $.extend({}, defaults, options);
	    self.defaults = defaults;
	    self.name = pluginName;
	    self.init();
	  }
	
	  Fallings.prototype.init = function init() {
	    var self = this;
	    self.didScroll = false;
	    self.startPosition = self.$element.position().top;
	    self.height = self.$element.outerHeight(true);
	    self.parent = jQuery(self.$element).parent();
	    self.setCss();
	    self.watchScroll();
	  };
	  // set base position and height for the specified element
	  Fallings.prototype.setCss = function setCss() {
	    var self = this;
	    self.$element.css({ position: 'absolute' });
	    self.changeHeight();
	  };
	  // watch the scroll and set to an interval
	  Fallings.prototype.watchScroll = function watchScroll() {
	    var self = this;
	    $(document).scroll(function () {
	      self.didScroll = true;
	    });
	    setInterval(function () {
	      if (self.didScroll) {
	        self.didScroll = false;
	        self.changeHeight();
	      }
	    }, 10);
	  };
	
	  // main height manipulator
	  Fallings.prototype.changeHeight = function changeHeight() {
	    var self = this;
	    self.$window = $(window);
	    self.offsetTop = self.$element.offset().top;
	    self.scrollTop = self.$window.scrollTop();
	    self.height = self.$window.height();
	    self.position = self.startPosition;
	
	    // Review positioning and append callback class
	    if (self.offsetTop >= self.scrollTop + self.height || self.offsetTop < self.scrollTop) {
	      self.$element.removeClass(self.options.onClass);
	      self.$element.addClass(self.options.offClass);
	      self.position = self.startPosition - self.scrollTop * self.options.velocity;
	    } else {
	      self.$element.removeClass(self.options.offClass);
	      self.$element.addClass(self.options.onClass);
	      self.position = self.startPosition - self.scrollTop * self.options.velocity;
	    }
	
	    // check if there is a start position assigned.
	    self.position += self.options.initialPosition;
	
	    // check it the background is being manipulated or the element
	    if (self.options.bgParallax === true) {
	      self.changeBgPosition();
	    } else {
	      self.$element.css({ top: self.position });
	    }
	  };
	  // if the plugin is being applied to a background image
	  Fallings.prototype.changeBgPosition = function changeBgPosition() {
	    var self = this;
	    self.$element.css('background-position', '');
	    self.$element.css('background-position', self.options.bgPercent + ' ' + self.position + 'px');
	  };
	
	  // A really lightweight plugin wrapper around the constructor,
	  // preventing against multiple instantiations
	  jQuery.fn.fallings = function fallings(options) {
	    var self = this;
	    return self.each(function () {
	      if (!$.data(self, 'plugin_' + pluginName)) {
	        $.data(self, 'plugin_' + pluginName, new Fallings(self, options));
	      }
	    });
	  };
	})(jQuery, window, document);

/***/ }
/******/ ]);
//# sourceMappingURL=jquery_dist.fallings.js.map