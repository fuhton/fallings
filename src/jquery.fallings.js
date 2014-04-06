// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

        // Create the defaults once
        var pluginName = "fallings";
        defaults = {
            velocity: 0,
            initialPosition: 0,
            bgParallax: false,
            bgPercent: "0%",
            onClass: "fallings-visible",
            offClass: "fallings-invisible"
        };

        // The actual plugin constructor
        function Fallings ( element, options ) {
            var self = this;
            self.element = element;
            self.$element = $(self.element);
            self.options = $.extend( {}, defaults, options );
            self._defaults = defaults;
            self._name = pluginName;
            self.init();
        }

        Fallings.prototype = {
            // init function
            init: function () {
                var self = this;
                self.didScroll = false;
                self.startPosition = self.$element.position().top;
                self.height = self.$element.outerHeight(true);
                self.parent = jQuery(self.$element).parent();
                self.setCss();
                self.watchScroll();
            },
            // set base position and height for the specified element
            setCss: function () {
                var self = this;
                self.$element.css( { position: "absolute" } );
                self.changeHeight();
            },
            // watch the scroll and set to an interval
            watchScroll: function () {
                var self = this;
                $(document).scroll(function() {
                        self.didScroll = true;
                    });
                setInterval(function() {
                        if (self.didScroll)
                            {
                                self.didScroll=false;
                                self.changeHeight();
                            }
                    }, 10 );

            },

            //main height manipulator
            changeHeight: function () {
                var self = this;
                self.$window = $(window);
                self.offsetTop = self.$element.offset().top;
                self.scrollTop =  self.$window.scrollTop();
                self.height = self.$window.height();
                self.position = self.startPosition;

                // Review positioning and append callback class
                if ( self.offsetTop >= ( self.scrollTop+self.height ) || self.offsetTop < self.scrollTop ) {
                    self.$element.removeClass(self.options.onClass);
                    self.$element.addClass(self.options.offClass);
                    self.position = self.startPosition - self.scrollTop * self.options.velocity;
                } else {
                    self.$element.removeClass(self.options.offClass);
                    self.$element.addClass(self.options.onClass);
                    self.position = self.startPosition - self.scrollTop * self.options.velocity;
                }

                // check if there is a start position assigned.
                self.position = self.position + self.options.initialPosition;

                // check it the background is being manipulated or the element
                if ( self.options.bgParallax === true ) {
                    self.changeBgPosition();
                } else {
                    self.$element.css( { top: self.position } );
                }
            },
            // if the plugin is being applied to a background image
            changeBgPosition: function () {
                var self = this;
                self.$element.css("background-position", "");
                self.$element.css("background-position", self.options.bgPercent + " " + self.position + "px" );
            }
        };

        // A really lightweight plugin wrapper around the constructor,
        // preventing against multiple instantiations
        $.fn.fallings = function ( options ) {
            var self = this;
            return self.each(function() {
                    if ( !$.data( self, "plugin_" + pluginName ) ) {
                        $.data( self, "plugin_" + pluginName, new Fallings( self, options ) );
                    }
                });
        };

    })( jQuery, window, document );
