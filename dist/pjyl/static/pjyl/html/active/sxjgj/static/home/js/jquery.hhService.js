(function(e) {
    e.fn.fix = function(t) {
        var n = {
            "float": "right",
            minStatue: !1,
            skin: "gray",
            durationTime: 1e3
        },
        t = e.extend(n, t);
        this.each(function() {
            var n = e(this),
            r = n.find(".close_btn"),
            a = n.offset().top;
            n.css(t.float,15),
            e(window).bind("scroll",
            function() {
                var r = a + e(window).scrollTop() + "px";
                n.animate({
                    top: r
                },
                {
                    duration: t.durationTime,
                    queue: !1
                })
            }),
            r.bind("click",
            function() {
                n.fadeOut()
            })
        })
    }
})(jQuery)