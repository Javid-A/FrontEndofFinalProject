$(document).ready(function() {
    // Click Menu
    $(".menu span").click(function() {
        $(".activeMenu").show()
        $(".activeMenu").css("animation-name", "MenuEffect")
        $(".activeMenu").css("animation-fill-mode", "forwards")
        $(".activeMenu").css("animation-duration", "0.4s")
        $(".activeMenu .mainRight").css("animation-name", "MenuEffect")
        $(".activeMenu .mainRight").css("animation-fill-mode", "forwards")
        $(".activeMenu .mainRight").css("animation-duration", "0.4s")
        $(".activeMenu .mainRight").css("animation-delay", "0.2s")
        $(".activeMenu .mainRight").css("animation-timing-function", "ease")
        $(".activeMenu .about").css("display", "block").addClass("animate__animated animate__fadeInRightBig")
        setTimeout(function leftSide() {
            $(".activeMenu .leftSide").css("display", "block").addClass("animate__animated animate__fadeInLeftBig")
        }, 200)
        setTimeout(function leftSide() {
            $(".activeMenu .rightSide").css("display", "block").addClass("animate__animated animate__fadeInRightBig")
            $("body").css("overflow", "hidden")
        }, 300)
        setTimeout(function leftSide() {
            $(".activeMenu .socialUl").css("display", "flex").addClass("animate__animated animate__fadeInUpBig")
        }, 200)
    })

    // Click Sandwich
    $("#sandwich").click(function() {
        $(".activeMenu").show()
        $(".activeMenu").css("animation-name", "MenuEffect")
        $(".activeMenu").css("animation-fill-mode", "forwards")
        $(".activeMenu").css("animation-duration", "0.4s")
        $(".activeMenu .mainRight").css("animation-name", "MenuEffect")
        $(".activeMenu .mainRight").css("animation-fill-mode", "forwards")
        $(".activeMenu .mainRight").css("animation-duration", "0.4s")
        $(".activeMenu .mainRight").css("animation-delay", "0.2s")
        $(".activeMenu .mainRight").css("animation-timing-function", "ease")
        $(".activeMenu .about").css("display", "none")
        setTimeout(function leftSide() {
            $(".activeMenu .leftSide").css("display", "block").addClass("animate__animated animate__fadeInLeftBig")
        }, 200)
        setTimeout(function leftSide() {
            $(".activeMenu .rightSide").css("display", "block").addClass("animate__animated animate__fadeInRightBig")
            $("body").css("overflow", "hidden")
        }, 300)
        setTimeout(function leftSide() {
            $(".activeMenu .socialUl").css("display", "flex").addClass("animate__animated animate__fadeInUpBig")
        }, 200)
    })


    $("#close").click(function() {
        $("body").css("overflow", "scroll")
        setTimeout(function leftSide() {
            $(".activeMenu .about").css("display", "none")
        }, 300)
        setTimeout(function leftSide() {
            $(".activeMenu .rightSide").css("display", "none")
        }, 300)
        setTimeout(function leftSide() {
            $(".activeMenu .socialUl").css("display", "none")
        }, 300)
        setTimeout(function leftSide() {
            $(".activeMenu .leftSide").css("display", "none")
        }, 300)
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
            $("#Search .search-txt").val("")

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
        }, 700)
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

    // Filter Start
    let Z = 0;
    $("#newBooks .filter-section .filter-slide").click(function() {
            $(".filter-wrapper").slideToggle()
            $("#newBooks .filter-section .filter-slide i").css("transform", `rotateZ(${Z+=180}deg)`)
        })
        // Filter End

    // Contact Start
    $("#Contact .contact-info .right").click(function() {
        $(".contact-info").css("width", "300px")
        $(".contact-info").css("padding", "40px")
        $(this).css("opacity", "0")
        setTimeout(function Icon() {
            $("#Contact .contact-info .right").css("display", "none")
        }, 400)
        setTimeout(function Icon() {
            $("#Contact .contact-info .left").css("display", "block")
        }, 400)
        setTimeout(function Icon() {
            $("#Contact .contact-info .left").css("opacity", "1")
        }, 500)
        setTimeout(function Info() {
            $("#Contact .contact-info h2").css("display", "block")
            $("#Contact .contact-info .info").css("display", "block")
            $("#Contact .contact-info .social").css("display", "block")
        }, 400)
        setTimeout(function Info() {
            $("#Contact .contact-info h2").css("opacity", "1")
            $("#Contact .contact-info .info").css("opacity", "1")
            $("#Contact .contact-info .social").css("opacity", "1")
        }, 500)
    })
    $("#Contact .contact-info .left").click(function() {
            $(".contact-info").css("padding", "0px")
            $(this).css("opacity", "0")
            $("#Contact .contact-info h2").css("opacity", "0")
            $("#Contact .contact-info .info").css("opacity", "0")
            $("#Contact .contact-info .social").css("opacity", "0")
            setTimeout(function Width() {
                $(".contact-info").css("width", "40px")

            }, 100)
            setTimeout(function Icon() {
                $("#Contact .contact-info .left").css("display", "none")
            }, 400)
            setTimeout(function Icon() {
                $("#Contact .contact-info .right").css("display", "block")
            }, 400)
            setTimeout(function Icon() {
                $("#Contact .contact-info .right").css("opacity", "1")
            }, 500)
            setTimeout(function Info() {
                $("#Contact .contact-info h2").css("display", "none")
                $("#Contact .contact-info .info").css("display", "none")
                $("#Contact .contact-info .social").css("display", "none")
            }, 400)

        })
        // Contact End

    // Register Start

    $("#Register .left-panel #sign-up-btn").click(function() {
        $("#Register").addClass("sign-up-mode")
    })
    $("#Register .right-panel #sign-in-btn").click(function() {
        $("#Register").removeClass("sign-up-mode")
    })

    // Register End

    // Profile Start

    $("#ProfilePhoto .photo-options .edit").click(function() {
        $("#ProfilePhoto .photo-options .photo").css("width", "60px")
        $("#ProfilePhoto .photo-options .photo").css("height", "60px")
        $("#ProfilePhoto .photo-options .photo i").css("opacity", "0")
        $("#ProfilePhoto .photo-options .options").css("display", "block")
        setTimeout(() => {
            $("#ProfilePhoto .photo-options .photo i").css("display", "none")
        }, 200);
        setTimeout(() => {
            $("#ProfilePhoto .photo-options .photo img").css("display", "none")
        }, 400);
        setTimeout(() => {
            $("#ProfilePhoto .photo-options .options").css("width", "220px")
            $("#ProfilePhoto .photo-options .options").css("height", "220px")
        }, 400);
        setTimeout(() => {
            $("#ProfilePhoto .photo-options .options").css("opacity", "1")
        }, 200);
    })

    $("#ProfilePhoto .photo-options .close").click(function() {
        $("#ProfilePhoto .photo-options .options").css("width", "100px")
        $("#ProfilePhoto .photo-options .options").css("height", "100px")
        $("#ProfilePhoto .photo-options .options").css("opacity", "0")
        $("#ProfilePhoto .photo-options .photo img").css("display", "block")
        $("#ProfilePhoto .photo-options .photo i").css("display", "block")

        setTimeout(() => {
            $("#ProfilePhoto .photo-options .photo").css("width", "150px")
            $("#ProfilePhoto .photo-options .photo").css("height", "150px")
            $("#ProfilePhoto .photo-options .photo i").css("opacity", "1")
            $("#ProfilePhoto .photo-options .options").css("display", "none")
            $("#ProfilePhoto .photo-options .options").css("opacity", "0")

        }, 400);
    })

    $("#ProfileAbout .card-sale").click(function() {
        $("#ProfileAbout .saleFace2").slideToggle()
        $("#ProfileAbout .saleFace2").css("display", "flex")
    })

    $("#ProfileAbout .card-favorite").click(function() {
        $("#ProfileAbout .favoriteFace2").slideToggle()
        $("#ProfileAbout .favoriteFace2").css("display", "flex")
    })

    $("#ModalSales .modal-body li").click(function() {
        $(this).next().slideToggle()
        $("#ModalSales .modal-body .books").not($(this).next()).slideUp()
        if ($("i", this).attr('class') == 'fas fa-angle-down') {
            setTimeout(() => {
                $("i", this).attr('class', 'fas fa-angle-up')
                $("#ModalSales .modal-body li i").not($("i", this)).attr('class', 'fas fa-angle-down')
            }, 100);
        } else {
            setTimeout(() => {
                $("i", this).attr('class', 'fas fa-angle-down')
            }, 100);
        }
    })

    // Profile End


});