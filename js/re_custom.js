$(window).load(function(){
	var w = $(window).width();

	if(w >= 801){
		//console.log("pc");
		pcgnb();

		}else if(w <= 800){
		//console.log("mo");
		mognb();
	}
});

//resize 될때 gnb
$(window).resize(function(){
	var w = $(window).width();	

	if(w >= 801){
		console.log('r_pc');
		$(".renew-wrap .m-lnb-wrap .lnb-box").hide();
		pcgnb();

		}else if(w <= 800){
		console.log('r_mo');
		mognb();
	}
});

$(function(){	

	//pc gnb
	function pcgnb(){
		//gnb
		$('.renew-wrap .gnb-wrap nav .dep > li').bind('mouseenter focusin', function(){
			$('.renew-wrap .gnb-wrap').addClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		});

		$('.renew-wrap .gnb-wrap nav .dep > li').bind('mouseleave focusout', function(){
			$('.renew-wrap .gnb-wrap').removeClass('active');
			$(this).removeClass('active');
		});


		//lnb
		$('.renew-wrap .lnb-wrap .dep-box > li > a').on('click', function(){
			$(this).parents('li').toggleClass('active');
			$(".renew-wrap .lnb-wrap .dep-box > li > a").not(this).parents('li').removeClass("active"); 

			// 펼칠 내용 영역 선택
			var target = $(this).parents("li").find(".dth-box02");
			// 나머지 내용 영역을 선택
			var other = $(".renew-wrap .lnb-wrap .dep-box > li > a").not(this).parents("li").find(".dth-box02");

			// 애니메이션으로 열고 닫기 처리
			target.stop().slideToggle(300);
			other.stop().slideUp(300);
		});

		
	};

	pcgnb();
	
	//mo gnb
	function mognb(){
		//검색창
		$('.renew-wrap .m-header .search').on('click', function(){
			$('.renew-wrap .m-search-box').show();
		});
		$('.renew-wrap .m-search-box .m-close-btn').on('click', function(){
			$('.renew-wrap .m-search-box').hide();
		});

		//gnb
		$('.renew-wrap .m-header .hamberger').on('click', function(){
			$('.renew-wrap .m-gnb-wrap').addClass('active');
			$('body').addClass('active');

			if ($("body > .renew-wrap").hasClass("sub") != true) {
			  $(".renew-wrap .m-gnb-wrap .gnb-box > nav .dep > li:first").addClass("active");
			  $(".renew-wrap .m-gnb-wrap .gnb-box > nav .dep > li:first > .depthbox > .depth02 > ul > li:first").addClass("on");
			  $(".renew-wrap .m-gnb-wrap .gnb-box > nav .dep > li:first > .depthbox > .depth02 > ul > li:first .depth03").css("display", "block");
			}

		});
		$('.renew-wrap .m-gnb-wrap .gnb-box .top-area .close-btn').on('click', function(){
			$('.renew-wrap .m-gnb-wrap').removeClass('active');
			$('body').removeClass('active');
		});

		$('.renew-wrap .m-gnb-wrap .gnb-box nav .dep > li').on('click', function(){
			$(this).addClass('active').siblings('li').removeClass('active');
		});

		$('.renew-wrap .m-gnb-wrap .gnb-box nav .depthbox .depth02 > ul > li > a').on('click', function(){
			$(this).parent('li').toggleClass('on');
			$('.renew-wrap .m-gnb-wrap .gnb-box nav .depthbox .depth02 > ul > li > a').not(this).parent('li').removeClass('on'); 
			/*$(this).parents('li').children('.depth03').stop().slideToggle();
			$(this).parents('li').siblings().children('.depth03').stop().slideUp();*/

			// 펼칠 내용 영역 선택
			var m_gnb_target = $(this).parent("li").find(".depth03");
			// 나머지 내용 영역을 선택
			var m_gnb_other = $('.renew-wrap .m-gnb-wrap .gnb-box nav .depthbox .depth02 > ul > li > a').not(this).parent("li").find('.depth03');

			// 애니메이션으로 열고 닫기 처리
			m_gnb_target.stop().slideToggle(300);
			m_gnb_other.stop().slideUp(300);
		});		


		//m-lnb		
		$('.m_lnb_open').on('click', function(){
			$('.renew-wrap .m-lnb-wrap .lnb-box').stop().slideToggle();
		});

		$('.renew-wrap .m-lnb-wrap .m-dep-box > li > a').on('click', function(){
			$(this).parents('li').toggleClass('active');
			$(".renew-wrap .m-lnb-wrap .m-dep-box > li > a").not(this).parents('li').removeClass("active"); 

			// 펼칠 내용 영역 선택
			var m_target = $(this).parents("li").find(".dth-box02");
			// 나머지 내용 영역을 선택
			var m_other = $(".renew-wrap .m-lnb-wrap .m-dep-box > li > a").not(this).parents("li").find(".dth-box02");

			// 애니메이션으로 열고 닫기 처리
			m_target.stop().slideToggle(300);
			m_other.stop().slideUp(300);
			
		});
	};

	mognb();
	

	//메인롤링
	$(".sd02 button,.arrow-box .next").on('click focusin', function(){
		$('.sd02').addClass('active');
		$('.sd01').removeClass('active');
		$('.slider-for .item.alarm').addClass('on'); //height값을 유동적이게 하기위해 on클래스를 붙여 안보일때는 height: 0으로 잡음
		$('.slider-for .item.community').removeClass('on');
		$('.sd01').animate({marginLeft:'-100%'},400);
	});
	$(".sd01 button,.arrow-box .prev").on('click focusin', function(){
		$('.sd01').addClass('active');
		$('.sd02').removeClass('active');
		$('.slider-for .item.community').addClass('on');//height값을 유동적이게 하기위해 on클래스를 붙여 안보일때는 height: 0으로 잡음
		$('.slider-for .item.alarm').removeClass('on');
		$('.sd01').animate({marginLeft:'0'},400);
	});


	//알림 콘텐츠  메인 visual
	function init02Swiper(){
	var myswiper = new Swiper('.swiper-wrap .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop:false,
		runCallbacksOnInit:false,
		autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
		on: {
			init: function(swiper){
				$('.swiper-slide').attr('aria-hidden','true');
				$('.swiper-slide-active').attr('aria-hidden','false');
			var focusAbles = $('.swiper-wrapper').find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]');

			focusAbles.each(function() {
			  $(this).attr('data-default-tabindex', function() {
				 if ($(this).attr("tabindex")) {
					return $(this).attr('tabindex');
				 }
				 else
				 {
					return "none";
				 }

			  });
			});
			focusAbles.attr('tabindex', '-1');
			console.log('swiper initialized');
		},
		slideChange: function(swiper){
		var myslide = myswiper.activeIndex;
		
		$('.swiper-slide').attr('aria-hidden','true');
      
      /*make all non-focusable*/
      	var focusAbles = $('.swiper-wrapper').find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]');

		focusAbles.each(function() {
		  if (!$(this).attr("data-default-tabindex")){
			  $(this).attr('data-default-tabindex', function() {
				 if ($(this).attr("tabindex")) {
					return $(this).attr('tabindex');
				 }
				 else
				 {
					return "none";
				 }

			  });
			}
		});
		focusAbles.attr('tabindex', '-1');
		setTimeout(function(){$('.swiper-slide-active').attr('aria-hidden','false');
			var focusAbles = $('.swiper-slide-active').find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]');

			focusAbles.each(function() {
			  $(this).attr('tabindex', function() {
				 if ($(this).attr("data-default-tabindex") !="none") {
					return $(this).attr('data-default-tabindex');
				 } else {
					$(this).removeAttr('tabindex');
				 }

			  });
			});
			focusAbles.removeAttr('data-default-tabindex');		
			$("#SwiperLive").text("Slide "+(myslide +1) +" displayed");
			}, 0);

		
		},
	},
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
		a11y: true,
	  
    });

	$(".swiper-wrap .swiper-button-start").on('click', function(){
		topSwiper.autoplay.start();
		$(this).hide();
		$(".swiper-wrap .swiper-button-pause").show();
	})
	$(".swiper-wrap .swiper-button-pause").on('click', function(){
		topSwiper.autoplay.stop();
		$(this).hide();
		$(".swiper-wrap .swiper-button-start").show();
	});

	}
	init02Swiper();
	
	$(window).on('resize', function(){
        init02Swiper();
    });


	//알림,소통 클릭시 전체배경바뀜
	$('.renew-wrap .slider-nav-box li').click(function(){
		if($(this).hasClass("bg") === true) {
			//alert('true');
			$('.renew-wrap .body-contain').addClass('ver02');
		} else {
			$('.renew-wrap .body-contain').removeClass('ver02');
		}
	});


	//탭메뉴
	$('ul.tab li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tab li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
		return false;
	});


	//알림 콘텐츠  산업/경제/마케팅 slick swiper
	var bottomSwiper = new Swiper('.swiper-wrap02 .swiper-container', {
		loop: true,
		speed:600,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    });

	$(".swiper-wrap02 .swiper-button-start").on('click', function(){
		bottomSwiper.autoplay.start();
		$(this).hide();
		$(".swiper-wrap02 .swiper-button-pause").show();
	})
	$(".swiper-wrap02 .swiper-button-pause").on('click', function(){
		bottomSwiper.autoplay.stop();
		$(this).hide();
		$(".swiper-wrap02 .swiper-button-start").show();
	});


	//청년인턴의 생생한 경험담
	function initSwiper(){
		var Internswiper = new Swiper('.intern.swiper-container', {
		slidesPerView: 2,
		spaceBetween: 20,
		breakpointsBase: 'window',
		effect: 'slide',
		freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
		freeModeMomentumBounce: false,
		freeModeSticky: true,
		breakpoints: {
			800: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			}
		}
    });	
}
	initSwiper();

	$(window).on('resize', function(){
        initSwiper();
    });
	


	//footer 관련사이트
	var footerSwiper = new Swiper('.ft-swiper-wrap .swiper-container', {
		slidesPerView: 6,
		spaceBetween: 20,
		loop: true,
		speed:600,
       autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
		navigation: {
			nextEl: '.ft-swiper-wrap .swiper-button-next',
			prevEl: '.ft-swiper-wrap .swiper-button-prev',
		},
		breakpoints: {
			624: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			740: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,	
			},
			1580: {
				slidesPerView: 5,
				spaceBetween: 20,
				allowTouchMove : false,
			},
		}
    });
	
	$(".ft-swiper-wrap .swiper-button-start").on('click', function(){
		footerSwiper.autoplay.start();
		$(this).hide();
		$(".ft-swiper-wrap .swiper-button-pause").show();
	})
	$(".ft-swiper-wrap .swiper-button-pause").on('click', function(){
		footerSwiper.autoplay.stop();
		$(this).hide();
		$(".ft-swiper-wrap .swiper-button-start").show();
	});

	

});