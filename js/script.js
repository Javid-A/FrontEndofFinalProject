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

    // Search
    $("#searchBtn").click(function() {
        $(".search-box").css("transition", "0.6s ease-in")
        $(".search-box").css("border-radius", "40px")
        $(".search-box").css("background", "turquoise")
        $("#searchBtn").css("opacity", "0")

        setTimeout(function Width() {
            $(".search-box").css("width", "320px")
        }, 600)
        setTimeout(function CloseBtn() {
            $("#closeBtn").css("display", "block")
        }, 600)
        setTimeout(function CloseBtn() {
            $("#closeBtn").css("opacity", "1")
        }, 1200)
        setTimeout(function SearchBtn() {
            $("#searchBtn").css("display", "none")
        }, 600)
        setTimeout(function Form() {
            $("#Search #form").css("display", "flex")
        }, 600)
        setTimeout(function Form() {
            $("#Search #form").css("opacity", "1")
        }, 1200)
        $(".search-box").css("transform", "rotateZ(360deg)")
    })
    $("#closeBtn").click(function() {
        // $(".search-box").css("transition", "0.6s ease-in")
        // $(".search-box").css("border-radius", "50px")
        // $(".search-box").css("background", "#236bdf")
        $("#closeBtn").css("opacity", "0")
        $("#Search #form").css("opacity", "0")
            // $("#searchBtn").css("opacity", "1")


        setTimeout(function Width() {
            $(".search-box").css("width", "50px")
        }, 100)
        setTimeout(function CloseBtn() {
            $("#closeBtn").css("display", "none")
        }, 600)
        setTimeout(function SearchBtn() {
            $("#searchBtn").css("display", "block")
        }, 600)
        setTimeout(function SearchBtn() {
            $("#searchBtn").css("opacity", "1")
        }, 700)
        setTimeout(function Form() {
            $("#Search #form").css("display", "none")
        }, 800)
        setTimeout(function SearchBtn() {
            $(".search-box").css("transform", "rotateZ(-360deg)")
            $(".search-box").css("border-radius", "0px")
            $(".search-box").css("background", "#236bdf")
        }, 800)
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