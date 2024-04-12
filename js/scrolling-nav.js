$(window).scroll(function() {
    $(".navbar").offset().top > 100 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
}), $(function() {
    $(document).on("click", "a.page-scroll", function(o) {
        var a = $(this);
        $("html, body").stop().animate({
            scrollTop: $(a.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), o.preventDefault()
    })
});