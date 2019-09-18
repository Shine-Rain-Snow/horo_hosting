// (function($) {
//     $.fn.extend({
//         gScrollingCarousel: function(options) {

         function gScrollingCarousel() {
            var defaults = {
                scrolling: true,
                amount: false
            };
            var options = {};
            options = $.extend(defaults, options);

            var supportsTouch = false;

            if ('ontouchstart' in window){
                supportsTouch = true;
                } else if(window.navigator.msPointerEnabled) {
                supportsTouch = true;
                } else if ('ontouchstart' in document.documentElement) {
                supportsTouch = true;
            }

            if (!supportsTouch){
                var x,left,down,newX,oldX,maxScrollLeft,am,amX,amL,leftElem,rightElem,currx,items,element,elements;
                element = $(this);
                if(options.amount == false) {
                    amount = element.children(":first").outerWidth(true);
                }else{
                    amount = options.amount;
                }
                leftElem = $('<span />').addClass('jc-left');
                rightElem = $('<span />').addClass('jc-right');
                element.parent().append(leftElem).append(rightElem);

                maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
                left = element.scrollLeft();
                if(maxScrollLeft == left) {
                    rightElem.hide();
                } else {
                    rightElem.show();
                }
                if(left == 0) {
                    leftElem.hide();
                } else {
                    leftElem.show();
                }

                if(options.scrolling){
                    element.bind("DOMMouseScroll mousewheel", function (event) {    
                            var oEvent = event.originalEvent, 
                            direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
                            position = element.scrollLeft();
                        position += direction > 0 ? -amount : amount;

                        $(this).scrollLeft(position);
                        event.preventDefault();
                        maxScrollLeft = element.get(0).scrollWidth - element.get(0).clientWidth;
                        left = element.scrollLeft();
                        if(maxScrollLeft == left) {
                            rightElem.fadeOut(200);
                        } else {
                            rightElem.fadeIn(200);
                        }
                        if(left == 0) {
                            leftElem.fadeOut(200);
                        } else {
                            leftElem.fadeIn(200);
                        }

                    });
                }
                element.bind("mousedown", function(e){
                    e.preventDefault();
                    down = true;
                    x = e.pageX;
                    left = $(this).scrollLeft();
                }).bind("mousemove", function(e){
                    
                });
                $(window).on('resize', function(){
                    element.each( function(){
                        elements = $(this);
                        maxScrollLeft = elements.get(0).scrollWidth - elements.get(0).clientWidth;
                        left = elements.scrollLeft();
                        if(maxScrollLeft == left) {
                            rightElem.fadeOut(200);
                        } else {
                            rightElem.fadeIn(200);
                        }
                        if(left == 0) {
                            leftElem.fadeOut(200);
                        } else {
                            leftElem.fadeIn(200);
                        }
                    });
                });
                
                $(document).on("mouseup", function(e){ //globally remove nonclicks onmouseup
                    setTimeout(function(){
                        element.removeClass("nonclick");
                        down=false;
                    },1);
                });
            }
        }

      //  module.exports = gScrollingCarousel;
    // });
// })(jQuery);


