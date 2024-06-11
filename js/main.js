document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // language
    var langContainer = document.querySelector(".js__languageContainer");

    // slide
    var oneSlides = document.querySelectorAll(".js__oneSlidesContainer");

    // sticky header
    var stickyHeaderPC = document.querySelector(".js__stickyHeader");

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

            // language
            if (langContainer) {
                var languageDefault = langContainer.querySelector(
                    ".js__languageDefault"
                );
                var languageItems =
                    langContainer.querySelectorAll(".js__languageItem");

                languageDefault.onclick = function () {
                    this.classList.toggle("active");
                };

                languageItems.forEach((languageItem) => {
                    var children = languageDefault.querySelector(
                        ".js__languageDefaultText"
                    );
                    languageItem.onclick = function () {
                        children.innerHTML = languageItem.innerHTML;
                        languageDefault.classList.remove("active");
                    };
                });
            }
        },
        sliderOneItems: function () {
            if (oneSlides) {
                oneSlides.forEach((item) => {
                    var slider = item.querySelector(".js__oneSlide");
                    var next = item.querySelector(".swiper-button-next");
                    var prev = item.querySelector(".swiper-button-prev");
                    new Swiper(slider, {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        slidesPerGroup: 1,
                        effect: "fade",
                        autoHeight: true,
                        // loop: true,
                        fadeEffect: { crossFade: true },
                        // autoplay: {
                        //     delay: 5000,
                        //     disableOnInteraction: false,
                        //     pauseOnMouseEnter: true,
                        // },
                        navigation: {
                            nextEl: next || null,
                            prevEl: prev || null,
                        },
                    });
                });
            }
        },
        // scroll top
        scrollFunc: function () {
            if (stickyHeaderPC) {
                const isSticky = scrollY > 100;
                if (isSticky !== this.isSticky) {
                    stickyHeaderPC.classList.toggle("sticky", isSticky);
                    this.isSticky = isSticky;
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
            this.sliderOneItems();
        },
    };

    app.start();
});
