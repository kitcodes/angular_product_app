var ProductControl = {
    init: function(){
        this.rangeSlider();
    },
    rangeSlider: function(){
        var $document = $(document);
        var selector = '[data-rangeslider]';
        var $element = $(selector);
        var textContent = ('textContent' in document) ? 'textContent' : 'innerText';
        function valueOutput(element) {
            var value = element.value;
            var output = element.parentNode.getElementsByTagName('output')[0] || element.parentNode.parentNode.getElementsByTagName('output')[0];
            output[textContent] = value;
        }
        $document.on('input', 'input[type="range"], ' + selector, function(e) {
            valueOutput(e.target);
        });
        $('.product-range-slider').rangeslider({

            // Deactivate the feature detection
            polyfill: false,

            // Callback function
            onInit: function() {
                valueOutput(this.$element[0]);
            },

            // Callback function
            onSlide: function(position, value) {

            },

            // Callback function
            onSlideEnd: function(position, value) {

            }
        });
    }

}

$(document).ready(function(){
    ProductControl.init();
});