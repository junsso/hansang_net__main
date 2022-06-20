/* GNB  */
$(function(){
	$menu = $("#gnb .th1"),
	$subGroup = $(".th2_wrap"),
	$subList = $(".th2_wrap .th2"),

	$menu.bind("mouseenter focusin", function() {
		$(this).addClass("on").siblings().removeClass("on");
		$(this).find($subGroup).css({"height":"auto","min-height":"220px"});
		$(this).find($subList).css({"height":"auto","min-height":"220px"});
	});
	$menu.bind("mouseleave focusout", function() {
		$(this).removeClass("on");
		$(this).find($subGroup).css({"height":"0","min-height":"0"});
		$(this).find($subList).css({"height":"0","min-height":"0"});
	});
  
  /* 2019-06-11 공지사항 이벤트 종료 메세지 추가 */
  $('#notice-event-end').click(function(){
      alert('종료되었습니다.');
  });
  
  $('#notice-event-before').click(function(){
      alert('이벤트 기간이 아닙니다.');
  });
  
});

/* 전체메뉴 */
$(function(){	
	var menuAllStats = true;
	$(".btn_menuAll").click(function(e){
		e.preventDefault();
		if (menuAllStats) {
			$(".menu_all").slideDown();
			$(this).removeClass("off").addClass("on");
			menuAllStats = false;
		}else {
			$(".menu_all").slideUp();
			$(this).removeClass("on").addClass("off");
			menuAllStats = true;			
		}	
	});

	$("a:last", ".menu_all").blur(function () {
		$(".menu_all").slideUp();
		$(".btn_menuAll").removeClass("on").addClass("off");
	});
});	

/* 모바일 메뉴 */
function gnb_open(param,obj,btn,index1,index2,index3,dur,meth,mno){
	var param = $(param);
	var obj = $(obj);
	var btn = $(btn);
	var index1 = index1-1;
	var index2 = index2;
	var index3 = index3;
	var n = index1;
	var w = 224;
	var data = false;
	var str = location.href;
	var notbad = false;

	var _open = function(){
		//obj.css({'overflow':'visible'}).animate({left:w},dur,meth);
		$('#m_nav').animate({left:0, opacity: 1},dur,meth);
		$("#shadow_device").stop(true,true).fadeIn(dur/2);
		$("html,body").css({"overflow":"hidden","height":$(window).height()});
		param.css({opacity:1,height:$(window).height()});
		
		if(notbad != true){ param.stop(true,true).delay(dur/2).animate({scrollTop:param.find(".th1_lnk").eq(index1).offset().top},dur,meth); }
		data = true;
	};

	var _close = function(){
		$('#m_nav').animate({left: $(this).outerWidth(), opacity: 0},dur,meth);		
		$("#shadow_device").stop(true,true).fadeOut(dur/2,function(){
			$("html,body").removeAttr("style");
			obj.removeAttr("style");
			data = false;
		});
		param.stop(true,true).delay(dur).animate({opacity:0,scrollTop:0},0,meth);
	};

	btn.bind("touchend click",function(event){
		if(data == false) obj.queue(_open).dequeue(); else obj.queue(_close).dequeue();
		$(window).resize(function(){
			$("#shadow_device").click();
		});
		event.preventDefault();
		event.stopPropagation();
	});

	$("#shadow_device").unbind().bind("click touchmove",function(event){
		obj.queue(_close).dequeue();
		event.preventDefault();
		event.stopPropagation();
	});
	$(".m_nav_clo").unbind().bind("click touchmove",function(event){
		obj.queue(_close).dequeue();
		event.preventDefault();
		event.stopPropagation();
	});
}

/* 모바일 드롭다운 */
$(function(){
	$th1 = $("#m_nav .th1>li>a"),
	$th2Group = $("#m_nav .th2"),
	$th2 = $("#m_nav .th2>li>a"),
	$th3Group = $("#m_nav .th3");

	$("#m_nav").find(".th1>li:first>a").toggleClass("active");
	$("#m_nav").find(".th1>li:first>a").next($th2Group).show();
	
	$th1.click(function() {
		$(this).next($th2Group).slideToggle();
		$(this).toggleClass("active");
		$(this).parent("li").siblings("li").children("a").removeClass("active");
		$(this).parent("li").siblings("li").find($th2Group).slideUp();
	});
  
     if ($("#m_nav .th3").length > 0 ) {		
		$("#m_nav .th3").parent("li").addClass("under");		
	 };
  
	$th2.click(function() {
		$(this).next($th3Group).slideToggle();
		$(this).toggleClass("active");
		$(this).parent("li").siblings("li").children("a").removeClass("active");
		$(this).parent("li").siblings("li").find($th3Group).slideUp();
	});
});

/* 모바일 Top */
$(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() > 400){
			$(".topBtnM").fadeIn(300);
		} else {
			$(".topBtnM").fadeOut(300);
		};
	});
});

/* 모바일 상단 검색영역 */
$(function(){
	$('#m_top .m_sch').click(function(){
		$('.sch_area').animate({left: '60px'});
		$('#m_top .m_close').show();
		$('#m_top .m_sch').hide();
	});
	$('#m_top .m_close').click(function(){
		$('.sch_area').animate({left: '9999px'});
		$('#m_top .m_close').hide();
		$('.m_sch').show();
	});
});

//lnb
$(function(){	
	 if ( $(".lnb .th2 .th3").length > 0 ) {		
		$(".lnb .th2 .th3").parent("li").addClass("up_over");		
	 }; 	 
	 $(".lnb .th2>li>a").on("click",function(){			
		if ($(this).next(".th3").is(':hidden')){
			$(this).next(".th3").slideDown();			
			$(this).parent("li").addClass("up");
		}else{					
			 if ( $(".lnb .th2>li.up>a").length > 0 ) {		
				$(this).next(".th3").slideUp(function(){
					$(this).parent("li").addClass("up_over");				
				});			
			 }else{
				$(".lnb .th2>li.current>a").next(".th3").slideDown();					 
			 };			
			$(this).parent("li").removeClass("up");
		};
	}); 
});

/* 모바일 LNB */
$(function(){
	$(".m_lnb_open").click(function() {
		 $( ".m_lnb" ).toggle();       
	});
});


//label placeholder
$(function(){
	$o1 = $("label.placeholder"),
	$o2 = $("label.placeholder").next();

	$o1.css("position","absolute");

	$o1.bind("click focusin",function(){
		$(this).css({"visibility":"hidden"});
	});
	$o2.bind("click focusin",function(){
		$(this).prev().css({"visibility":"hidden"});
	});

	$o2.bind("focusout",function(){
		if($(this).val() == ""){
			$(this).prev().css({"visibility":"visible"});
		}
	});

	if($o2.val() != "") $o1.css({"visibility":"hidden"});
});

//tabChange 
function tabChange(obj,num,hId,total) {
    for (i=1; i<=total; i++)    {
		var hIds = document.getElementById (hId+i);
        if (i==num)    {
            document.getElementById(obj+i).style.display = "block";
			if(hIds){hIds.className = "on";}
        }
        else {
            document.getElementById(obj+i).style.display = "none";
			if(hIds){hIds.className = "";}
        }
    }
}

// 메인 롤링
$(function(){
	var slidesLen = ($("#slides_main").find("img").length > 1);
	if (slidesLen) {
		$('#slides_main').slidesjs({
			width:1000,
			height:300,
			 callback:{
			  complete:function(number){
				$('#slides_main').find('img').eq(number - 1).css('display', 'block');
			  }
			},
			play:{
			  active:true,
			  auto:true,
			  interval:5000,
			  swap:true		 
			}
		});
	}
});

// 알림배너
$(function(){
	var slidesLen2 = ($("#slides2").find("img").length > 1);
	if (slidesLen2) {
		$('#slides2').slidesjs({
			width:294,
			height:150,
			 callback:{
			  complete:function(number){
				$('#slides2').find('img').eq(number - 1).css('display', 'block');
			  }
			},
			play:{
			  active:true,
			  auto:true,
			  interval:4000,
			  swap:true		 
			}
		});
	} else {
        $("#slides2").find("img").css('width','294');
        $("#slides2").find("img").css('height','150');
    }  
});

//footer familysite
$(function(){
	$("#footer .site>a").click(function() {
        $(this).next("ul").toggle();
		return false;
	});
	 
	$("#footer .site>ul>li").click(function() {
		//$(this).parent().hide().parent("#footer .site").children("a").text('재단사이트');
		//$(this).prependTo($(this).parent());
        $('.site01').text('재단사이트 바로가기');
        $('.site02').text('유관기관 바로가기');
        $(this).parent().hide();
        
	});

	$("#footer .site>ul>li:last-child").focusout(function() {
		$("#footer .site>ul").hide();
	});
});


/* footer familysite
$(function(){
	$("#footer .site>a").click(function() {
		$(this).next("ul").toggle();
		return false;
	});
	 
	$("#footer .site>ul>li").click(function() {
		$(this).parent().hide().parent("#footer .site").children("a").text($(this).text());
		$(this).prependTo($(this).parent());
		$('.btn_site').text('유관기관바로가기');
	});

	$("#footer .site>ul>li:last-child").focusout(function() {
		$("#footer .site>ul").hide();
	});
});
 */
/* faq
$(function(){
	$(".faq_wrapper dd").css("display","none");
	
	$faqMenu = $(".faq_wrapper dt a"),
	$faqSub = $(".faq_wrapper dd");
	
	$faqMenu.click(function(e){
		e.preventDefault();
		
		$faqSub.each(function(menu_idx){
			if($(this).parents().next().css("display") == "block"){
				$("dt.on").removeClass("on");
				$(this).slideUp("fast");
			}
		});
		
		$(this).parents().removeClass("on");
		$(this).next().slideUp("nomal");
		
		if($(this).parents().next().is(":hidden") == true) {
			$(this).parents().addClass("on");
			$(this).parents().next().slideDown("fast");
		}
	});
});
*/

jQuery(function(){
	
	var article = $('.faq_wrapper dl');
	article.addClass('hidden_faq');
	article.find('dd').slideUp(100);
	article.eq(0).removeClass('hidden_faq').addClass('hidden_faq'); // 첫 번째 항목을 닫아 둡니다
	article.eq(0).find('dd').slideUp(100); // 첫 번째 항목을 닫아 둡니다
	
	$('.faq_wrapper dl dt').click(function(e){
		e.preventDefault();

		var myArticle = $(this).parents('.faq_wrapper dl:first');
		if(myArticle.hasClass('hidden_faq')){
			article.addClass('hidden_faq').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			article.find('dd').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('hidden_faq').addClass('show');
			myArticle.find('dd').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hidden_faq');
			myArticle.find('dd').slideUp(100);
		}
	});

});


/* 업소소개 */
$(function(){
	$("#gallery_navi > li > a").bind("mouseenter focusin", function() {
		// 상세이미지 변경
		$("#gallery_panel > img").attr("src", $(this).children('img').attr('src'));
		$("#gallery_navi > li > a").removeClass("current");
		$(this).addClass("current");
		return false;
	});

	// 클릭시 이벤트 막음
	$("#gallery_navi a").bind("click", function() {
		return false;
	});
});						

/* 지난한상대회 */
$(function(){
	$(".han_gallery > ul li > a").click(function() {
		// 상세이미지 변경
		$(".han_gallery .photo img").attr("src", $(this).children('img').attr('src'));
		$(".han_gallery > ul li > a").removeClass("current");
		$(this).addClass("current");
		
		return false;
		e.preventDefault();
	});
});

/* 서로 다른 height */
$(function(){	
	function equalHeight() {
		var eqlWrap = $('.equallHeight').find('.targetH');
		
		eqlWrap.each(function(){
			var $this = $(this);			
			$this.children('.thisH').css({'height':$this.height()+"px"});
		});	
	};

	$(window).load(function(){	
		equalHeight();
	});
	
	// resize 리스너 고의지연
	var resizeTimer;
	$(window).on('resize', function (e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(equalHeight, 250);
	});	
});


/* 아코디언 */
jQuery(function(){
	
	var article = $('.accordion dl');
	article.addClass('hide_con');
	article.find('.txt').slideUp(100);
	article.eq(0).removeClass('hide_con').addClass('hide_con'); // 첫 번째 항목을 닫아 둡니다
	article.eq(0).find('.txt').slideUp(100); // 첫 번째 항목을 닫아 둡니다
	
	$('.accordion .tit').click(function(e){
		e.preventDefault();

		var myArticle = $(this).parents('.accordion dl:first');
		if(myArticle.hasClass('hide_con')){
			article.addClass('hide_con').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			article.find('.txt').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
			myArticle.removeClass('hide_con').addClass('show');
			myArticle.find('.txt').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide_con');
			myArticle.find('.txt').slideUp(100);
		}
	});

});


/* 브랜드 */
$(function(){
	
	$('.big1').click(function(e){
		e.preventDefault();		
		$('.big1_kor').css('display','block');		
	});
	$('.big1_kor').click(function(e){
		e.preventDefault();		
		$(this).css('display','none');		
	});

	$('.big2').click(function(e){
		e.preventDefault();		
		$('.big2_eng').css('display','block');
	});
	$('.big2_eng').click(function(e){
		e.preventDefault();		
		$(this).css('display','none');		
	});

	$('.big3').click(function(e){
		e.preventDefault();		
		$('.big3_chi').css('display','block');
	});
	$('.big3_chi').click(function(e){
		e.preventDefault();		
		$(this).css('display','none');		
	});
});

/* 호텔안내 */
$(function(){		
	$(window).on('load', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelHei01 = $(".hotel_info .step1");
		var hotelHei02 = $(".hotel_info .step2");

		if ($(window).width() < 801){
			hotelHei01.css({"top":imgHei+ 50 + "px"});
			hotelHei02.css({"top":imgHei+ 50 + "px"});
		} else {
			hotelHei01.css({"top":"40px"});
			hotelHei02.css({"top":"100px"});
		};
	});
	$(window).on('resize', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelHei01 = $(".hotel_info .step1");
		var hotelHei02 = $(".hotel_info .step2");

		if ($(window).width() < 801){
			hotelHei01.css({"top":imgHei+ 50 + "px"});
			hotelHei02.css({"top":imgHei+ 50 + "px"});
		} else {
			hotelHei01.css({"top":"40px"});
			hotelHei02.css({"top":"100px"});
		};

	});	
});
$(function(){		
	$(window).on('load', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelHei03 = $(".hotel_info .step3");
		var hotelHei04 = $(".hotel_info .step4");

		if ($(window).width() < 801){
			hotelHei03.css({"top":imgHei+ 110 + "px"});
			hotelHei04.css({"top":imgHei+ 110 + "px"});
		} else {
			hotelHei03.css({"top":"160px"});
			hotelHei04.css({"top":"220px"});
		};
	});
	$(window).on('resize', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelHei03 = $(".hotel_info .step3");
		var hotelHei04 = $(".hotel_info .step4");

		if ($(window).width() < 801){
			hotelHei03.css({"top":imgHei+ 110 + "px"});
			hotelHei04.css({"top":imgHei+ 110 + "px"});
		} else {
			hotelHei03.css({"top":"160px"});
			hotelHei04.css({"top":"220px"});
		};
	});	
});
$(function(){		
	$(window).on('load', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelHei05 = $(".hotel_info .step5");
		var hotelHei06 = $(".hotel_info .step6");

		if ($(window).width() < 801){
			hotelHei05.css({"top":imgHei+ 170 + "px"});
			hotelHei06.css({"top":imgHei+ 170 + "px"});
		} else {
			hotelHei05.css({"top":"280px"});
			hotelHei06.css({"top":"340px"});
		};
	});
	$(window).on('resize', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelHei05 = $(".hotel_info .step5");
		var hotelHei06 = $(".hotel_info .step6");

		if ($(window).width() < 801){
			hotelHei05.css({"top":imgHei+ 170 + "px"});
			hotelHei06.css({"top":imgHei+ 170 + "px"});
		} else {
			hotelHei05.css({"top":"280px"});
			hotelHei06.css({"top":"340px"});
		};
	});	
});
$(function(){		
	$(window).on('load', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelCon = $(".hotel_info .hotel_con");

		if ($(window).width() < 801){
			hotelCon.css({"padding-top":"163px"});
		} else {
			hotelCon.css({"padding-top":"0px"});
		};
	});
	$(window).on('resize', function(){
		var imgHei = $(".hotel_info .img_area img").height();
		var hotelCon = $(".hotel_info .hotel_con");

		if ($(window).width() < 801){
			hotelCon.css({"padding-top":"163px"});
		} else {
			hotelCon.css({"padding-top":"0px"});
		};
	});	
});


/* 준비중입니다 - alert */
$(function(){	
	$('.alert_pop').click(function(e){
		alert('준비중입니다.');	
	});

});

/* 준비중입니다. en - alert */
$(function(){	
	$('.alert_pop_en').click(function(e){
		alert('It is getting to prepare.');	
	});
});

/* 준비중입니다. both - alert */
$(function(){	
	$('.alert_pop_both').click(function(e){
		//alert('준비중입니다.\nIt is getting to prepare.');	
      alert('will be announced later.');	
	});
});


/* 추후공지 - alert */
$(function(){	
	$('.alert_later').click(function(e){
		alert('추후 공지 될 예정입니다.');	
	});

});


$(function(){	
	$('.alert_later_jap').click(function(e){
		alert('後ほど詳細をお知らせします。');	
	});

});