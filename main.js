$(document).ready(
	$(function () {
        $(".navbar-left a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {
                    window.location.hash = hash;
                });
            }
        });
    });

    $(function () {
        $(window).scroll(function () {
            for (var i = 1; i <= 4; i++) {
                if ($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 300) {
                    $(".navbar-left li").removeClass("current");
                    $(".navbar-left li:nth-child(" + i + ")").addClass("current");
                }
            }
        });
    }); 

    $(function () {
        $(".detail").hide();
        $(".each-proj").mouseover(function () {
            $($(this).attr("href")).hide();
            $($(this).attr("target")).show();

        });
        $(".each-proj").mouseout(function () {
            $($(this).attr("href")).show();
            $($(this).attr("target")).hide();
        });

        for (var i = 2; i <= 5; i++) {
            $("#proj" + i).hide();
        }
        $(".proj-lists li").click(function () {
            for (var i = 1; i <= 5; i++) {
                $("#proj" + i).hide();
            }
            $($(this).attr("href")).show();
            $(".proj-lists .current").removeClass("current");
            $(this).addClass("current");

            return false;
        });
    });

    $(function () {
        $(".modal img").click(function (event) {
            event.stopPropagation();
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        var i;
        var x = document.querySelectorAll('#splide-1');
        for (i = 0; i < x.length; i++) {
            new Splide(x[i], {
                type: 'loop',
                padding: {
                    right: '5rem',
                    left: '5rem',
                },
                width: 600,
                fixedWidth: 600
            }).mount();
        }
        x = document.querySelectorAll('#splide-2');
        for (i = 0; i < x.length; i++) {
            new Splide(x[i], {
                perPage: 2,
                rewind: true,
                width: 800,
                fixedWidth: 400
            }).mount();
        }
    });

    var typed = new Typed('#animate-type', {
        stringsElement: '#home-desc',
        showCursor: false,
        startDelay: 500,
        backSpeed: 15,
        typeSpeed: 35,
    });

    AOS.init();
});
