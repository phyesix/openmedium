$(document).ready(function(){
	var pagebody = $(".wrapper");
	var pagecontent = $(".page-wrap");
	var cover = $(".cover-body");
	var button = $("#nav-toggle");
	var bio = $('.wrapper .bio');
	var nav = $("#nav");
	var comment = $("#comment-sidebar");
	var bubble = $(".comment-count");
	var search_icon = $(".search-icon");
	var search_form = $("#nav-list-search");
	var comment_toggle = $("#comment-toggle, .comment-reply-link");
	var comment_form = $("#commentform");
	
	function open_nav() { 
		nav.delay(200).animate({
			left: "0px"
		}, 300);
		cover.delay(200).animate({
			left: "280px"
		}, 300),
		pagebody.delay(200).animate({
			left: "280px"
		}, 300);
		button.animate({
		    top: "-30px"
		}, { duration: 300, queue: false });
		button.fadeOut('fast');

		bio.animate({
		    top: "-30px"
		}, { duration: 300, queue: false });
		bio.fadeOut('fast');
	};
	
	function close_nav() {
		cover.animate({
			left: "0px"
		}, 180),
		pagebody.animate({
	        left: "0px"
	    }, 180);
		nav.animate({
			left: "-280px"
		}, 180, function(){
			button.animate({
		        top: "10px"
		    }, { duration: 180, queue: false });
			button.fadeIn('slow');

			bio.animate({
		        top: "0"
		    }, { duration: 180, queue: false });
			bio.fadeIn('slow');
	    });
		search_form.slideUp('fast');
	};

	function open_comment(top) {
		pagecontent.animate({
			'left': "-50%",
			'margin-right': 0
		}, 300, function(){
			comment.css({
				'visibility': 'visible',
				'margin-top': top
			});
		});
	}

	function close_comment() {
		comment.css('visibility', 'hidden');
		pagecontent.css('margin', '0 auto').animate({
	        'left': "0px"
	    }, 180);
	    $(".bubble-active").removeClass('bubble-active');
	}

	function open_form() {
		comment_form.slideDown('slow');
		comment_toggle.fadeOut('fast');
	}

	button.live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		
		if(leftval == "0px") {
			open_nav();
		}
	});

	bubble.live("click", function(e){
		e.preventDefault();
		var leftval = pagebody.css('left');
		var position = $(this).offset();

		$(this).addClass('bubble-active');
		if(leftval == "0px"){
			open_comment(position.top);
		}
	});

	pagebody.live("click", function(){
		var leftval = pagebody.css('left');

		if(leftval == "280px") {
			close_nav();
		}
	});

	pagecontent.live("click", function(){
		var leftval = pagecontent.css('left');
		if(leftval == "-50%") {
			close_comment();
		}
	})

	search_icon.live("click", function(){
		if(search_form.css('display') == "none"){
			search_form.slideDown('slow');
		} else {
			$("form[id=searchform]").submit();
		}
	});

	comment_toggle.click(function(){
		open_form();
	});
	
	
	
	
	var links = document.querySelectorAll('.post-social-share a');
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = social_popup;
	}

	function social_popup(e){
		var top = (screen.availHeight - 500) / 2;
		var left = (screen.availWidth - 500) / 2;
		var e = (e ? e : window.event);
		var target = (e.target ? e.target : e.srcElement);
		var url = $(this).attr('href');
		var popup = window.open(url,'social','width=500,height=500,left='+ left +',top='+ top +',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');

		if(popup) {
			popup.focus();
			if(e.preventDefault) e.preventDefault();
			e.returnValue = false;
		}

		return !!popup;
	}

	var backgroundImage = $('.featured-img').attr('style');
	if( backgroundImage == "background-image: url()" ){
		$('.featured-image').css('display','none');
		$('.group-and-comment').css('margin-top', '50px')
	}



});


 $(window).scroll(function(){
    var featureHeight = $('.featured-image').height();
	var scrollHeight = $(window).scrollTop();

	if( scrollHeight >= featureHeight ) {
		$('.header-background').css('display','block');
		$('.bio div').css('color', 'rgba(0,0,0,0.3)');
		$('.bio div a').css('color', 'rgba(0,0,0,0.3)');
		$('.wrapper .nav-rss, .wrapper .nav-rss i').css('color', 'rgba(0,0,0,0.3)');
		$('.wrapper .nav-rss').css('border', '1px solid rgba(0,0,0,0.3)');
	} else {
		$('.header-background').css('display','none');
		$('.bio div').css('color', '#FFF');
		$('.bio div a').css('color', '#FFF');
		$('.wrapper .nav-rss, .wrapper .nav-rss i').css('color', 'rgba(255,255,255,1)');
		$('.wrapper .nav-rss').css('border', '1px solid rgba(255,255,255,1)');
	} 
})


