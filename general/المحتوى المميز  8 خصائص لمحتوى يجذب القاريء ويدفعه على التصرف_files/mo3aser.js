$(document).ready(function() {
/*
$("#marketplace-switcher").click(function(){
	$("#marketplace-panel").show();
	var c = $(".tabs-wrap")
	c.css("width",$(document).width());
	c.css("height",$(window).height());
	c.show()
});
	c.click(function(){
		$("#marketplace-panel").hide();
	c.hide()
	});
  	*/
	
	
	$getsocial=$('.smart-social');
	var $main = $('#smart-social-main');
	if($main.length>0){
		$(window).scroll(function(){
			postShareScroll();
		});
		$(window).load(function(){
			postShareScroll();
		});
		function postShareScroll(){
			var mainX=parseInt($main.offset().left-87);
			var mainY=408;
			var scrollY=$(window).scrollTop();
			if($getsocial.length>0){
				if(scrollY>mainY){
					$getsocial.stop().css({position:'fixed',top:'8px',right:mainX,marginLeft:0,display:'inline'});
				}else if(scrollY<mainY){
					$getsocial.css({position:'absolute',top:'408px',right:'-86px',marginLeft:0,display:'inline'});
				}
			}
		}
	}

/*--------------*/
	$(".tabs-wrap").hide();
	$("ul.posts-taps li:first").addClass("active").show();
	$(".tabs-wrap:first").show(); 
	$("li.tabs").click(function() {
		$("ul.posts-taps li").removeClass("active");
		$(this).addClass("active");
		$(".tabs-wrap").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});


/*--------------*/

	$(".sites-content").hide();
	$("ul.sites-tabs li:first").addClass("active").show();
	$(".sites-content:first").show(); 
	$("li.tabs1").click(function() {
		$("ul.sites-tabs li").removeClass("active");
		$(this).addClass("active");
		$(".sites-content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});


/*--------------*/
	$("#buttons li , .top-navigation li , .network li").each(function(){	
		var $sublist = $(this).find('ul:first');		
		$(this).hover(function(){	
			$sublist.stop().css({overflow:"hidden", height:"auto", display:"none"}).slideDown(200, function(){
				$(this).css({overflow:"visible", height:"auto"});
			});	
		},
		function(){	
			$sublist.stop().slideUp(200, function()	{	
				$(this).css({overflow:"hidden", display:"none"});
			});
		});	
	});
/*--------------*/	

	var jval2 = {
		
		'title' : function() {
			var ele = $('#author');
			if(ele.val().length < 3  ) {
				jval2.errors = true;
				ele.removeClass('normal').addClass('error');
			} else {
				ele.removeClass('error').addClass('normal');
			}
		},
		'email' : function() {
			var ele = $('#email');
			var patt = /^.+@.+[.].{2,}$/i;

			if(!patt.test(ele.val())) {
				jval2.errors = true;
				ele.removeClass('normal').addClass('error');
			} else {
				ele.removeClass('error').addClass('normal');
			}
		},
		'details' : function() {
			var ele = $('#comment');
			if(ele.val().length < 10 ) {
				jval2.errors = true;
				ele.removeClass('normal').addClass('error');
			} else {
				ele.removeClass('error').addClass('normal');
			}
		}
	};

	 $("#commentform").submit(function() {
		jval2.errors = false;
		jval2.title();
		jval2.email();
		jval2.details();
		
		if(jval2.errors)
			return false;
		
    });
	
	$('#author').blur(jval2.title);
	$('#email').blur(jval2.email);
	$('#comment').blur(jval2.details);
	
	$('#author').keyup(jval2.title);
	$('#email').keyup(jval2.email);
	$('#comment').keyup(jval2.details);
	
	
/*--------------*/	
	$(function(){
		 $('a[href*=#top]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			&& location.hostname == this.hostname) {
				 var $target = $(this.hash);
				 $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				 if ($target.length) {
					 var targetOffset = $target.offset().top;
					 $('html,body').animate({scrollTop: targetOffset}, 700);
					 return false;
				 }
			 }
		 });
	 });	
			
});
/*--------------*/
