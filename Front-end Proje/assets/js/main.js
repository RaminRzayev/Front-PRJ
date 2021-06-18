AOS.init();
$(document).ready(function () {
    $('.mouse-scrol').click(function () {

        $('html, #WhatWeDo').animate({ scrollTop: 1000 }, 1000)
        return false
    })
    $('.WWD').click(function () {

        $('html, #WhatWeDo').animate({ scrollTop: 1000 }, 1000)
        return false
    })
    $('.WWA').click(function () {

        $('html, #upgradeNumber').animate({ scrollTop: 2550 }, 1000)
        return false
    })
    $('.JBS').click(function () {

        $('html, #WorkWithUs').animate({ scrollTop: 6650 }, 1000)
        return false
    })
    $('.NWS').click(function () {

        $('html, #LatestNews').animate({ scrollTop: 7340 }, 1000)
        return false
    })
    $('.CNTCT').click(function () {

        $('html, footer').animate({ scrollTop: 8000 }, 1000)
        return false
    })
    $(document).on('mouseover', '.map_svg svg path', function (e) {
        var _this = $(this),
            _this_country = _this.attr("id"),
            _country_name = _this.attr("title");

        $("[data-city=" + _this_country + "]").attr("fill", "#fff");

        if (_this.data("status") == "enable_me") {

            var _color_fill = $("[data-city=" + _this_country + "]").eq(0).data("fill");
            _this.attr("fill", _color_fill);


            console.log($("[data-city=" + _this_country + "]").offset().left);

            $(".flying_country").addClass("show_me");
            $(".flying_country").css("left", ($("[data-city=" + _this_country + "]").position().left - $(".map_svg").offset().left + 11) + "px");
            $(".flying_country").css("top", ($("[data-city=" + _this_country + "]").position().top - $(".map_svg").offset().top - 35) + "px");

            $(".flying_country span").text(_country_name);
            $(".flying_country img").attr("src", "/assets/img/flags/" + _this_country + ".png");

        }

    }).on('mouseleave ', '.map_svg svg path', function (e) {
        var _this = $(this),
            _this_country = _this.attr("id");
        if (_this.data("status") == "enable_me") {
            _this.attr("fill", "#E5E9F4")
        }

        $("[data-city=" + _this_country + "]").eq(0).attr("fill", $("[data-city=" + _this_country + "]").eq(0).data("fill"));
        $("[data-city=" + _this_country + "]").eq(1).attr("fill", $("[data-city=" + _this_country + "]").eq(1).data("fill"));
        $("[data-city=" + _this_country + "]").eq(2).attr("fill", $("[data-city=" + _this_country + "]").eq(2).data("fill"));
        $("[data-city=" + _this_country + "]").eq(3).attr("fill", $("[data-city=" + _this_country + "]").eq(3).data("fill"));


        $(".flying_country").removeClass("show_me");
    });


    $(document).on('mouseover', '.map_svg svg circle, .map_svg svg .half', function (e) {
        var _this = $(this),
            _this_country = _this.data("city"),
            _country_name = $("#" + _this_country).attr("title");

        $("[data-city=" + _this_country + "]").attr("fill", "#fff");

        console.log(_this_country)

        if ($("#" + _this_country).length) {
            //$("#"+_this_country).attr("fill", "#2D3192");

            var _color_fill = $("[data-city=" + _this_country + "]").eq(0).data("fill");
            $("#" + _this_country).attr("fill", _color_fill);

            console.log($("[data-city=" + _this_country + "]").offset().left);

            $(".flying_country").addClass("show_me");
            $(".flying_country").css("left", ($("[data-city=" + _this_country + "]").position().left - $(".map_svg").offset().left + 11) + "px");
            $(".flying_country").css("top", ($("[data-city=" + _this_country + "]").position().top - $(".map_svg").offset().top - 35) + "px");

            $(".flying_country span").text(_country_name);
            $(".flying_country img").attr("src", simbrella_file_url + "img/flags/" + _this_country + ".png");

        }

    }).on('mouseleave ', '.map_svg svg circle, .map_svg svg .half', function (e) {
        var _this = $(this),
            _this_country = _this.data("city");
        $("#" + _this_country).attr("fill", "#E5E9F4");
        $("[data-city=" + _this_country + "]").eq(0).attr("fill", $("[data-city=" + _this_country + "]").eq(0).data("fill"));
        $("[data-city=" + _this_country + "]").eq(1).attr("fill", $("[data-city=" + _this_country + "]").eq(1).data("fill"));
        $("[data-city=" + _this_country + "]").eq(2).attr("fill", $("[data-city=" + _this_country + "]").eq(2).data("fill"));
        $("[data-city=" + _this_country + "]").eq(3).attr("fill", $("[data-city=" + _this_country + "]").eq(3).data("fill"));
        $(".flying_country").removeClass("show_me");
    });
})
$(document).ready(function ($) {

    let tabs = $(".tabb li a");

    tabs.click(function () {
        let content = this.hash.replace('/', '');
        tabs.removeClass("active");
        $(this).addClass("active");
        $(".second-line-footer").find('div').hide();
        $(content).fadeIn(200);
    });

})(jQuery);


