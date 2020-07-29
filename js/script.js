$(document).ready(function() {
    // Click Menu
    $(".menu span").click(function() {
        $(".activeMenu").show()
        $(".activeMenu").css("animation-name", "MenuEffect")
        $(".activeMenu").css("animation-fill-mode", "forwards")
        $(".activeMenu").css("animation-duration", "0.4s")
        $(".mainRight").css("animation-name", "MenuEffect")
        $(".mainRight").css("animation-fill-mode", "forwards")
        $(".mainRight").css("animation-duration", "0.4s")
        $(".mainRight").css("animation-delay", "0.2s")
        $(".mainRight").css("animation-timing-function", "ease")
        $(".about").css("display", "block").addClass("animate__animated animate__fadeInRightBig")
        setTimeout(function leftSide() {
            $(".leftSide").css("display", "block").addClass("animate__animated animate__fadeInLeftBig")
        }, 200)
        setTimeout(function leftSide() {
            $(".rightSide").css("display", "block").addClass("animate__animated animate__fadeInRightBig")
        }, 300)
        setTimeout(function leftSide() {
            $(".socialUl").css("display", "flex").addClass("animate__animated animate__fadeInUpBig")
        }, 200)
    })

    // Click Sandwich
    $("#sandwich").click(function() {
        $(".activeMenu").show()
        $(".activeMenu").css("animation-name", "MenuEffect")
        $(".activeMenu").css("animation-fill-mode", "forwards")
        $(".activeMenu").css("animation-duration", "0.4s")
        $(".mainRight").css("animation-name", "MenuEffect")
        $(".mainRight").css("animation-fill-mode", "forwards")
        $(".mainRight").css("animation-duration", "0.4s")
        $(".mainRight").css("animation-delay", "0.2s")
        $(".mainRight").css("animation-timing-function", "ease")
        $(".about").css("display", "none")
        setTimeout(function leftSide() {
            $(".leftSide").css("display", "block").addClass("animate__animated animate__fadeInLeftBig")
        }, 200)
        setTimeout(function leftSide() {
            $(".rightSide").css("display", "block").addClass("animate__animated animate__fadeInRightBig")
        }, 300)
        setTimeout(function leftSide() {
            $(".socialUl").css("display", "flex").addClass("animate__animated animate__fadeInUpBig")
        }, 200)
    })


    $("#close").click(function() {
        setTimeout(function leftSide() {
            $(".about").css("display", "none")
        }, 300)
        setTimeout(function leftSide() {
            $(".rightSide").css("display", "none")
        }, 300)
        setTimeout(function leftSide() {
            $(".socialUl").css("display", "none")
        }, 300)
        setTimeout(function leftSide() {
                $(".leftSide").css("display", "none")
            }, 300)
            // $(".about").css("display", "none")
            // $(".socialUl").css("display", "none")
            // $(".rightSide").css("display", "none")
            // $(".leftSide").css("display", "none")
        $(".activeMenu").fadeOut()
    })

    // Slider start
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
    // Slider end
});