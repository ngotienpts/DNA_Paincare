document.addEventListener("DOMContentLoaded", function () {
    // back top
    var backTop = document.querySelector("#back-top");

    // language
    var langContainers = document.querySelectorAll(".js__languageContainer");

    // slide
    var oneSlides = document.querySelectorAll(".js__oneSlidesContainer");

    // sticky header
    var stickyHeaderPC = document.querySelector(".js__stickyHeader");

    // tab
    var tabs = document.querySelectorAll(".js__tabContainer");

    // video
    const video169s = document.querySelectorAll(".js__video169");

    // show full text
    const fullTexts = document.querySelectorAll(".js__fullTextContainer");

    // fancybox
    var fancyboxes = document.querySelectorAll(".fancybox-full");

    // show sub menu
    var dropdownSubMenu = document.querySelectorAll(".js__dropDown");
    var subMenu = document.querySelector(".js__clickShowMenuMb");

    // search mb
    var searchMbs = document.querySelectorAll(".js__searchMb");

    // navbar mb
    var navbarMb = document.querySelector(".js__navbarMenuMb");

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
            if (langContainers) {
                langContainers.forEach((langContainer) => {
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
                });
            }

            // tabs
            if (tabs) {
                tabs.forEach((tab) => {
                    var tabItems = tab.querySelectorAll(".js__tabItem");
                    var paneItems = tab.querySelectorAll(".js__tabPane");

                    tabItems.forEach((tabItem, index) => {
                        var pane = paneItems[index];

                        tabItem.onclick = function () {
                            tab.querySelector(
                                ".js__tabItem.active"
                            ).classList.remove("active");
                            tab.querySelector(
                                ".js__tabPane.active"
                            ).classList.remove("active");

                            this.classList.add("active");
                            pane.classList.add("active");
                        };
                    });
                });
            }
            // video 169

            if (video169s) {
                video169s.forEach((video169) => {
                    var videos = video169.querySelectorAll("iframe");
                    if (videos) {
                        videos.forEach((video) => {
                            var w = video.offsetWidth;
                            video.style.height = (w * 9) / 16 + "px";
                        });
                    }
                });
            }

            // full text
            if (fullTexts) {
                fullTexts.forEach((fullText) => {
                    const showFullText =
                        fullText.querySelector(".js__showFullText");
                    const changeText =
                        fullText.querySelector(".js__changeText");
                    showFullText.onclick = function () {
                        fullText.classList.toggle("full");
                        if (fullText.classList.contains("full")) {
                            changeText.innerText = "Thu gọn";
                        } else {
                            changeText.innerText = "Xem thêm";
                        }
                    };
                });
            }
            // show sub menu
            if (subMenu) {
                var closeSubMenu = document.querySelector(".js__closeSubMenu");
                var overlay = document.querySelector(".js__overlay");
                var parentBox = subMenu.parentElement;

                subMenu.onclick = function () {
                    this.parentElement.classList.add("active");
                    document.querySelector("body").style.overflow = "hidden";
                };
                closeSubMenu.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").style.overflow = "auto";
                };
                overlay.onclick = function () {
                    parentBox.classList.remove("active");
                    document.querySelector("body").style.overflow = "auto";
                };
            }

            // dropdown sub menu
            dropdownSubMenu &&
                dropdownSubMenu.forEach((item) => {
                    var parent = item.parentElement;
                    var nextEle = parent.querySelector(".js__listSubMenu");
                    item.onclick = function () {
                        parent.classList.toggle("active");
                        if (nextEle.style.maxHeight) {
                            nextEle.style.maxHeight = null;
                        } else {
                            nextEle.style.maxHeight =
                                nextEle.scrollHeight + "px";
                        }
                    };
                });

            // search mb
            if (searchMbs) {
                searchMbs.forEach((searchMb) => {
                    var closeSearchMb =
                        document.querySelector(".js__closeSearchMb");
                    var formSearchMb =
                        document.querySelector(".js__formSearchMb");
                    searchMb.onclick = function () {
                        formSearchMb.classList.add("active");
                    };
                    closeSearchMb.onclick = function () {
                        formSearchMb.classList.remove("active");
                    };
                });
            }

            // navbar mb
            if (navbarMb) {
                const container = navbarMb.querySelector(".js__navbarMb");
                const scrollBtn = navbarMb.querySelector(".js__navbarIcon");

                let scrollAmount = 0;
                let scrollPosition = 0;

                scrollBtn.addEventListener("click", function () {
                    const scrollDistance = 100;
                    scrollAmount = scrollPosition + scrollDistance;
                    scrollAmount = Math.min(
                        scrollAmount,
                        container.scrollWidth - container.clientWidth
                    );
                    container.scrollTo({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                    scrollPosition = scrollAmount;
                });
            }
        },
        // fancybox
        fancybox: function () {
            if (fancyboxes) {
                fancyboxes.forEach(function (fancybox) {
                    $(".fancybox-full a").fancybox();
                });
            }
        },
        sliderOneItems: function () {
            if (oneSlides) {
                oneSlides.forEach((item) => {
                    var slider = item.querySelector(".js__oneSlide");
                    var next = item.querySelector(".swiper-button-next");
                    var prev = item.querySelector(".swiper-button-prev");
                    var pagi = item.querySelector(".swiper-pagination");
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
                        pagination: {
                            el: pagi,
                            clickable: true,
                        },
                    });
                });
            }
        },
        // slider nhà đầu tư
        sliderInvestos: function () {
            var swiper5 = new Swiper(".mySwiperInvestor", {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: "rows",
                },
                navigation: {
                    nextEl: ".swiper-button-next3",
                    prevEl: ".swiper-button-prev3",
                },
                pagination: {
                    el: ".swiper-pagination3",
                    clickable: true,
                },
                hideOnClick: true,
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                },
            });
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
            // fancybox
            this.fancybox();
            // one slide
            this.sliderOneItems();
            // slider nhà đầu tư
            this.sliderInvestos();
        },
    };

    app.start();
});
