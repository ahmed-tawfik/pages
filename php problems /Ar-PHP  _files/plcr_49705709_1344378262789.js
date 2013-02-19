 
              if(typeof(dartRichmediaCreatives) == "undefined") {
                dartRichmediaCreatives = new Array();
              }
              function PlacementCreative_1344378260275(creative) {
                for(var property in creative) {
                  this[property] = creative[property];
                }
                this.getAsset = function(type) {
                    return this.assets[type];
                }
                this.macrosInExits = new Object();
                  this.macrosInExits["%j"] = "j";
                  this.macrosInExits["%eenv!"] = "eenv";
                  this.macrosInExits["%g"] = "g";
                  this.macrosInExits["%s"] = "s";
                  this.macrosInExits["%eaid!"] = "eaid";
                  this.macrosInExits["%n"] = "n";
                  this.macrosInExits["%m"] = "m";
                  this.macrosInExits["%erid!"] = "erid";
                  this.macrosInExits["%ebuy!"] = "ebuy";
                  this.macrosInExits["%ecid!"] = "ecid";
                  this.macrosInExits["%erv!"] = "erv";
                  this.macrosInExits["%epid!"] = "epid";
                  this.macrosInExits["%eadv!"] = "eadv";
                  this.macrosInExits["%esid!"] = "esid";
                  this.macrosInExits["%ekid!"] = "ekid";
                this.replaceMacros = function(url, creative) {
                  for(var macro in this.macrosInExits) {
                    if(url.indexOf(macro) != -1) {
                      var value = creative["macro_" + this.macrosInExits[macro]];
                      url = url.replace(new RegExp(macro, "g"), value);
                    }
                  }
                  return url;
                }
                this.fullScreenEnabled = false;
                this.requiredPlayerVersion = creative.requiredFlashPlayerVersion;
                this.asVersion = 1;
                this.assets = new Object();
                this.exitEvents = new Object();
                this.timerEvents = new Object();
                this.counterEvents = new Object();
                this.standardEvents = new Object();
                this.standardEvents["EVENT_VIDEO_PAUSE"] = {
                  reportingId: "15"
                };
                this.standardEvents["HTML5_CREATIVE_IMPRESSION"] = {
                  reportingId: "25"
                };
                this.standardEvents["EVENT_FULLSCREEN"] = {
                  reportingId: "22"
                };
                this.standardEvents["FULL_SCREEN_VIDEO_PLAYS"] = {
                  reportingId: "5"
                };
                this.standardEvents["EVENT_VIDEO_MUTE"] = {
                  reportingId: "16"
                };
                this.standardEvents["EVENT_USER_INTERACTION"] = {
                  reportingId: "4"
                };
                this.standardEvents["EVENT_VIDEO_INTERACTION"] = {
                  reportingId: "14"
                };
                this.standardEvents["FULL_SCREEN_VIDEO"] = {
                  reportingId: "19"
                };
                this.standardEvents["EVENT_VIDEO_COMPLETE"] = {
                  reportingId: "13"
                };
                this.standardEvents["DYNAMIC_CREATIVE_IMPRESSION"] = {
                  reportingId: "23"
                };
                this.standardEvents["EVENT_VIDEO_MIDPOINT"] = {
                  reportingId: "18"
                };
                this.standardEvents["EVENT_VIDEO_STOP"] = {
                  reportingId: "20"
                };
                this.standardEvents["EXPAND_TIMER"] = {
                  reportingId: "10"
                };
                this.standardEvents["INTERACTION_TIMER"] = {
                  reportingId: "3"
                };
                this.standardEvents["EVENT_VIDEO_REPLAY"] = {
                  reportingId: "17"
                };
                this.standardEvents["BACKUP_IMAGE_IMPRESSION"] = {
                  reportingId: "9"
                };
                this.standardEvents["EVENT_VIDEO_UNMUTE"] = {
                  reportingId: "21"
                };
                this.standardEvents["EVENT_MANUAL_CLOSE"] = {
                  reportingId: "8"
                };
                this.standardEvents["EVENT_VIDEO_VIEW_TIMER"] = {
                  reportingId: "12"
                };
                this.standardEvents["FULL_SCREEN_VIDEO_COMPLETES"] = {
                  reportingId: "6"
                };
                this.standardEvents["FULL_SCREEN_AVERAGE_VIEW_TIME"] = {
                  reportingId: "7"
                };
                this.standardEvents["EVENT_VIDEO_PLAY"] = {
                  reportingId: "11"
                };
                this.standardEvents["DISPLAY_TIMER"] = {
                  reportingId: "2"
                };
                this.exitEvents["MainExit"] = {
                    reportingId: 555454,
                    url: this.replaceMacros("http://goparallel.sourceforge.net/", creative),
                    customizedWindow: false,
                    windowFeatures: "",
                    targetWindow: "_blank"
                };
                var exitKeyvalues = "";
                var delimiter = "{DELIM}";
                for(var exitName in this.exitEvents) {
                  if (!core.isPartOfArrayPrototype(exitName)) {
                    var exit = this.exitEvents[exitName];
                    var value = "name:" + escape(exitName) + "," + "url:" + escape(exit.url) + ","
                                + "target:" + (exit.customizedWindow ? "popup" : escape(exit.targetWindow));
                    
                    
                    exitKeyvalues += ((this.asVersion > 1) ? value : escape(value)) + delimiter;
                  }
                }
                exitKeyvalues = exitKeyvalues.substring(0, exitKeyvalues.length - delimiter.length);
                this.videoComponents = new Object();
                this.isAbsoluteUrl = function(url) {
                  return (url.indexOf("http:") == 0 || url.indexOf("rtmp:") == 0);
                }
                this.childAssets = new Object();
                this.assetsKeyValues = "";
                for(var assetName in this.childAssets) {
                  if (!core.isPartOfArrayPrototype(assetName)) {
                    var asset = this.childAssets[assetName];
                    if(!asset.isHostedByCdn) {
                      var fileUrl = creative.mediaServer + "/1261132/" + asset.cdnName;
                      this.assetsKeyValues += escape(assetName) + "=" + escape(fileUrl) + "&";
                    } else if(asset.isVideo) {
                      this.assetsKeyValues += escape("STR_" + assetName) + "=" + escape(asset.streamingUrl) + "&";
                      this.assetsKeyValues += escape("PRO_" + assetName) + "=" + escape(asset.progressiveUrl) + "&";
                    } else {
                      this.assetsKeyValues += escape(assetName) + "=" + ((self.location.protocol.toLowerCase() != 'https:') ?
                          escape(asset.progressiveUrl) : escape(asset.securedProgressiveUrl)) + "&";
                    }
                  }
                }
                var videoKeyValues = "";
                this.processVideoUrl = function(videoUrl, downloadPrefix, urlType, videoComponentName) {
                  var urlKey;
                  if(this.isAbsoluteUrl(videoUrl)) {
                    urlKey = escape(urlType + "_" + videoComponentName);
                    this.assetsKeyValues += urlKey + "=" + escape(videoUrl) + "&";
                  } else {
                    urlKey = videoUrl.length > 0 ? escape(downloadPrefix + videoUrl) : "";
                  }
                  return urlKey;
                }
                var componentDelimiter = "{DELIM}";
                for(var name in this.videoComponents) {
                  if (!core.isPartOfArrayPrototype(name)) {
                    var vc = this.videoComponents[name];
                    var value = "name:" + escape(name) + componentDelimiter;
                    if (!vc.html5Video) {
                      var prefix = (vc.isStreaming) ? "STR_" : "PRO_";
                      var value = "name:" + escape(name) + ",startMuted:" + escape(vc.startMuted)
                          + ",autoBuffer:" + escape(vc.autoBuffer) + ",loopCount:" + escape(vc.loopCount)
                          + ",isStreaming:" + escape(vc.isStreaming);
                      var lowVideo = this.processVideoUrl(vc.lowBWVideo, prefix, "low_video", name);
                      var midVideo = this.processVideoUrl(vc.midBWVideo, prefix, "mid_video", name);
                      var highVideo = this.processVideoUrl(vc.highBWVideo, prefix, "high_video", name);
                      var fallbackLowVideo = this.processVideoUrl(vc.lowBWFallbackVideo, "PRO_", "low_fallback", name);
                      var fallbackMidVideo = this.processVideoUrl(vc.midBWFallbackVideo, "PRO_", "mid_fallback", name);
                      var fallbackHighVideo = this.processVideoUrl(vc.highBWFallbackVideo, "PRO_", "high_fallback", name);
                      value += ",vfp_low:" + lowVideo + ",vfp_mid:" + midVideo + ",vfp_high:" + highVideo
                          + ",pfp_low:" + fallbackLowVideo + ",pfp_mid:" + fallbackMidVideo
                          + ",pfp_high:" + fallbackHighVideo + componentDelimiter;
                    }
                    videoKeyValues += value;
                  }
                }
                videoKeyValues = videoKeyValues.substring(0, videoKeyValues.length - componentDelimiter.length);
                this.assetsKeyValues = this.assetsKeyValues.substring(0, this.assetsKeyValues.length - 1);
                var isGCNAd = (creative.asContext != "") ? "true" : "false";
                var adSiteUrl = core.getSitePageUrl(creative);
                this.queryStringBase = this.swfParams + '&click='+ escape(creative.clickThroughUrl)
                                      + '&clickN=' + creative.clickN + '&rid=' + creative.renderingId
                                      + "&assets=" + escape(this.assetsKeyValues)
                                      + "&vcData=" + escape(videoKeyValues)
                                      + "&exitEvents=" + escape(exitKeyvalues)
                                      + "&googleDiscoveryUrl=" + escape(creative.googleContextDiscoveryUrl)
                                      + "&adSiteUrl=" + escape(adSiteUrl)
                                      + "&isGCNAd=" + isGCNAd;
             }
          
          function Floating_1344378260275(creative, type, coreCode) {
            this.isPeelDown = function() {
              return parseInt(this.collapsedWidth) < parseInt(this.width)
                  || parseInt(this.collapsedHeight) < parseInt(this.height);
            }
            this.variableName = "504015_1_" + (new Date()).getTime();
            this.zIndex = "1000000";
            this.left = (creative.pubLeft != "") ? creative.pubLeft : coreCode.convertUnit("50" + "%");
            this.ignoreHorizontalScroll = "false" == "true";
            this.top = (creative.pubTop != "") ? creative.pubTop : coreCode.convertUnit("100" + "%");
            this.ignoreVerticalScroll = "true" == "true";
            this.width = "960";
            this.height = "120";
            this.collapsedWidth = "960";
            this.collapsedHeight = "120";
            this.offsetTop = "0";
            this.offsetLeft = "0";
            this.offsetRight = "960";
            this.offsetBottom = "120";
            this.isRelativeBody = creative.isRelativeBody;
            this.salign = coreCode.getSalign(this.width, this.height, this.offsetTop, this.offsetLeft, this.offsetRight, this.offsetBottom);
            this.url = creative.mediaServer + "/1261132/PID_2183089_3352_GoParallel_Promo_Unit_Updates.swf";
            this.queryString = creative.queryStringBase + "&JS=0" + "&varName=" + this.variableName
                              + creative.asContext + "&assetType=" + type;
            this.wmode = (creative.pubWMode != "") ? creative.pubWMode : "Transparent";
            this.interstitialImage = creative.impressionUrl + creative.mediaServer + "/dot.gif";
            this.duration = (creative.pubDuration != "") ? creative.pubDuration : "none";
            this.startTime = "0";
            this.hideDropdowns = "false" == "true";
            this.hideIframes = "false" == "true";
            this.hideScrollbars = "false" == "true";
            this.hideObjects = (creative.pubHideObjects != "") ? (creative.pubHideObjects.toLowerCase() == "true") : "false" == "true";
            this.hideApplets = (creative.pubHideApplets != "") ? (creative.pubHideApplets.toLowerCase() == "true") : "false" == "true";
            this.assetType = type;
            this.isMainAsset = true;
          }
          function FloatingHTML_1344378260275(creative, type, coreCode) {
            this.isPeelDown = function() {
              return parseInt(this.collapsedWidth) < parseInt(this.width)
                  || parseInt(this.collapsedHeight) < parseInt(this.height);
            }
            this.variableName = "504015__" + (new Date()).getTime();
            this.zIndex = "";
            this.left = (creative.pubLeft != "") ? creative.pubLeft : coreCode.convertUnit("" + "");
            this.ignoreHorizontalScroll = "" == "true";
            this.top = (creative.pubTop != "") ? creative.pubTop : coreCode.convertUnit("" + "");
            this.ignoreVerticalScroll = "" == "true";
            this.width = "";
            this.height = "";
            this.collapsedWidth = "";
            this.collapsedHeight = "";
            this.offsetTop = "";
            this.offsetLeft = "";
            this.offsetRight = "";
            this.offsetBottom = "";
            this.salign = coreCode.getSalign(this.width, this.height, this.offsetTop, this.offsetLeft, this.offsetRight, this.offsetBottom);
            this.url = creative.mediaServer + "/1261132/";
            this.queryString = creative.queryStringBase + "&JS=0" + "&varName=" + this.variableName
                              + creative.asContext + "&assetType=" + type;
            this.interstitialImage = creative.impressionUrl + creative.mediaServer + "/dot.gif";
            this.duration = (creative.pubDuration != "") ? creative.pubDuration : "";
            this.startTime = "";
            this.hideDropdowns = "" == "true";
            this.hideIframes = "" == "true";
            this.hideScrollbars = "" == "true";
            this.hideObjects = (creative.pubHideObjects != "") ? (creative.pubHideObjects.toLowerCase() == "true") : "" == "true";
            this.hideApplets = (creative.pubHideApplets != "") ? (creative.pubHideApplets.toLowerCase() == "true") : "" == "true";
            this.assetType = type;
            this.isMainAsset = true;
            
          }
          if(typeof(richMediaIframeBreakoutCreatives) != "undefined") {
            var core = new RichMediaCore_69_11();
            var index = 0;
            var baseCreative;
            for (var i =0; i < self.richMediaIframeBreakoutCreatives.length; i++) {
              baseCreative = self.richMediaIframeBreakoutCreatives[i];
              if ("1344378260275" == baseCreative.uniqueId &&
                  (typeof(baseCreative.isProcessed) == "undefined" || !baseCreative.isProcessed)) {
                index = i;
                baseCreative.isProcessed = true;
                break;
              }
            }
            var creative = new PlacementCreative_1344378260275(baseCreative);
            baseCreative.creative = creative;
            creative.sourceIframe = baseCreative.sourceIframe;
            var isFlashAssetExist = true;
            if(creative.shouldDisplayFlashAsset) {
              creative.assets[core.ASSET_TYPE_FLOATING] = new Floating_1344378260275(creative, core.ASSET_TYPE_FLOATING, core);
              isFlashAssetExist = creative.assets[core.ASSET_TYPE_FLOATING].url.toLowerCase().indexOf(".swf") != -1;
            }
            
            
            
            if(creative.forceHTML5Creative || creative.isHTML5PreviewMode || !creative.shouldDisplayFlashAsset || !isFlashAssetExist) {
              creative.shouldDisplayHTML5Asset = true;
              creative.assets[core.ASSET_TYPE_FLOATING] = new FloatingHTML_1344378260275(creative, core.ASSET_TYPE_FLOATING, core);
            }
            var iframeRenderer = new IFrameCreativeRenderer_69_11();
            iframeRenderer.showCreative(index);
          } else {
            var core = new RichMediaCore_69_11();
            var baseCreative = new RichMediaCreative_1344378260275(core.CREATIVE_TYPE_FLOATING);
            var creative = new PlacementCreative_1344378260275(baseCreative);
            var isFlashAssetExist = true;
            if(creative.shouldDisplayFlashAsset) {
              creative.assets[core.ASSET_TYPE_FLOATING] = new Floating_1344378260275(creative, core.ASSET_TYPE_FLOATING, core);
              isFlashAssetExist = creative.assets[core.ASSET_TYPE_FLOATING].url.toLowerCase().indexOf(".swf") != -1;
            }
            if(creative.forceHTML5Creative || creative.isHTML5PreviewMode || !creative.shouldDisplayFlashAsset || !isFlashAssetExist) {
              creative.shouldDisplayHTML5Asset = true;
              creative.assets[core.ASSET_TYPE_FLOATING] = new FloatingHTML_1344378260275(creative, core.ASSET_TYPE_FLOATING, core);
            }
            dartRichmediaCreatives[dartRichmediaCreatives.length] = creative;
            RichMediaCore_69_11.prototype.trackCsiEvent("gb");  
            document.write('<scr' + 'ipt src="' + baseCreative.globalTemplateJs + '" language="JavaScript"></scr' + 'ipt>');
          }
          RichMediaCore_69_11.prototype.trackCsiEvent("pe") 
