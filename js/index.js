$(function () {
    // header menu nav

    $(window).on("scroll", function () {
        let nav = $(this).scrollTop();
        console.log(nav);
        // backdrop-filter: blur(6px);
        // 아래로 스크롤 조금 할 때 (if)배경 나타나고 위로 올리면 (else)배경 투명
        if (nav >= 2) {
            // $("header nav").css({ "backdrop-filter": "blur(3px)" });
            $("header nav").css({ height: "100px" });
            $(".logo_w").css({ display: "none" });
            $(".red_line").addClass("on");
        } else {
            $("header nav").css({ "background-color": "transparent" });
            $("header nav").css({ height: "80px" });
            $(".logo_w").css({ display: "none" });
            $(".red_line").removeClass("on");
        }
    });

    // header nav hover 마우스 닿았을 때 배경 변경
    $("header nav").on("mouseenter", function () {
        $(this).css({ "background-color": "#ff0000" });
        $(".logo_w").css({ display: "block" });
    });

    //   마우스 스크롤을 내릴 때 nav에 닿았다 빼도 그대로 유지하는 방법은
    // if else로 다시 나눠준다
    // window scrollTop >= 2 할 때 if는 배경색이 나타나고
    // 그렇지 않으면 배경색이 투명해진다
    //   그래서 위로 올릴때만 배경투명이 적용되고 아래로 2만큼 내리면 색상이 그대로 유지된다
    $("header nav").on("mouseleave", function () {
        if ($(window).scrollTop() >= 2) {
            $(this).css({ "background-color": "transparent" });
            $(".logo_w").css({ display: "none" });
        } else {
            $("header nav").css({ "background-color": "transparent" });
            $(".logo_w").css({ display: "none" });
        }
        // $(this).css({ "background-color": "transparent" });
    });

    // header hambergur_bar
    $(".menu_line").on("click", function () {
        $(".menu_line .line1").toggleClass("on");
        $(".menu_line .line2").toggleClass("on3");
        $(".menu_line .line3").toggleClass("on2");
        $(".menu_wrap").fadeToggle();
        $(".menu_list").toggleClass("on");
    });

    // menu_txt hover
    $(".menu_txt li").on("mouseenter", function () {
        let menu_li = $(this).index();
        $(".menu_txt ul li div").eq(menu_li).addClass("on");
        $(".menu_txt ul a").addClass("on");
        $(".menu_txt li").eq(menu_li).addClass("on");
        $(".menu_txt ul li a").eq(menu_li).addClass("on");
    });
    $(".menu_txt li").on("mouseleave", function () {
        $(".menu_txt ul li div").removeClass("on");
        $(".menu_txt li").removeClass("on");
        $(".menu_txt ul a").removeClass("on");
    });

    // header menu hover

    $(".h_menu li").on("mouseenter", function () {
        $(this).children(".linebox").stop().animate({ top: "10" });
    });
    $(".h_menu li").on("mouseleave", function () {
        $(this).children(".linebox").stop().animate({ top: "-50" });
    });

    // 바로 실행되는 것들
    $(function () {
        $(".main_point").addClass("on");
        $(".main_1").addClass("on");
        $(".main_2").addClass("on");
        $(".main_line1").addClass("on");
        $(".main_line2").addClass("on");
        $(".main_point img").addClass("on");
        $(".visual_me").addClass("on");
        $(".h2up").addClass("on");
        $(".h2down").addClass("on");
        $(".h3up").addClass("on");
        $(".visual_bg").addClass("on");
    });

    // page8 자동 페이드---------------------

    let total = $(".p8_panel li").length;
    console.log(total);
    let i = 0;

    start();
    function start() {
        stop = setInterval(function () {
            if (i == total - 1) {
                i = 0;
            } else {
                i++;
            }
            fade();
        }, 5000);
    }

    function fade() {
        $(".script_ul li").removeClass("on");
        $(".script_ul li").eq(i).addClass("on");
        $(".p8_panel li").stop().fadeOut();
        $(".p8_panel li").eq(i).stop().fadeIn();
        $(".p8_button li").removeClass("on");
        $(".p8_button li").eq(i).addClass("on");
        $(".p8_button li").children("div").stop().css({ width: "0%" });
        $(".p8_button li")
            .eq(i)
            .children("div")
            .stop()
            .animate({ width: "100%" }, 1000);
    }

    // 버튼 여러개
    $(".p8_button li").on("click", function () {
        clearInterval(stop);
        i = $(this).index(".p8_button li");

        fade();
        start();
    });

    // 다음 버튼 fade
    $(".navi_bar .fade_b_r").on("click", function () {
        clearInterval(stop);
        if (i == total - 1) {
            i = 0;
        } else {
            i++;
        }

        start();
        fade();
    });
    // 이전 버튼 fade
    $(".navi_bar .fade_b_l").on("click", function () {
        clearInterval(stop);
        if (i == 0) {
            i = total - 1;
        } else {
            i--;
        }

        fade();
        start();
    });

    // 모달창 1
    $(".v1").on("click", function () {
        $(".p9_d1").fadeToggle();
    });
    $(".p9btn1").on("click", function () {
        $(".p9_d1").fadeToggle();
    });
    // 2
    $(".v2").on("click", function () {
        $(".p9_d2").fadeToggle();
    });
    $(".p9btn2").on("click", function () {
        $(".p9_d2").fadeToggle();
    });
    // 3
    $(".v3").on("click", function () {
        $(".p9_d3").fadeToggle();
    });
    $(".p9btn3").on("click", function () {
        $(".p9_d3").fadeToggle();
    });
    // 4
    $(".v4").on("click", function () {
        $(".p9_d4").fadeToggle();
    });
    $(".p9btn4").on("click", function () {
        $(".p9_d4").fadeToggle();
    });
    // 5
    $(".v5").on("click", function () {
        $(".p9_d5").fadeToggle();
    });
    $(".p9btn5").on("click", function () {
        $(".p9_d5").fadeToggle();
    });
    // 6
    $(".v6").on("click", function () {
        $(".p9_d6").fadeToggle();
    });
    $(".p9btn6").on("click", function () {
        $(".p9_d6").fadeToggle();
    });

    //   자동슬라이드
    let p9_total = $(".p9_ul li").length;
    let p9_i = 0;


    p9_start();
    function p9_start() {
        stop = setInterval(function () {



            $(".p9_ul")
                .stop()
                .animate({ "margin-left": "-650px" }, function () {
                    $(".p9_ul li:first-child").appendTo(".p9_ul");
                    $(".p9_ul").css({ "margin-left": "0px" });
                });

            if (p9_i == p9_total - 1) {
                p9_i = 0;
            } else {
                p9_i++;
            }
        }, 5000);
    }

    // next버튼
    $(".next").on("click", function () {
        $(".p9_ul")
            .stop()
            .animate({ "margin-left": "-650px" }, function () {
                $(".p9_ul li:first-child").appendTo(".p9_ul");
                $(".p9_ul").css({ "margin-left": "0px" });
            });

        if (p9_i == p9_total - 1) {
            p9_i = 0;
        } else {
            p9_i++;
        }
    });

    // back 버튼

    $(".back").on("click", function () {
        $(".p9_ul")
            .stop()
            .animate({ "margin-left": "650px" }, function () {
                $(".p9_ul li:last-child").prependTo(".p9_ul");
                $(".p9_ul").css({ "margin-left": "0px" });
            });

        if (p9_i == 0) {
            p9_i = p9_total - 1;
        } else {
            p9_i--;
        }
    });

    // navi bar 왼쪽
    $("#navi li").on("click", function () {
        let i = $(this).index();
        let button = $("#container section").eq(i).offset().top;
        console.log(button);

        $("html,body").stop().animate({ scrollTop: button });
    });

    //상단버튼으로 자연스럽게 올라가게 하기

    $(".top_button").on("click", function () {
        let button = $("header").offset().top;
        console.log(button);

        $("html,body").stop().animate({ scrollTop: button });
    });

    // 자동페이드 이미지 모달
    $(".p8_panel li").on("mouseenter", function () {
        let p8_modal = $(this).index();
        $(".ilust_box a").eq(p8_modal).addClass("on");
    });
    $(".p8_panel li").on("mouseleave", function () {
        $(".ilust_box a").removeClass("on");
    });

    // 자동페이드 모달 클릭
    // 투두리스트
    $(".p8_btn1").on("click", function () {
        $(".mod1").fadeToggle();
    });
    $(".close").on("click", function () {
        $(".mod1").hide(10);
    });
    // 날씨 api
    $(".p8_btn2").on("click", function () {
        $(".mod2").fadeToggle();
    });
    $(".close").on("click", function () {
        $(".mod2").hide(10);
    });
    // 숫자맞추기
    $(".p8_btn3").on("click", function () {
        $(".mod3").fadeToggle();
    });
    $(".close").on("click", function () {
        $(".mod3").hide(10);
    });

    // 사이트 기획안 모달창


    // A뮤직
    $(".p4_but1").on("click",function(){
        $(".p4_modal").fadeToggle();
    });
    $(".p4_close").on("click", function () {
        $(".p4_modal").hide(10);
    });


    // 캠핑
    $(".p5_but1").on("click",function(){
        $(".p5_modal").fadeToggle();
    });
    $(".p5_close").on("click", function () {
        $(".p5_modal").hide(10);
    });



    // 스크롤 할 때 변경되는 속도
    // baseline 을 위로 선언해야한다
    let baseline = -650;
    let con1 = $(".con0").offset().top + baseline;
    let con2 = $(".con1").offset().top + baseline;
    let con3 = $(".con2").offset().top + baseline;
    let con4 = $(".con3").offset().top + baseline;
    let con5 = $(".con4").offset().top + baseline;
    let con6 = $(".con5").offset().top + baseline;
    let con7 = $(".con6").offset().top + baseline;
    let con8 = $(".con7").offset().top + baseline;
    let con9 = $(".con8").offset().top + baseline;
    let con10 = $(".con9").offset().top + baseline;
    let con11 = $(".con10").offset().top + baseline;

    // console.log(con1, con2, con3, con4);

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();
        // console.log(scroll);
        // 만약 스크롤이 con1보다 같거나 크고 , 그리고 , 스크롤이 con2보다 작으면

        if (scroll >= con1 && scroll < con2) {
            // console.log("con1입니다");
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(0).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(0).addClass("txton");
        }
        // 그렇지 않고 만약 con1
        else if (scroll >= con2 && scroll < con3) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(1).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(1).addClass("txton");
            $(".con1").addClass("up");
            $(".p1_txt_move li").addClass("on");
            $(".p1_txt").addClass("on");

            //   프로필
        } else if (scroll >= con3 && scroll < con4) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(2).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(2).addClass("txton");

            //   로고박스 움직임
            $(".p3boxr li:nth-child(1)").addClass("on");
            $(".p3boxr li:nth-child(2)").addClass("on");
            $(".p3boxl li:nth-child(1)").addClass("on");
            $(".p3boxl li:nth-child(2)").addClass("on");

            // con3 로고 설명 박스
            $(".line_t").addClass("on");
            $(".line_b").addClass("on");
            $(".line_l").addClass("on");
            $(".line_r").addClass("on");
            $(".logo_txt_box").addClass("on");
            $(".logo_txt_up").addClass("on");
            $(".color_box").addClass("on");
            $(".logo_wrap_yy").addClass("on");
            $(".txt_2 strong").addClass("on");

            $(".color_red").css({ transform: "rotate(315deg)" });
            $(".color_black").css({ transform: "rotate(315deg)" });

            // console.log("con3입니다");
        } else if (scroll >= con4 && scroll < con5) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(3).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(3).addClass("txton");

            // p4 전체 상자
            $(".p4_wrap").addClass("on");
            $(".p4_main_txt").addClass("on");
            $(".p4_tt h2").addClass("on");
            $(".p4_txt_p").addClass("on");
            $(".p4_button li").addClass("on");
            $(".p4_long").addClass("long_on");
            $(".p4_img").addClass("on");
            $(".mo4_main_txt").addClass("on");

            // p4 design버튼
            $(".p4_but1").on("mouseenter", function () {
                $(".p4_box1,.p4_box2").addClass("on");
                $(".p4_tt").addClass("on");
                $(".p4_t2").addClass("on");
                $(".p4_but2 p").addClass("on");
                $(".p4_long").addClass("on");
                $(".p4_web_txt").addClass("on");
            });
            $(".p4_but1").on("mouseleave", function () {
                $(".p4_box1,.p4_box2").removeClass("on");
                $(".p4_tt").removeClass("on");
                $(".p4_t2").removeClass("on");
                $(".p4_but2 p").removeClass("on");
                $(".p4_long").removeClass("on");
                $(".p4_web_txt").removeClass("on");
            });
            // p4 web버튼
            $(".p4_but2").on("mouseenter", function () {
                $(".p4_box1,.p4_box2").addClass("ro");
                $(".p4_tt").addClass("on");
                $(".p4_t3").addClass("on");
                $(".p4_but1 p").addClass("on");
            });
            $(".p4_but2").on("mouseleave", function () {
                $(".p4_box1,.p4_box2").removeClass("ro");
                $(".p4_tt").removeClass("on");
                $(".p4_t3").removeClass("on");
                $(".p4_but1 p").removeClass("on");
            });

            $(".mo4_wrap").addClass("on");

            // console.log("con4입니다");
        } else if (scroll >= con5 && scroll < con6) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(4).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(4).addClass("txton");
            // p5 전체
            $(".p5_wrap").addClass("on");
            $(".p5_main_txt").addClass("on");
            $(".p5_tt h2").addClass("on");
            $(".p5_txt_p").addClass("on");
            $(".p5_button li").addClass("on");
            $(".p5_long").addClass("long_on");
            $(".p5_img").addClass("on");

            // p5 design버튼
            $(".p5_but1").on("mouseenter", function () {
                $(".p5_box1,.p5_box2").addClass("on");
                $(".p5_tt").addClass("on");
                $(".p5_t2").addClass("on");
                $(".p5_but2 p").addClass("on");
                $(".p5_long").addClass("on");
            });
            $(".p5_but1").on("mouseleave", function () {
                $(".p5_box1,.p5_box2").removeClass("on");
                $(".p5_tt").removeClass("on");
                $(".p5_t2").removeClass("on");
                $(".p5_but2 p").removeClass("on");
                $(".p5_long").removeClass("on");
            });
            // p5 web버튼
            $(".p5_but2").on("mouseenter", function () {
                $(".p5_box1,.p5_box2").addClass("ro");
                $(".p5_tt").addClass("on");
                $(".p5_t3").addClass("on");
                $(".p5_but1 p").addClass("on");
                $(".p5_long").addClass("on");
                $(".p5_web_txt").addClass("on");
            });
            $(".p5_but2").on("mouseleave", function () {
                $(".p5_box1,.p5_box2").removeClass("ro");
                $(".p5_tt").removeClass("on");
                $(".p5_t3").removeClass("on");
                $(".p5_but1 p").removeClass("on");
                $(".p5_long").removeClass("on");
                $(".p5_web_txt").removeClass("on");
            });

            $(".mo5_wrap").addClass("on");

            // console.log("con5입니다");
        } else if (scroll >= con6 && scroll < con7) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(5).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(5).addClass("txton");

            // p6움직임

            // p6 전체 상자
            $(".p6_wrap").addClass("on");
            $(".p6_main_txt").addClass("on");
            $(".p6_tt h2").addClass("on");
            $(".p6_txt_p").addClass("on");
            $(".p6_button li").addClass("on");
            $(".p6_long").addClass("long_on");
            $(".p6_img").addClass("on");

            // p6 design버튼
            $(".p6_but1").on("mouseenter", function () {
                $(".p6_box1,.p6_box2").addClass("on");
                $(".p6_tt").addClass("on");
                $(".p6_t2").addClass("on");
                $(".p6_but2 p").addClass("on");
                $(".p6_long").addClass("on");
                $(" .p6_web_txt").addClass("on");
                $(".ff").addClass("on");
                $(".p6_but2").css({ opacity: "0" });
            });
            $(".p6_but1").on("mouseleave", function () {
                $(".p6_box1,.p6_box2").removeClass("on");
                $(".p6_tt").removeClass("on");
                $(".p6_t2").removeClass("on");
                $(".p6_but2 p").removeClass("on");
                $(".p6_long").removeClass("on");
                $(".p6_web_txt").removeClass("on");
                $(".ff").removeClass("on");
                $(".p6_but2").css({ opacity: "1" });
            });
            // p6 web버튼
            $(".p6_but2").on("mouseenter", function () {
                $(".p6_box1,.p6_box2").addClass("ro");
                $(".p6_tt").addClass("on");
                $(".p6_t3").addClass("on");
                $(".p6_but1 p").addClass("on");
            });
            $(".p6_but2").on("mouseleave", function () {
                $(".p6_box1,.p6_box2").removeClass("ro");
                $(".p6_tt").removeClass("on");
                $(".p6_t3").removeClass("on");
                $(".p6_but1 p").removeClass("on");
            });
            $(".mo6_wrap").addClass("on");

            // console.log("con6입니다");
        } else if (scroll >= con7 && scroll < con8) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(6).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(6).addClass("txton");

            // p7움직임
            $(".p7_wrap").addClass("on");
            $(".p7_main_txt").addClass("on");
            $(".p7_tt h2").addClass("on");
            $(".p7_txt_p").addClass("on");
            $(".p7_button li").addClass("on");
            $(".p7_long").addClass("long_on");
            $(".p7_img").addClass("on");

            // p7 design버튼
            $(".p7_but1").on("mouseenter", function () {
                $(".p7_box1,.p7_box2").addClass("on");
                $(".p7_tt").addClass("on");
                $(".p7_t2").addClass("on");
                $(".p7_but2 p").addClass("on");
                $(".p7_long").addClass("on");
            });
            $(".p7_but1").on("mouseleave", function () {
                $(".p7_box1,.p7_box2").removeClass("on");
                $(".p7_tt").removeClass("on");
                $(".p7_t2").removeClass("on");
                $(".p7_but2 p").removeClass("on");
                $(".p7_long").removeClass("on");
            });
            // p7 web버튼
            $(".p7_but2").on("mouseenter", function () {
                $(".p7_box1,.p7_box2").addClass("ro");
                $(".p7_tt").addClass("on");
                $(".p7_t3").addClass("on");
                $(".p7_but1 p").addClass("on");
                $(".p7_long").addClass("on");
                $(".p7_web_txt").addClass("on");
            });
            $(".p7_but2").on("mouseleave", function () {
                $(".p7_box1,.p7_box2").removeClass("ro");
                $(".p7_tt").removeClass("on");
                $(".p7_t3").removeClass("on");
                $(".p7_but1 p").removeClass("on");
                $(".p7_long").removeClass("on");
                $(".p7_web_txt").removeClass("on");
            });

            $(".mo7_wrap").addClass("on");

            // console.log("con7입니다");
        } else if (scroll >= con8 && scroll < con9) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(7).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(7).addClass("txton");
            $(".con7").addClass("on");

            // console.log("con8입니다");
        } else if (scroll >= con9 && scroll < con10) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(8).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(8).addClass("txton");
            $(".p9_main_txt").addClass("on");
            $(".con8").addClass("on");

            // console.log("con9입니다");
        } else if (scroll >= con10 && scroll < con11) {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(9).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(9).addClass("txton");
            $(".c10_txt_move").addClass("on");
            $(".p10_move").addClass("on");

            // console.log("con10입니다");
        }

        // 그렇지 않으면
        else {
            $("#navi li div").removeClass("on");
            $("#navi li div").eq(10).addClass("on");
            $("#navi li p").removeClass("txton");
            $("#navi li p").eq(10).addClass("txton");
            $("#con11").addClass("tt");
            $(".fo_wrap > img").addClass("on");
            $(".tel").addClass("on");
            $(".foter_line").addClass("on");
            $(".p11_txt .h1d").addClass("on");
            $(".p11_txt .mar").addClass("on");
            // console.log("con11입니다");
        }
    });
});
