// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });


   /* Charts*/

    // $('.chart').waypoint(function() {
    //     $(this).easyPieChart({
    //         barColor: '#3498db',
    //         size: '150',
    //         easing: 'easeOutBounce',
    //         onStep: function(from, to, percent) {
    //             $(this.el).find('.percent').text(Math.round(percent));
    //         }
    //     });
    // }, {
    //     triggerOnce: true,
    //     offset: 'bottom-in-view'
    // });

      $(function() {
    $('.chart').easyPieChart({
      barColor: '#3498db',
            size: '150',
      easing: 'easeOutBounce',
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
      chart.update(Math.random()*200-100);
    });
  });


    /* VEGAS Home Slider */

    $('#page-welcome').vegas({
        slides: [{
            src: 'imgs/01.jpg'
        }, {
            src: 'imgs/02.jpg'
        }, {
            src: 'imgs/03.jpg'
        }, {
            src: 'imgs/04.jpg'
        }],
        overlay: true
    });

    $("#vegas-next").click(function() {
        $('#page-welcome').vegas('next');
    });
    $("#vegas-prev").click(function() {
        $('#page-welcome').vegas('previous');
    });