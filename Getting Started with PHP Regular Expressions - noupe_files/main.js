function hideFormText() {
	var _inputs = document.getElementsByTagName('input');
	var _txt = document.getElementsByTagName('textarea');
	var _value = [];
	
	if (_inputs) {
		for(var i=0; i<_inputs.length; i++) {
			if (_inputs[i].type == 'text' || _inputs[i].type == 'password') {
				
				_inputs[i].index = i;
				_value[i] = _inputs[i].value;
				
				_inputs[i].onfocus = function(){
					if (this.value == _value[this.index])
						this.value = '';
				}
				_inputs[i].onblur = function(){
					if (this.value == '')
						this.value = _value[this.index];
				}
			}
		}
	}
	if (_txt) {
		for(var i=0; i<_txt.length; i++) {
			_txt[i].index = i;
			_value['txt'+i] = _txt[i].value;
			
			_txt[i].onfocus = function(){
				if (this.value == _value['txt'+this.index])
					this.value = '';
			}
			_txt[i].onblur = function(){
				if (this.value == '')
					this.value = _value['txt'+this.index];
			}
		}
	}
}
if (window.addEventListener)
	window.addEventListener("load", hideFormText, false);
else if (window.attachEvent)
	window.attachEvent("onload", hideFormText);
	
function minHeight(){
	var _holder = document.getElementById('wrapper');
	var _holderMain = document.getElementById('main-holder');
	_holderMain.removeAttribute('style');
	var _holderFrame = document.getElementById('main-frame');
	var _imgBottom = document.getElementById('bg-bottom');
	var _imgTop = document.getElementById('bg-top');
	var _imgTH = _imgTop.offsetHeight;
	var _imgBH = _imgBottom.offsetHeight;
	var _holderH = _holder.offsetHeight;
	var _holderFH = _holderFrame.offsetHeight;
	var _minH = 2693;
	
	if(_imgTH + _imgBH > _holderH) _holderMain.style.height = _imgTH + _imgBH + "px";
	else if(_holderFH < _minH) _holderMain.style.height = _minH + "px";
	else _holderMain.style.height = _holderFH + "px";
}
if (window.addEventListener)
	window.addEventListener("load", minHeight, false);
else if (window.attachEvent)
	window.attachEvent("onload", minHeight);
if (window.addEventListener)
	window.addEventListener("resize", minHeight, false);
else if (window.attachEvent)
	window.attachEvent("onresize", minHeight);
// mobile

// mobile browsers detect
browserPlatform = {
	platforms: [
		{
			// Blackberry <5
			uaString:['BlackBerry','midp'],
			cssFile:'blackberry.css'
		},
		{
			// Symbian phones
			uaString:['symbian','midp'],
			cssFile:'symbian.css'
		},
		{
			// Opera Mobile
			uaString:['opera','mobi'],
			cssFile:'opera.css'
		},
		{
			// IE Mobile <6
			uaString:['msie','ppc'],
			cssFile:'ieppc.css'
		},
		{
			// IE Mobile 6+
			uaString:'iemobile',
			cssFile:'iemobile.css'
		},
		{
			// Palm WebOS
			uaString:'webos',
			cssFile:'webos.css'
		},
		{
			// Android
			uaString:'Android',
			cssFile:'android.css'
		},
		{
			// Blackberry 6+
			uaString:['BlackBerry','6.0','mobi'],
			cssFile:'blackberry6.0.css'
		},
		{
			// iPad
			uaString:'ipad',
			cssFile:'ipad.css',
			miscHead:''
		},
		{
			// iPhone and other webkit browsers
			uaString:['safari','mobi'],
			cssFile:'safari.css',
			miscHead:''
		}
	],
	options: {
		cssPath:'css/',
		mobileCSS:'allmobile.css'
	},
	init:function(){
		this.checkMobile();
		this.parsePlatforms();
		return this;
	},
	checkMobile: function() {
		if(this.uaMatch('mobi') || this.uaMatch('midp') || this.uaMatch('ppc') || this.uaMatch('webos')) {
			this.attachStyles({cssFile:this.options.mobileCSS});
		}
	},
	parsePlatforms: function() {
		for(var i = 0; i < this.platforms.length; i++) {
			if(typeof this.platforms[i].uaString === 'string') {
				if(this.uaMatch(this.platforms[i].uaString)) {
					this.attachStyles(this.platforms[i]);
					break;
				}
			} else {
				for(var j = 0, allMatch = true; j < this.platforms[i].uaString.length; j++) {
					if(!this.uaMatch(this.platforms[i].uaString[j])) {
						allMatch = false;
					}
				}
				if(allMatch) {
					this.attachStyles(this.platforms[i]);
					break;
				}
			}
		}
	},
	attachStyles: function(platform) {
		if(platform.cssFile) {
			document.write('<link rel="stylesheet" href="' + this.options.cssPath + platform.cssFile + '" type="text/css"/>');
		}
		if(platform.miscHead) {
			document.write(platform.miscHead);
		}
	},
	uaMatch:function(str) {
		if(!this.ua) {
			this.ua = navigator.userAgent.toLowerCase();
		}
		return this.ua.indexOf(str.toLowerCase()) != -1;
	}
}.init();
jQuery(function() {
    // Sidebar-Tabs
   if(jQuery(".sidebartabs").size())
   {
	   jQuery(".sidebartabs").tabs({
	       fx: {
	           duration: 301,
	           opacity: 'toggle',
	           height: 'toggle'
	       }
   	});
   }
   jQuery('.sidebartabs.smashui').css('display','block');
	jQuery.each(jQuery(".reporttable"), function(index, value) {
		var table_id = this.id;
		
		jQuery("#"+table_id+" tr:odd").addClass("odd");
		jQuery("#"+table_id+" tr:not(.odd)").hide();
		jQuery("#"+table_id+" tr:first-child").show();
		jQuery("#"+table_id+" tr.odd").click(function(){
			jQuery(this).next("tr").toggle();
			jQuery(this).find(".arrow").toggleClass("up");
		});
	});
	// Galerie
	jQuery('.gallery.masonry').imagesLoaded(function(){
	  jQuery(this).masonry({
		itemSelector : '.gallery-item',
		columnWidth : 194
	  });
	});

});
