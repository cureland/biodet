jQuery(document).ready(function($) {
    // -------------spin-------------------
    var resultWrapper = $('.spin-result-wrapper, .pop-up-window');
    var wheel = $('.wheel-img');

    $('.spin_active').on("click", function(event) {
        $(this).off(event);
        if (wheel.hasClass('rotated')) {
            resultWrapper.css({
                'display': 'block'
            });
        } else {
            wheel.addClass('super-rotation');
            setTimeout(function() {
                resultWrapper.css({
                    'display': 'block'
                });
            }, 8000);
            setTimeout(function() {
                $('.spin-wrapper').slideUp();
                $('.order_block').slideDown();
                $('#clock').yuukCountDown({
            starttime: makeDate(),
            endtime: makeDate(10),
            endCallBack: function() {
                $('.countdown-time').append('00:00:00');
                $('.clearfix').hide();
            }
        });
        $('#clock').yuukCountDown();             
            }, 9500);
            wheel.addClass('rotated');
        }
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            resultWrapper.fadeOut();
        }
    });

    $('.close-popup, .spin-result-wrapper').click(function() {
        resultWrapper.fadeOut();
    });

    function makeDate(n = 0) {
        var thisDate = new Date();
        var minute = thisDate.getMinutes() + n;
        var month = thisDate.getMonth() + 1;
        var final = thisDate.getFullYear() + '/' + month + '/' + thisDate.getDate() + ' ' + thisDate.getHours() + ':' + minute + ':' + thisDate.getSeconds();
        return final;
    }
    //spoil
    $('.cenz-image').on('click', function() {
        $('.cenz-image').toggleClass('cenz-show');
    })

    // --------------SCROLL-------------------
    $("a").on("touchend, click", function(e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: $('.toform').offset().top }, 400);
    });
    $(".ac_footer a, .ac_gdpr_fix a").unbind("click");
});