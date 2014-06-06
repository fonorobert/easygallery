/*! Swipebox v1.2.9 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
!function(a,b,c,d){c.swipebox=function(e,f){var g,h,i={useCSS:!0,useSVG:!0,initialIndexOnArray:0,closeBySwipe:!0,hideBarsOnMobile:!0,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"CCCCCC",beforeOpen:null,afterOpen:null,afterClose:null},j=this,k=[],l=e.selector,m=c(l),n=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),o=null!==n||b.createTouch!==d||"ontouchstart"in a||"onmsgesturechange"in a||navigator.msMaxTouchPoints,p=!!b.createElementNS&&!!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,q=a.innerWidth?a.innerWidth:c(a).width(),r=a.innerHeight?a.innerHeight:c(a).height(),s='<div id="swipebox-overlay">                   <div id="swipebox-slider"></div>                    <div id="swipebox-caption"></div>                   <div id="swipebox-action">                      <a id="swipebox-close"></a>                     <a id="swipebox-prev"></a>                      <a id="swipebox-next"></a>                  </div>          </div>';j.settings={},j.init=function(){j.settings=c.extend({},i,f),c.isArray(e)?(k=e,g.target=c(a),g.init(j.settings.initialIndexOnArray)):c(b).on("click",l,function(a){if("slide current"===a.target.parentNode.className)return!1;c.isArray(e)||(g.destroy(),h=c(l),g.actions()),k=[];var b,d,f;f||(d="data-rel",f=c(this).attr(d)),f||(d="rel",f=c(this).attr(d)),h=f&&""!==f&&"nofollow"!==f?m.filter("["+d+'="'+f+'"]'):c(l),h.each(function(){var a=null,b=null;c(this).attr("title")&&(a=c(this).attr("title")),c(this).attr("href")&&(b=c(this).attr("href")),k.push({href:b,title:a})}),b=h.index(c(this)),a.preventDefault(),a.stopPropagation(),g.target=c(a.target),g.init(b)})},g={init:function(a){j.settings.beforeOpen&&j.settings.beforeOpen(),this.target.trigger("swipebox-start"),c.swipebox.isOpen=!0,this.build(),this.openSlide(a),this.openMedia(a),this.preloadMedia(a+1),this.preloadMedia(a-1),j.settings.afterOpen&&j.settings.afterOpen()},build:function(){var a,b=this;c("body").append(s),b.doCssTrans()&&(c("#swipebox-slider").css({"-webkit-transition":"left 0.4s ease","-moz-transition":"left 0.4s ease","-o-transition":"left 0.4s ease","-khtml-transition":"left 0.4s ease",transition:"left 0.4s ease"}),c("#swipebox-overlay").css({"-webkit-transition":"opacity 1s ease","-moz-transition":"opacity 1s ease","-o-transition":"opacity 1s ease","-khtml-transition":"opacity 1s ease",transition:"opacity 1s ease"}),c("#swipebox-action, #swipebox-caption").css({"-webkit-transition":"0.5s","-moz-transition":"0.5s","-o-transition":"0.5s","-khtml-transition":"0.5s",transition:"0.5s"})),p&&j.settings.useSVG===!0&&(a=c("#swipebox-action #swipebox-close").css("background-image"),a=a.replace("png","svg"),c("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({"background-image":a})),n&&j.settings.hideBarsOnMobile===!0&&c("#swipebox-action, #swipebox-caption").hide(),c.each(k,function(){c("#swipebox-slider").append('<div class="slide"></div>')}),b.setDim(),b.actions(),o&&b.gesture(),b.keyboard(),b.animBars(),b.resize()},setDim:function(){var b,d,e={};"onorientationchange"in a?a.addEventListener("orientationchange",function(){0===a.orientation?(b=q,d=r):(90===a.orientation||-90===a.orientation)&&(b=r,d=q)},!1):(b=a.innerWidth?a.innerWidth:c(a).width(),d=a.innerHeight?a.innerHeight:c(a).height()),e={width:b,height:d},c("#swipebox-overlay").css(e)},resize:function(){var b=this;c(a).resize(function(){b.setDim()}).resize()},supportTransition:function(){var a,c="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(a=0;a<c.length;a++)if(b.createElement("div").style[c[a]]!==d)return c[a];return!1},doCssTrans:function(){return j.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){var a=this,b=null,d=null,e=!1,f=10,g=50,h={},i={},k=c("#swipebox-caption, #swipebox-action"),l=c("#swipebox-slider");k.addClass("visible-bars"),a.setTimeout(),c("body").bind("touchstart",function(a){return c(this).addClass("touching"),i=a.originalEvent.targetTouches[0],h.pageX=a.originalEvent.targetTouches[0].pageX,h.pageY=a.originalEvent.targetTouches[0].pageY,c(".touching").bind("touchmove",function(a){if(a.preventDefault(),a.stopPropagation(),i=a.originalEvent.targetTouches[0],j.settings.closeBySwipe&&(d=i.pageY-h.pageY,Math.abs(d)>=g||e)){var b=.75-Math.abs(d)/l.height();l.css({top:d+"px"}),l.css({opacity:b}),e=!0}}),!1}).bind("touchend",function(g){if(g.preventDefault(),g.stopPropagation(),j.settings.closeBySwipe){if(l.css("opacity")<=.5){var m=d>0?l.height():-l.height();l.animate({top:m+"px",opacity:0},300,function(){a.closeSlide()})}else l.animate({top:0,opacity:1},300);if(e)return void(e=!1)}b=i.pageX-h.pageX,b>=f?a.getPrev():-f>=b?a.getNext():k.hasClass("visible-bars")?(a.clearTimeout(),a.hideBars()):(a.showBars(),a.setTimeout()),c(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(j.settings.hideBarsDelay>0){var b=this;b.clearTimeout(),b.timeout=a.setTimeout(function(){b.hideBars()},j.settings.hideBarsDelay)}},clearTimeout:function(){a.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var a=c("#swipebox-caption, #swipebox-action");this.doCssTrans()?a.addClass("visible-bars"):(c("#swipebox-caption").animate({top:0},500),c("#swipebox-action").animate({bottom:0},500),setTimeout(function(){a.addClass("visible-bars")},1e3))},hideBars:function(){var a=c("#swipebox-caption, #swipebox-action");this.doCssTrans()?a.removeClass("visible-bars"):(c("#swipebox-caption").animate({top:"-50px"},500),c("#swipebox-action").animate({bottom:"-50px"},500),setTimeout(function(){a.removeClass("visible-bars")},1e3))},animBars:function(){var a=this,b=c("#swipebox-caption, #swipebox-action");b.addClass("visible-bars"),a.setTimeout(),c("#swipebox-slider").click(function(){b.hasClass("visible-bars")||(a.showBars(),a.setTimeout())}),c("#swipebox-action").hover(function(){a.showBars(),b.addClass("visible-bars"),a.clearTimeout()},function(){b.removeClass("visible-bars"),a.setTimeout()})},keyboard:function(){var b=this;c(a).bind("keyup",function(a){a.preventDefault(),a.stopPropagation(),37===a.keyCode?b.getPrev():39===a.keyCode?b.getNext():27===a.keyCode&&b.closeSlide()})},actions:function(){var a=this,b="touchend click";k.length<2?c("#swipebox-prev, #swipebox-next").hide():(c("#swipebox-prev").bind(b,function(b){b.preventDefault(),b.stopPropagation(),a.getPrev(),a.setTimeout()}),c("#swipebox-next").bind(b,function(b){b.preventDefault(),b.stopPropagation(),a.getNext(),a.setTimeout()})),c("#swipebox-close").bind(b,function(){a.closeSlide()})},setSlide:function(a,b){b=b||!1;var d=c("#swipebox-slider");this.doCssTrans()?d.css({left:100*-a+"%"}):d.animate({left:100*-a+"%"}),c("#swipebox-slider .slide").removeClass("current"),c("#swipebox-slider .slide").eq(a).addClass("current"),this.setTitle(a),b&&d.fadeIn(),c("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===a?c("#swipebox-prev").addClass("disabled"):a===k.length-1&&c("#swipebox-next").addClass("disabled")},openSlide:function(b){c("html").addClass("swipebox-html"),o&&c("html").addClass("swipebox-touch"),c(a).trigger("resize"),this.setSlide(b,!0)},preloadMedia:function(a){var b=this,c=null;k[a]!==d&&(c=k[a].href),b.isVideo(c)?b.openMedia(a):setTimeout(function(){b.openMedia(a)},1e3)},openMedia:function(a){var b=this,e=null;return k[a]!==d&&(e=k[a].href),0>a||a>=k.length?!1:void(b.isVideo(e)?c("#swipebox-slider .slide").eq(a).html(b.getVideo(e)):b.loadMedia(e,function(){c("#swipebox-slider .slide").eq(a).html(this)}))},setTitle:function(a){var b=null;c("#swipebox-caption").empty(),k[a]!==d&&(b=k[a].title),b&&c("#swipebox-caption").append(b)},isVideo:function(a){return a&&(a.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/)||a.match(/vimeo\.com\/([0-9]*)/)||a.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))?!0:void 0},getVideo:function(a){var b="",c=a.match(/watch\?v=([a-zA-Z0-9\-_]+)/),d=a.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),e=a.match(/vimeo\.com\/([0-9]*)/);return c||d?(d&&(c=d),b='<iframe width="560" height="315" src="//www.youtube.com/embed/'+c[1]+'" frameborder="0" allowfullscreen></iframe>'):e&&(b='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+e[1]+"?byline=0&amp;portrait=0&amp;color="+j.settings.vimeoColor+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),'<div class="swipebox-video-container" style="max-width:'+j.settings.videomaxWidth+'px"><div class="swipebox-video">'+b+"</div></div>"},loadMedia:function(a,b){if(!this.isVideo(a)){var d=c("<img>").on("load",function(){b.call(d)});d.attr("src",a)}},getNext:function(){var a=this,b=c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));b+1<k.length?(b++,a.setSlide(b),a.preloadMedia(b+1)):(c("#swipebox-slider").addClass("rightSpring"),setTimeout(function(){c("#swipebox-slider").removeClass("rightSpring")},500))},getPrev:function(){var a=c("#swipebox-slider .slide").index(c("#swipebox-slider .slide.current"));a>0?(a--,this.setSlide(a),this.preloadMedia(a-1)):(c("#swipebox-slider").addClass("leftSpring"),setTimeout(function(){c("#swipebox-slider").removeClass("leftSpring")},500))},closeSlide:function(){c("html").removeClass("swipebox-html"),c("html").removeClass("swipebox-touch"),c(a).trigger("resize"),this.destroy()},destroy:function(){c(a).unbind("keyup"),c("body").unbind("touchstart"),c("body").unbind("touchmove"),c("body").unbind("touchend"),c("#swipebox-slider").unbind(),c("#swipebox-overlay").remove(),c.isArray(e)||e.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),c.swipebox.isOpen=!1,j.settings.afterClose&&j.settings.afterClose()}},j.init()},c.fn.swipebox=function(a){if(!c.data(this,"_swipebox")){var b=new c.swipebox(this,a);this.data("_swipebox",b)}return this.data("_swipebox")}}(window,document,jQuery);


//EASYGALLERY

// Initiate swipebox
$( '.easygallery' ).swipebox({
    hideBarsOnMobile: false
});

//Set thumbnail images

var thumbCount = $('.thumb').length;

$(document).ready(function(){
    for (;thumbCount>0;thumbCount--) {
        console.log(thumbCount);
        var bgSrc = $('#thumbid' + thumbCount).data('src');
        console.log(bgSrc); 
        $('#thumbid' + thumbCount).css('background-image', 'url(' + bgSrc + ')');
    }
})

//Set thumbnail to equal width and height
function thumbSize (){
    var width = $('.thumb').width();
    $('.thumb').css('height', width * 0.625 + 'px');
}
$(document).ready(function(){
    thumbSize();
})
$(window).resize(function(){
    thumbSize();
});