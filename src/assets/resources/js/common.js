/* for public jquery */
$(function(){

	var openAside = $('.Bugger') ;
	var closeAside = $('.wrap .wrapAside .btnClose a, .wrap .wrapAside .bg');
	var aside = $('.wrap .wrapAside');
	openAside.on('click' , function(){
		$('html').css('overflow','hidden').addClass('expand');
		 $(aside).css('visibility','visible');
		return false;
	});

	closeAside.on('click' , function(){
		$('html').css('overflow','auto').removeClass('expand');
		$(aside).css('visibility','hidden');
		return false;
		
	});


	// full height 100%
	var notCntH = $('.wrap > *').not('.fullH, script'); // 해당 contents를 뺀 나머지
	var cntH = $('.wrap .fullH').outerHeight();
	function resizeH(){
		var total = 0;
		notCntH.each(function() {
			total += $(this).outerHeight(true);
		});
		var totalH = $(window).height() - total;
		if(cntH < totalH){
			$('.wrap .fullH').outerHeight(totalH);
		} else {
			$('.wrap .fullH').css('height','auto');
		}
	}
	if($('.wrap').find('.fullH').filter(':not(".noData")').length !== 0){
		$(window).on('load resize', function(){
			resizeH();
		});
	}

	// footer 위치값 하단 조정
	// function posFooter(){
	// 	var wrapH = $('.wrap').outerHeight();
	// 	var winH = $(window).outerHeight();
	// 	var footerH = $('.footer').outerHeight();
	// 	if(wrapH < winH){ // 윈도우 스크롤 생성 X
	// 		$('.footer').addClass('fixed');
	// 		$('.wrap').css('padding-bottom', footerH);
	// 	} else { // 윈도우 스크롤 생성 O
	// 		$('.footer').removeClass('fixed');
	// 		$('.wrap').css('padding-bottom', 0);
	// 	}
	// }
	// $(window).on('load resize', function(){
	// 	posFooter();
	// });


	// toggle button
	var btnToggle = $('.wrap .btnToggle a');
	btnToggle.on('click', function(){
		$(this).toggleClass('on');
		return false;
	});

	// layer popup - open
	window.openLayer = function(el){
		//var h = 0;
		//var w = 0;
		var scArea = $('.wrapPop .cnt .scrollArea');
		$('.wrapPop').not('.layered').hide();
		$(el).show();
		//h = $(el).find('.popCnt').outerHeight();
		//w = $(el).find('.popCnt').outerWidth();
		//$(el).find('.popCnt').css({'margin-top':-(h/2), 'margin-left':-(w/2)});
		if($(el).find('.scrollArea').length > 0){ // has scrollArea
			scArea.scrollTop(0);
		}
		return false;
	}

	// layer popup - close
	window.closeLayer = function(el){
		$(el).hide();
		return false;
	}

	// 팝업 외 영역 터치시 팝업 닫기
	$(document).on('click', '.wrapPop:visible', function(e){
		var tg = $('.wrapPop .popCnt');
		if(tg.has(e.target).length === 0){
			 $('.wrapPop').hide();
		}
	});

	// input type="file"
	var fileTarget = $('.wrapInputFile .inputFile');
	fileTarget.on('change', function(){
		var filename = $(this)[0].files[0].name;
		$(this).parents('.wrapInputFile').append('<div class="remove"><input type="text" class="input" value="' + filename + '" readonly=""><button type="button" class="btnRemove">첨부파일</button></div>');
		$(this).parents('.wrapInputFile').find('.add').hide();
	});

	//tabs control
	$(".tab_content").hide();
	$(".tab_content:first").show();

	$("ul.tabs li").click(function () {
		$("ul.tabs li").removeClass("active");
		$(this).addClass("active");
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn();
	});
});


//토스트 팝업
function launch_toast() {
	$(".toast").addClass('show');
	setTimeout(function(){
		$(".toast").removeClass('show');
	 }, 4000);
};


// 약관 동의
function cntAgree(){
	// 전체 약관동의 선택
	var chckAll = $('.cntAgree .chckAll [type="checkbox"]');
	var inputChck = $('.cntAgree .agree_list input[type="checkbox"]');
	inputChck.on('click', function(){
		var chckedLeng = $('.agree_list input[type="checkbox"]:checked');
		if(inputChck.length == chckedLeng.length){ // 전체 체크 되었을 시
			chckAll.prop('checked', true);
		} else {
			chckAll.prop('checked', false);
		}
	});
	chckAll.on('click', function(){
		var chckStatus = $(this).prop('checked');
		var cntChck = $(this).parents('.chckAll').next('.agree_list').find('input[type="checkbox"]');
		cntChck.each(function(){
	        $(this).prop('checked', chckStatus);
	     });
	});
}
