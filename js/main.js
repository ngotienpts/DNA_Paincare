document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    const app = {
        // su ly cac su kien
        handleEvent: function () {
            const _this = this;

            // when click back top
            if (backTop) {
                backTop.onclick = function () {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                };
            }
        },
        // scroll top
        scrollFunc: function () {
            if (backTop) {
                if (
                    document.body.scrollTop > 300 ||
                    document.documentElement.scrollTop > 300
                ) {
                    backTop.style.opacity = 1;
                    backTop.style.visibility = "visible";
                } else {
                    backTop.style.opacity = 0;
                    backTop.style.visibility = "hidden";
                }
            }
        },

        // window scroll
        windowScroll: function () {
            var _this = this;
            window.onscroll = function () {
                // scroll top
                _this.scrollFunc();
            };
        },
        // khoi tao function start
        start: function () {
            // su ly cac su kien
            this.handleEvent();
            // window scroll
            this.windowScroll();
        },
    };

    app.start();
});
