/*
	Pythian Group - web scripts for www.pythian.com
	Created by BV02 Inc.Ottawa, ON Canada
			
*/

/* Declare some variables */
	var tempValue,
	tempValue2,
	defaultSearch = 'Search',
	defaultUsername = 'Enter your username',
	defaultUserEmail = 'Enter your e-mail address',
	defaultValue,
	navIndex,
	twitterName,
	tempWidthValue,
	tempHeightValue;

/* Scripts to clear default form values onclick and restore them on blur */
	function clearDefault(el) {
		if ($(this).val() != ''){
			if(defaultValue === ''){
				defaultValue = $(this).val();
			}
			$(this).css('color','#000');
			$(this).attr('value','');
		}
	}
	function restoreDefault(el) {
		if ($(this).val() === ''){
			$(this).css('color','#999');
			$(this).attr('value',defaultValue);
		}
	}
	function getAndSetWidth(el) {
		tempValue = el.css('width');
		return tempValue;
	}
	function getAndSetHeight(el) {
		tempValue = el.css('height');
		return tempValue;
	}

/* Actions that buttons on tabbed pages trigger */
	function tabTools(navIndex){
		if($('.relatedLinks').length > 0){
			$('.relatedLinks').hide();
			$('#relatedLinks-'+navIndex).fadeIn('slow');
		}
		$('ul#mainNavigation li.expanded ul li.current').removeClass('current');
		if(navIndex == "1"){
			$('ul#mainNavigation li.expanded ul li:nth-child(1)').addClass('current');
		}
		else if(navIndex == "2"){
			$('ul#mainNavigation li.expanded ul li:nth-child(2)').addClass('current');
		}
		else if(navIndex == "3"){
			$('ul#mainNavigation li.expanded ul li:nth-child(3)').addClass('current');
		}
		else if(navIndex == "4"){
			$('ul#mainNavigation li.expanded ul li:nth-child(4)').addClass('current');
		}
		else if(navIndex == "5"){
			$('ul#mainNavigation li.expanded ul li:nth-child(5)').addClass('current');
		}
		return false;
	}


/* jQuery vertical alignment snippet */
/*
(function ($) {
$.fn.vAlign = function() {
	return this.each(function(i){
		var ah = $(this).height();
		var ph = $(this).parent().height();
		var mh = (ph - ah) / 2;
		$(this).css('margin-top', mh);
	});
};
})(jQuery);
*/

/* Wait for DOM to load fully, then apply effects, manipulate page */

$(document).ready(function(){

	/* declare some page variables */


	/* Search field functions
		- removes placeholder text,
		adds it back in if no terms supplied by user...
	*/
		var clearDefault = function() {
			if ($(this).val() == defaultSearch){
				$(this).css('color','#333');
				$(this).attr('value','');
			}
		};
		var restoreDefault = function(el) {
			if ($(this).val() === ''){
				$(this).css('color','#999');
				$(this).attr('value',defaultSearch);
			}
		};
		var clearDefaultEmail = function() {
			if ($(this).val() == 'enter your e-mail address'){
				var defaultEmail = $(this).val();
				$(this).attr('value','');
			}
		};
		var restoreDefaultEmail = function(el) {
			if ($(this).attr('value') === ''){
				$(this).attr('value','enter your e-mail address');
			}
		};
		var clearDefaultUsername = function() {
			if ($(this).val() == defaultUsername){
				$(this).css('color','#333');
				$(this).attr('value','');
			}
		};
		var restoreDefaultUsername = function() {
			if ($(this).attr('value') === ''){
				$(this).css('color','#999');
				$(this).attr('value',defaultUsername);
			}
		};
		var clearDefaultUserEmail = function() {
			if ($(this).val() == defaultUserEmail){
				$(this).css('color','#333');
				$(this).attr('value','');
			}
		};
		var restoreDefaultUserEmail = function() {
			if ($(this).attr('value') === ''){
				$(this).css('color','#999');
				$(this).attr('value',defaultUserEmail);
			}
		};
		var getSetWidth = function(){
			tempWidthValue = $(this).width();
			$(this).css('width',tempWidthValue);
		};
		var getSetHeight = function(){
			tempHeightValue = $(this).height();
			$(this).css('height',tempHeightValue);
		};
var vAlign = function() {
	return this.each(function(i){
		var ah = $(this).height();
		var ph = $(this).parent().height();
		var mh = (ph - ah) / 2;
		$(this).css('margin-top', mh);
	});
};
	/* Corner-rounding functions, browser-specific */
		if($.browser.msie){
			if($.browser.version == "6.0"){
				DD_roundies.addRule('.rounded', 5, false);
				DD_roundies.addRule('#globalSearch', 3, false);
				DD_roundies.addRule('ul.tabs li a', 4, false);
				DD_roundies.addRule('#rightSidebar .callout.round', 5, false);
				DD_roundies.addRule('#rightSidebar .callout h3.round', 5, false);
			}
			else if($.browser.version == "7.0"){
				DD_roundies.addRule('.rounded', 5, false);
				DD_roundies.addRule('#secondaryNav>li>a', 5, false);
				DD_roundies.addRule('#globalSearch', 3, false);
				DD_roundies.addRule('ul.tabs li a', 4, false);
				DD_roundies.addRule('#rightSidebar .callout', 5, false);
				DD_roundies.addRule('#rightSidebar .callout h3', 5, false);
			}
			else if($.browser.version == "8.0"){
				DD_roundies.addRule('.rounded', 5, true);
				DD_roundies.addRule('#secondaryNav>li>a', 5, true);
				DD_roundies.addRule('#globalSearch', 3, true);
				DD_roundies.addRule('ul.tabs li a', 4, true);
				DD_roundies.addRule('#rightSidebar .callout.round', 5, true);
				DD_roundies.addRule('#rightSidebar .callout h3.round', 5, true);
			}
		} else {
			DD_roundies.addRule('.innerBanner img', 5, true);
			DD_roundies.addRule('.rounded', 5, true);
			DD_roundies.addRule('#secondaryNav li>a', 5, true);
			DD_roundies.addRule('div.form input:text', 3, true);
			DD_roundies.addRule('#globalSearch', 3, true);
			DD_roundies.addRule('ul.tabs li a', 4, true);
			DD_roundies.addRule('#content .box', 9, true);
			DD_roundies.addRule('#rightSidebar .callout.round', 5, true);
			DD_roundies.addRule('#rightSidebar #swfContent a', 5, true);
			DD_roundies.addRule('#rightSidebar .callout h3.round', 5, true);
			DD_roundies.addRule('#homePostIts', '0 0 5px 5px', true);
			DD_roundies.addRule('#homeFeatured .navigation', '0 0 5px 5px', true);
		}

	/* Forms scripts */
		$('#globalSearch #search').attr('value','Search');
		$('#globalSearch #search').focus(clearDefault);
		$('#globalSearch #search').blur(restoreDefault);
		$('#globalSearch #search').keypress(function(e){
			if(!e){
				e = window.event;
			}

			if(e.keyCode == 13) {
				$('#globalSearchBtn').click(); 
			}
		});

		$('#rightSidebar #newsEmail').focus(clearDefaultEmail);
		$('#rightSidebar #newsEmail').blur(restoreDefaultEmail);

		$('#support-track-login input#userName').focus(clearDefaultUsername);
		$('#support-track-login input#userName').blur(restoreDefaultUsername);

		$('#support-track-password input#userName').focus(clearDefaultUsername);
		$('#support-track-password input#userName').blur(restoreDefaultUsername);

		$('#support-track-password input#userEmail').focus(clearDefaultUserEmail);
		$('#support-track-password input#userEmail').blur(restoreDefaultUserEmail);

		var webinarNotifySignup = function(){
			$('#rightSidebar .globalLinks a.webinars').click();
		};

		$('.content-footer a.notify').click(function(){webinarNotifySignup();return false;});

		$('#rightSidebar .globalLinks a.webinars').click(function(){
		$('#rightSidebar .notifyOfWebinars').modal({
			overlay:80,
			overlayCss: {backgroundColor:'#000'},
			overlayClose: true,
			onOpen: function (dialog) {
				dialog.overlay.fadeIn('normal', function () {
					$('a.modalCloseImg').hide();
					dialog.data.hide();
					dialog.container.fadeIn('fast', function () {
						dialog.data.fadeIn('normal');
						$('a.modalCloseImg').fadeIn('normal');
					});
				});
			},
			onClose: function (dialog) {
				$('a.modalCloseImg').fadeOut('normal');
				dialog.data.fadeOut('normal', function () {
					dialog.container.fadeOut('fast', function () {
						dialog.overlay.fadeOut('normal', function(){
							$.modal.close();
						});
					});
				});
			}});
			return false;
		});
		$('#resumeForm form').validate();
		$('#racWorkloadDownloadForm').validate();
		$('#inquiryForm form').validate();
		$('#webinar-notification').validate();
		$('form#webinar-notification-library').validate();

	/* Adjust margins, equalize heights, add highlight styles */
		$('.row').addClass('clearfix');
		if($('div.library-landing-page')){
			$('div.library-landing-page .row').each(function(){
				$(this).children('.box').equalHeights();
			});
		}
		if($('div.news-landing-page')){
			$('div.news-landing-page .row').each(function(){
				$(this).children('.box:not(.widest)').equalHeights();
			});
		}
		$('.row').each(function(){
			$(this).children('.cell').equalHeights().height($(this).children('.cell').height()+50);
		});
		$('ul.blogCategories li:last-child').addClass('last');
		$('.row .box:last-child').each(function(){$(this).addClass('last');});
		$('.row .cell:last-child').each(function(){$(this).addClass('last');});
		$('.content-footer').each(function(){
			if($(this).children('a').size() > 1){
				$('.content-footer a:last-child').addClass('last');
			}
		});
		$('.content-footer a.getStarted, .content-footer a.readMore').each(function(){
			$(this).attr('title',$(this).text());
		});
		$('h2 a').each(function(){
			$(this).attr('title',$(this).text());
		});
		
		/* Member team scripts */
		if($('#management-team-page')){
			var bioPageBg = 'url(' + $('img#bioPhoto').attr('src') + ')';
			$('#bioPhoto').css('display','none');
			$('.bioContent').css('background-image',bioPageBg);
			$('.bioContent').addClass('bioBg');
			$('.bioExtras a').attr('target','_blank');
			if($('.tweet[id]')){
				twitterName = $('.tweet').attr('id');
			}
		}
		$('#management-team-page div h4:first-child').each(function(){$(this).addClass('first');});
		if($('#management-team-page blockquote p.bq').height() > 50 && $('#management-team-page blockquote p.bq').height() < 79){
			$('#management-team-page .blockquote blockquote').css('bottom','16px');
		}
		else if($('#management-team-page blockquote p.bq').height() > 80){
			if($('#management-team-page blockquote p.bq').height() > 90){
				$('#management-team-page .blockquote blockquote').css('bottom','26px');
				$('#management-team-page .blockquote, #management-team-page .blockquote p.bq').css('width','460px');
				$('#management-team-page .blockquote p.bq').css('font-size','123.1%');
			} else{
				$('#management-team-page .blockquote blockquote').css('bottom','16px');
				$('#management-team-page .blockquote, #management-team-page .blockquote p.bq').css('width','460px');
				$('#management-team-page .blockquote p.bq').css('font-size','123.1%');
			}
		}

		if($('.tweet')){
				if(twitterName===undefined){
				$(".tweet").tweet({
					username: "pythian",
					join_text: "auto",
					avatar_size: 32,
					count: 3,
					loading_text: "loading tweets..."
				});
			}
			else{
				$(".tweet").tweet({
					username: twitterName,
					join_text: "auto",
					avatar_size: 32,
					count: 3,
					loading_text: "loading tweets..."
				});
			}
		}

		/*  Customers page */
		$('#customers table td a').attr('title',$(this).find('img').attr('alt'));

		/* Tabbed content pages */
		$("#locationNav").tabs("#locationNav>div", {tabs: 'h3 a', effect: 'slide'});
		$('ul.activatedTabs li a').click(function(){
			var tabText = $(this).attr('title');
			$('#breadcrumb ul li:last-child').text(tabText);
			return false;
		});

		/* Callout scripts */
		if($('.youtubeCallout')){
			//var ytThumbPath = $('.youtubeCallout table a img').attr('src');
			$('.youtubeCallout table a img').parent().clone().insertBefore('.youtubeChanellLink').addClass('ytThumb');
			/*$('.ytThumb img').attr('width','159');
			$('.ytThumb img').attr('height','119');*/
			$('.youtubeCallout table').hide();
			$('.ytThumb').attr('target','_blank');
		}

	/* initialize navigation */
		$('#mainNav>ul>li.current').addClass('expanded');
		$('#mainNav ul li.expanded ul').show();
		$("ul.sf-menu").superfish({
			pathClass:'current'
		});
		$("ul#mainNavigation li.contact ul").remove();
		$('ul#mainNavigation li:first-child').addClass('first');
		$('ul#mainNavigation li:last-child').addClass('last');
		$('#mainNav>ul>li').hover(function(){
				$('#mainNav>ul>li.expanded').addClass('f2').prev().addClass('f2');
				/* hide borders on nav item */
				$(this).addClass('f2');$(this).prev().addClass('f2');
			},function(){
				$('#mainNav>ul>li.expanded').addClass('f2').prev().addClass('f2');
				if(!$(this).hasClass('expanded')){
					/* show borders on nav item */
					$('#mainNav ul li').removeClass('f2').prev().removeClass('f2');
				}
			}
		);
		$('#header').hover(function(){
				$('#mainNav>ul>li.expanded').addClass('f2').prev().addClass('f2');
			},function(){}
		);
		$('#breadcrumb').hover(function(){
				$('#mainNav>ul>li.expanded').addClass('f2').prev().addClass('f2');
			},function(){}
		);
		$('#mainNav>ul>li.expanded').hover(function(){},function(){
				if($(this).hasClass('expanded')){}
				else{
					$(this).removeClass('f2'); /* shows borders on nav item */
					$(this).prev().removeClass('f2');
				}
			}
		);
		$('#mainNav>ul>li.expanded').addClass('f2').prev().addClass('f2');

		if($('.tabbed-page').length !== 0){
			$('ul#mainNavigation li.expanded ul li:nth-child(1) a').bind('click',function(){
				$('ul.tabs li:nth-child(1) a').trigger('click');
				return false;
			});
			$('ul#mainNavigation li.expanded ul li:nth-child(2) a').bind('click',function(){
				$('ul.tabs li:nth-child(2) a').trigger('click');
				return false;
			});
			$('ul#mainNavigation li.expanded ul li:nth-child(3) a').bind('click',function(){
				$('ul.tabs li:nth-child(3) a').trigger('click');
				return false;
			});
			$('ul#mainNavigation li.expanded ul li:nth-child(4) a').bind('click',function(){
				$('ul.tabs li:nth-child(4) a').trigger('click');
				return false;
			});
			$('ul#mainNavigation li.expanded ul li:nth-child(5) a').bind('click',function(){
				$('ul.tabs li:nth-child(5) a').trigger('click');
				return false;
			});
		}

		$('.footerNav li:not(.sysAdmins)').each(function(i){
			tempValue2 = $(this).width();
			$(this).css('width',tempValue2);
			//$(this).find('a').css('width',tempValue2);
			//$(this).find('ul').css('width',tempValue2);
			//$(this).find('li').css('width',tempValue2);
		});
		$('.footerNav li.services li a, .footerNav li.services li, .footerNav li.services ul').css('width','119px');
		$('#breadcrumb li:not(:last-child) a').after(' &gt; ');

		/* Home page effects */

		var homeSlideshow = function(){
			$('.navigation').append('<div id="homeFeaturePager">')
				.parent()
				.find('.slideshow').cycle({
				fx:       'fade',
				timeout:  9000,
				delay:    -1000,
				next:    '#homeFeatured .navigation .next',
				prev:    '#homeFeatured .navigation .prev',
				pager:   '#homeFeaturePager',
				pauseOnPagerHover : 'true',
				easing:   'easeInOutBack'
			});
		};
		if($('#homeFeatured .slideshow').length > 0){
			homeSlideshow();
		}
		var pauseHomeSlideshow = function(){
			$('#homeFeatured .slideshow').cycle('pause');
			$('#homeFeatured .navigation a.toggle').addClass('paused');
			$('#homeFeatured .navigation a.toggle').unbind('click');
			$('#homeFeatured .navigation a.toggle').bind('click',resumeHomeSlideshow);
		};
		var resumeHomeSlideshow = function(){
			$('#homeFeatured .slideshow').cycle('resume');
			$('#homeFeatured .navigation a.toggle').removeClass('paused');
			$('#homeFeatured .navigation a.toggle').unbind('click');
			$('#homeFeatured .navigation a.toggle').bind('click',pauseHomeSlideshow);
		};

		$('#homeFeatured .navigation a.toggle').bind('click',pauseHomeSlideshow);
		if($('#home-page').length > 0){
			$('#homeFeatured .navigation .next, #homeFeatured .navigation .toggle, #homeFeatured .navigation .prev').live('click', function(){
				return false;
			});
		}

		if($('#homePartners .slideshow').length > 0){
			$('#homePartners .slideshow').cycle({
				fx:       'scrollLeft',
				timeout:  6000,
				speed:  'slow',
				delay:    -2000,
				easing:   'easeInOutBack'
			});
		}
		if($('#homeCustomers .slideshow').length > 0){
			$('#homeCustomers .slideshow').cycle({
				fx:       'scrollLeft',
				timeout:  7000,
				speed:  'slow',
				delay:    -1000,
				easing:   'easeInOutBack'
			});
		}
		var showBusinessBlog = function(){
			$('#homeNewsWrapper #technicalBlog').fadeOut('normal',function(){
				$('#homeNewsWrapper #businessBlog').fadeIn('normal');
			}).removeClass('current');
			$('#homeNewsWrapper h3 span.businessBlogHeading').addClass('current').html('Business Blog');
			$('#homeNewsWrapper h3 span.technicalBlogHeading').html('<a href="/news/category/technical-blog" title="Technical Blog">Technical Blog</a>');
			$('#homeNewsWrapper h3 span.technicalBlogHeading a').bind('click',showTechnicalBlog);
			return false;
		};
		var showTechnicalBlog = function(){
			$('#homeNewsWrapper #businessBlog').fadeOut('normal',function(){
				$('#homeNewsWrapper #technicalBlog').fadeIn('normal');
			}).removeClass('current');
			$('#homeNewsWrapper h3 span.technicalBlogHeading').addClass('current').html('Technical Blog');
			$('#homeNewsWrapper h3 span.businessBlogHeading').html('<a href="/news/category/business-blog" title="Business Blog">Business Blog</a>');
			$('#homeNewsWrapper h3 span.businessBlogHeading a').bind('click',showBusinessBlog);
			return false;
		};
		$('#homeNewsWrapper h3 span.businessBlogHeading a').bind('click',showBusinessBlog);
		$('#homeNewsWrapper h3 span.technicalBlogHeading a').bind('click',showTechnicalBlog);
		$('#homeNewsWrapper h3 span.businessBlogHeading a, #homeNewsWrapper h3 span.technicalBlogHeading a').click(function(){
			alert('test');return false;
		});
		
		$("#quickStart").tabs("#quickStart div.homePanel", {tabs: 'h3', effect: 'slide'}); //accordions for homepage

});