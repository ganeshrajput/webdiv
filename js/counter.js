$(document).ready(function(t) {
    t(".counter").each(function() {
        var a = t(this);
        a.data("target", parseInt(a.html())), a.data("counted", !1), a.html("0")
    }), t(window).bind("scroll", function() {
        var a = 3e3;
        t(".counter").each(function() {
            var n = t(this);
            !n.data("counted") && t(window).scrollTop() + t(window).height() >= n.offset().top && (n.data("counted", !0), n.animate({
                dummy: 1
            }, {
                duration: a,
                step: function(a) {
                    var n = t(this),
                        e = Math.round(n.data("target") * a);
                    n.html(e), 0 < n.parent(".value").length && n.parent(".value").css("width", e + "%")
                }
            }))
        })
    }).triggerHandler("scroll")
});