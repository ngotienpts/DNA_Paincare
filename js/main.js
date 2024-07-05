document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");
    const langContainers = document.querySelectorAll(".js__languageContainer");
    const autoSlides = document.querySelectorAll(".js__autoSlideContainer");
    const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
    const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");
    const fourSlides = document.querySelectorAll(".js__fourSlidesContainer");
    const galleryTabSlides = document.querySelectorAll(".js__galleryTabSwiper");
    const stickyHeaderPC = document.querySelector(".js__stickyHeader");
    const tabs = document.querySelectorAll(".js__tabContainer");
    const video169s = document.querySelectorAll(".js__video169");
    const fullTexts = document.querySelectorAll(".js__fullTextContainer");
    const fancyboxes = document.querySelectorAll(".fancybox-full");
    const dropdownSubMenu = document.querySelectorAll(".js__dropDown");
    const subMenu = document.querySelector(".js__clickShowMenuMb");
    const searchMbs = document.querySelectorAll(".js__searchMb");
    const navbarMb = document.querySelector(".js__navbarMenuMb");
    const scrollTabContainer = document.querySelector(
        ".js__scrollTabContainer"
    );

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
        if (backTop) {
            backTop.onclick = function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            };
        }
    }

    // Xử lý thay đổi ngôn ngữ
    function handleLanguageSwitch() {
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
    }

    // Xử lý các tab
    function handleTabs() {
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
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo169() {
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
    }

    // Xử lý hiển thị toàn bộ văn bản
    function handleFullTextDisplay(slide) {
        if (fullTexts) {
            fullTexts.forEach((fullText) => {
                const showFullText =
                    fullText.querySelector(".js__showFullText");
                const changeText = fullText.querySelector(".js__changeText");
                showFullText.onclick = function () {
                    fullText.classList.toggle("full");
                    if (fullText.classList.contains("full")) {
                        changeText.innerText = "Thu gọn";
                    } else {
                        changeText.innerText = "Xem thêm";
                    }
                    if (typeof slide !== "undefined") {
                        slide.updateAutoHeight();
                    }
                };
            });
        }
    }

    // Xử lý submenu
    function handleSubMenu() {
        if (subMenu) {
            var closeSubMenu = document.querySelector(".js__closeSubMenu");
            var overlay = document.querySelector(".js__overlay");
            var parentBox = subMenu.parentElement;

            subMenu.onclick = function () {
                this.parentElement.classList.add("active");
                document.querySelector("body").style.overflow = "hidden";
            };
            closeSubMenu.onclick = overlay.onclick = function () {
                parentBox.classList.remove("active");
                document.querySelector("body").style.overflow = "auto";
            };
        }
    }

    // Xử lý dropdown submenu
    function handleDropdownSubMenu() {
        if (dropdownSubMenu) {
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement;
                var nextEle = parent.querySelector(".js__listSubMenu");
                item.onclick = function () {
                    parent.classList.toggle("active");
                    nextEle.style.maxHeight = nextEle.style.maxHeight
                        ? null
                        : nextEle.scrollHeight + "px";
                };
            });
        }
    }

    // Xử lý tìm kiếm trên mobile
    function handleSearchMb() {
        if (searchMbs) {
            searchMbs.forEach((searchMb) => {
                var closeSearchMb =
                    document.querySelector(".js__closeSearchMb");
                var formSearchMb = document.querySelector(".js__formSearchMb");
                searchMb.onclick = function () {
                    formSearchMb.classList.add("active");
                };
                closeSearchMb.onclick = function () {
                    formSearchMb.classList.remove("active");
                };
            });
        }
    }

    // Xử lý navbar trên mobile
    function handleNavbarMb() {
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
                container.scrollTo({ left: scrollAmount, behavior: "smooth" });
                scrollPosition = scrollAmount;
            });
        }
    }

    // Xử lý scroll tab
    function handleScrollTab() {
        if (scrollTabContainer) {
            const container =
                scrollTabContainer.querySelector(".js__scrollTab");
            const scrollBtn =
                scrollTabContainer.querySelector(".js__scrollTabIcon");

            let scrollAmount = 0;
            let scrollPosition = 0;

            scrollBtn.addEventListener("click", function () {
                const scrollDistance = 100;
                scrollAmount = scrollPosition + scrollDistance;
                scrollAmount = Math.min(
                    scrollAmount,
                    container.scrollWidth - container.clientWidth
                );
                container.scrollTo({ left: scrollAmount, behavior: "smooth" });
                scrollPosition = scrollAmount;
            });
        }
    }

    // Khởi tạo fancybox
    function initFancybox() {
        if (fancyboxes) {
            fancyboxes.forEach(function () {
                $(".fancybox-full a").fancybox();
            });
        }
    }


    function setEqualHeightForSwiperSlides(slider) {
        var slides = slider.querySelectorAll('.swiper-slide');
        var maxHeight = 0;
    
        // Tính chiều cao lớn nhất
        slides.forEach(function(slide) {
            slide.style.height = ''; // Reset chiều cao để tính toán lại
            var slideHeight = slide.offsetHeight;
            if (slideHeight > maxHeight) {
                maxHeight = slideHeight;
            }
        });
    
        // Áp dụng chiều cao lớn nhất cho tất cả các slide
        slides.forEach(function(slide) {
            slide.style.height = maxHeight + 'px';
        });
    }

    // khởi tạo slider với nhiều item có width auto
    function initSliderAutoItems() {
        if (autoSlides) {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        }
    }
    // Khởi tạo slider với một item
    function initSliderOneItems() {
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
                    loop: true,
                    fadeEffect: { crossFade: true },
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
    }

    // Khởi tạo slider với ba items
    function initSliderThreeItems() {
        if (threeSlides) {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: true,
                    loop: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    breakpoints: {
                        640: { slidesPerView: 2, spaceBetween: 30 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 3 },
                    },
                });
            });
        }
    }

    // Khởi tạo slider với bốn items
    function initSliderFourItems() {
        if (fourSlides) {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    autoHeight: false,
                    loop: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    breakpoints: {
                        640: { slidesPerView: 2, spaceBetween: 30 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    },
                    on: {
                        init: function() {
                            setTimeout(function() {
                                setEqualHeightForSwiperSlides(slider);
                            }, 100); // Đặt độ trễ để đảm bảo các slide đã được khởi tạo
                        },
                        resize: function() {
                            setTimeout(function() {
                                setEqualHeightForSwiperSlides(slider);
                            }, 100); // Đặt độ trễ để đảm bảo các slide đã được khởi tạo
                        }
                    }
                });
            });
        }
    }

    // Khởi tạo slider gallery tab
    function initSliderGalleryTabItem() {
        if (galleryTabSlides) {
            galleryTabSlides.forEach((galleryTabSlide)=>{
                var tabSlider = galleryTabSlide.querySelector(".js__tabSwipper");
                var contentSlider =
                    galleryTabSlide.querySelector(".js__contentSwiper");
                var next = galleryTabSlide.querySelector(".swiper-button-next");
                var prev = galleryTabSlide.querySelector(".swiper-button-prev");
    
                var swiper = new Swiper(tabSlider, {
                    spaceBetween: 40,
                    slidesPerView: "auto",
                    freeMode: true,
                    freeModeMomentum: false,
                    watchSlidesProgress: true,
                    scrollbar: {
                        el: ".swiper-scrollbar",
                        draggable: true,
                    },
                });
    
                var swiper2 = new Swiper(contentSlider, {
                    spaceBetween: 10,
                    autoHeight: true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    thumbs: {
                        swiper: swiper,
                    },
                });
    
                handleFullTextDisplay(swiper2);
    
                if (next) {
                    next.addEventListener("click", function () {
                        if (
                            swiper.activeIndex >=
                            swiper.slides.length - swiper.params.slidesPerView
                        ) {
                            swiper.slideTo(swiper.slides.length - 1);
                        } else {
                            swiper.slideNext();
                        }
                    });
                }
            })
        }
    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        if (stickyHeaderPC) {
            const isSticky = scrollY > 100;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }

    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        window.onscroll = function () {
            handleStickyHeader();
        };
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleBackTop();
        handleLanguageSwitch();
        handleTabs();
        handleVideo169();
        handleFullTextDisplay();
        handleSubMenu();
        handleDropdownSubMenu();
        handleSearchMb();
        handleNavbarMb();
        handleScrollTab();
        initFancybox();
        initSliderAutoItems();
        initSliderOneItems();
        initSliderThreeItems();
        initSliderFourItems();
        initSliderGalleryTabItem();
        handleWindowScroll();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
