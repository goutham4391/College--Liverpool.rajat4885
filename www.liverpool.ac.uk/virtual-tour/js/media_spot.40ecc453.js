(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["media~spot","chunk-516cc51b"],{"39b7":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{ref:"RvCarousel",staticClass:"no-touch",class:["rv-carousel--"+t.sizing],attrs:{id:"rvCarousel","aria-label":t.arialabel,"aria-roledescription":"carousel"},on:{mouseover:function(e){return t.handleRotation(!1)},mouseleave:function(e){return t.handleRotation(!!t.rotating)}}},[a("div",{class:["rv-carousel__inner--"+t.sizing]},[t.allowRotation?a("button",{staticClass:"rv-carousel__btn rv-carousel__btn--pause bg-primary hover:bg-accent-9 focus:bg-accent-9 focus-b",attrs:{"aria-label":t.rotating?t.stop:t.start,"aria-controls":"rvCarousel-items"},on:{click:function(e){t.rotate=!t.rotate,t.rotating=!t.rotating},focus:function(e){return t.handleRotation(!1)},blur:function(e){return t.handleRotation(!!t.rotating)}}},[a("IconBase",{staticClass:"rotate-180",attrs:{icon:t.rotating?"PauseIcon":"BackIcon",color:"white",size:"1.5rem"}})],1):t._e(),t.buttons?a("ul",[a("li",[a("button",{staticClass:"rv-carousel__btn rv-carousel__btn--previous md:bg-primary pr-1 py-2 focus-b",attrs:{"aria-label":"Previous Slide","aria-controls":"rvCarousel-items"},on:{click:function(e){return t.handlePrevNext("prev")},focus:function(e){return t.handleRotation(!1)},blur:function(e){return t.handleRotation(!!t.rotating)}}},[a("svg",{class:"h-full w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"32",viewBox:"0 0 17 32","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{fill:"#fff",d:"M16.614 31.748l.509-.509a.86.86 0 000-1.22L3.1 16.004 17.123 1.982a.86.86 0 000-1.22l-.509-.509a.86.86 0 00-1.22 0L.252 15.387a.86.86 0 000 1.22l15.142 15.134a.853.853 0 001.219.007z"}})])])]),a("li",[a("button",{staticClass:"rv-carousel__btn rv-carousel__btn--next md:bg-primary pl-1 py-2 focus-b",attrs:{"aria-label":"Next Slide","aria-controls":"rvCarousel-items"},on:{click:function(e){return t.handlePrevNext("next")},focus:function(e){return t.handleRotation(!1)},blur:function(e){return t.handleRotation(!!t.rotating)}}},[a("svg",{class:"h-full w-full rotate-180",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"32",viewBox:"0 0 17 32","svg-inline":"",role:"presentation",focusable:"false",tabindex:"-1"}},[a("path",{attrs:{fill:"#fff",d:"M16.614 31.748l.509-.509a.86.86 0 000-1.22L3.1 16.004 17.123 1.982a.86.86 0 000-1.22l-.509-.509a.86.86 0 00-1.22 0L.252 15.387a.86.86 0 000 1.22l15.142 15.134a.853.853 0 001.219.007z"}})])])])]):t._e(),t.buttons?t._e():a("ul",{staticClass:"rv-carousel__btn-list"},t._l(t.gallery,(function(e,s){return a("li",{key:e.id+"-"+e.id},[a("button",{staticClass:"p-3 rounded-full focus-a group",attrs:{"aria-label":e.title},on:{click:function(e){t.currentIndex=s,t.handleLazyLoad()}}},[a("span",{staticClass:"block h-2 w-2 rounded-full border border-white group-hover:bg-secondary group-focus:bg-secondary",class:[t.currentIndex===s?"bg-primary":"bg-tertiary"]})])])})),0),a("div",{ref:"RvCarouselItems",staticClass:"rv-carousel__items",attrs:{id:"rvCarousel-items","aria-live":t.rotate?"off":"polite"}},[a("TransitionGroup",{attrs:{name:"rv-carousel",mode:"in-out"}},t._l(t.gallery,(function(e,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===s,expression:"currentIndex === i"}],key:""+e.id,staticClass:"rv-carousel__item",attrs:{role:"group","aria-roledescription":"slide"}},[a("img",{class:["rv-carousel__image--"+t.sizing],attrs:{src:t.lazyLoad.includes(s)?e.sizes.large:"",alt:"Gallery item "+(s+1)+" of "+t.gallery.length+", "+e.alt}}),t.titles?a("div",{staticClass:"rv-carousel__info bg-primary-95 text-white font-bold"},[a("h3",{staticClass:"rv-carousel__title"},[a("span",{staticClass:"rv-carousel__count",attrs:{"aria-hidden":"true"}},[t._v(" "+t._s(t.currentIndex+1)+"/"+t._s(t.gallery.length)+" ")]),t._v(" "+t._s(e.title)+" ")])]):t._e()])})),0)],1)])])},i=[],r=(a("2532"),a("0de6")),n={name:"RvCarousel",components:{IconBase:r["a"]},props:{arialabel:{type:String,default:"Gallery"},post:{type:Object,default:()=>{}},titles:{type:Boolean,default:!0},buttons:{type:Boolean,default:!0},sizing:{type:String,default:"scale"},allowRotation:{type:Boolean,default:!1}},data:()=>({currentIndex:0,rotate:!1,rotating:!1,interval:null,stop:"Stop automatic slide show",start:"Start automatic slideshow",touchstartX:0,touchendX:0,isTouch:!1,lazyLoad:[0]}),computed:{swipeZone(){return this.$refs.RvCarouselItems},gallery(){return this.post.gallery}},watch:{rotate:{immediate:!0,handler(t){t?this.interval=setInterval(()=>{this.currentIndex=this.currentIndex+1<this.gallery.length?this.currentIndex+1:0,this.handleLazyLoad()},3e3):clearInterval(this.interval)}}},mounted(){this.addListeners(),this.allowRotation&&(this.rotate=!0,this.rotating=!0)},beforeDestroy(){window.removeEventListener("keyup",this.handleArrowKeys),window.removeEventListener("touchstart",this.handleTouch)},methods:{handlePrevNext(t){const e=this.gallery.length,a=this.currentIndex;switch(this.isTouch&&(this.rotate=!1,this.rotating=!1),t){case"next":this.currentIndex=(a+1)%e;break;case"prev":this.currentIndex=0===a&&e-1||a-1;break;default:this.currentIndex=a}this.handleLazyLoad()},handleArrowKeys(){switch(event.keyCode){case 39:this.handlePrevNext("next");break;case 37:this.handlePrevNext("prev");break;default:}},handleRotation(t){this.isTouch||(this.rotate=t)},addListeners(){window.addEventListener("keyup",this.handleArrowKeys),window.addEventListener("touchstart",this.handleTouch),this.swipeZone.addEventListener("touchstart",t=>{this.touchstartX=t.changedTouches[0].screenX},!1),this.swipeZone.addEventListener("touchend",t=>{this.touchendX=t.changedTouches[0].screenX,this.handleSwipe()},!1)},handleTouch(){window.removeEventListener("touchstart",this.handleTouch),this.$refs.RvCarousel.classList.remove("no-touch"),this.isTouch=!0},handleSwipe(){this.isTouch&&(this.rotate=!1,this.rotating=!1),this.touchendX<this.touchstartX&&this.handlePrevNext("prev"),this.touchendX>this.touchstartX&&this.handlePrevNext("next")},handleLazyLoad(){this.lazyLoad.includes(this.currentIndex)||this.lazyLoad.push(this.currentIndex)}}},o=n,l=(a("7d8a"),a("2877")),c=Object(l["a"])(o,s,i,!1,null,null,null);e["a"]=c.exports},"3e3e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{class:[t.isSpot?"p-4":"lg:pt-7vw pb-8 h-full w-full"]},[t.image?a("div",{staticClass:"w-full h-64 bg-full mb-8 bg-white-30",style:{backgroundImage:"url('"+t.image+"')"},attrs:{role:"img","aria-label":"image.alt"}}):t._e(),a("div",{staticClass:"tiny-mce text-white",class:[t.isSpot?"":"px-5vw lg:px-0"],domProps:{innerHTML:t._s(t.post.body)}})])},i=[],r=a("5530"),n=a("2f62"),o={name:"Article",props:{post:{type:Object,default:()=>{}},isSpot:{type:Boolean,default:!1}},computed:Object(r["a"])({},Object(n["c"])(["touch","mobile"]),{},Object(n["b"])([]),{image(){const t=this.post.image;return t&&this.mobile?t.sizes.medium:!!t&&t.sizes.large}})},l=o,c=a("2877"),u=Object(c["a"])(l,s,i,!1,null,null,null);e["a"]=u.exports},5357:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("RouterLink",{staticClass:"btn-back inline-flex items-center focus-a",attrs:{to:t.back,"aria-label":t.aria,"data-gtm-back-button":""}},[a("IconBase",{attrs:{icon:t.icon,color:t.iconcolor,size:t.iconsize}}),t.text?a("span",{staticClass:"ml-2",class:"text-"+t.textcolor+" text-"+t.textsize},[t._v(" "+t._s(t.text)+" ")]):t._e()],1)},i=[],r=a("5530"),n=a("2f62"),o=a("0de6"),l={name:"BtnBack",components:{IconBase:o["a"]},props:{icon:{type:String,default:""},iconsize:{type:String,default:"1.5rem"},iconcolor:{type:String,default:"white"},text:{type:String,default:""},textsize:{type:String,default:"base"},textcolor:{type:String,default:"black"},aria:{type:String,default:"Back"}},computed:Object(r["a"])({},Object(n["c"])(["touch","mobile"]),{},Object(n["b"])(["post"]),{back(){var t;return"home"===this.$route.meta.back&&"subject"===(null===(t=this.post)||void 0===t?void 0:t.type)?{name:"campus-category",params:{category_id:"subjects"}}:{name:this.$route.meta.back}}})},c=l,u=a("2877"),d=Object(u["a"])(c,s,i,!1,null,null,null);e["a"]=d.exports},"5b6d":function(t,e,a){"use strict";var s=a("72cc"),i=a.n(s);i.a},"72cc":function(t,e,a){},"7d8a":function(t,e,a){"use strict";var s=a("df77"),i=a.n(s);i.a},"85e1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"h-full w-full",class:[t.isSpot?"":"lg:pt-7vw"],attrs:{"aria-label":"Video player"}},[a("div",{staticClass:"rv-video__outer"},[t.youTubeIsBlocked?t.internationalFallback?a("div",{staticClass:"rv-video__inner"},[a("iframe",{attrs:{src:t.internationalFallback,width:"100%",height:"100%",frameborder:"0",allowfullscreen:""}})]):t._e():a("youtube",{ref:"youtube",staticClass:"rv-video__inner",attrs:{"video-id":t.youTubeId(t.video.src),"player-vars":t.playerVars,width:"100%",height:"100%"},on:{playing:t.handlePlay,ended:t.handleStop,paused:t.handleStop}})],1),t.post.transcription||t.post.video.audio_described?a("ul",{staticClass:"lg:flex lg:justify-between mb-2 lg:px-1"},[t.post.transcription?a("li",[a("button",{staticClass:"ml-2vw lg:ml-0 mt-2 focus-a text-white underline",attrs:{"aria-controls":"video-transcription","data-gtm-transcription":"transcription","aria-expanded":t.transcription},on:{click:function(e){t.transcription=!t.transcription}}},[t._v(" "+t._s(t.transcription?"Hide transcription":"Show transcription")+" ")])]):t._e(),t.post.video.audio_described&&!t.youTubeIsBlocked?a("li",[a("button",{staticClass:"ml-2vw lg:ml-0 mt-2 focus-a text-white underline",attrs:{"data-gtm-audio-described":"ytIsAudioDescribed"},on:{click:function(e){return t.$store.commit("toggleAudioDescription")}}},[t._v(" "+t._s(t.video.text)+" ")])]):t._e()]):t._e(),a("Expand",{directives:[{name:"show",rawName:"v-show",value:t.transcription,expression:"transcription"}]},[a("div",{staticClass:"tiny-mce mb-6 p-x lg:mx-0 p-4 lg:px-0 overflow-auto",attrs:{id:"video-transcription"},domProps:{innerHTML:t._s(t.post.transcription)}})])],1)},i=[],r=(a("e6cf"),a("466d"),a("5319"),a("1276"),a("5530")),n=a("2f62"),o=a("c0ab"),l={name:"Video",components:{Expand:o["a"]},props:{post:{type:Object,default:()=>{}},isSpot:{type:Boolean,default:!1}},data:()=>({playerVars:{rel:0,modestbranding:1,playsinline:1,origin:window.location.hostname},transcription:!1,youTubeIsBlocked:!1}),computed:Object(r["a"])({},Object(n["c"])(["ytIsAudioDescribed","browser"]),{player(){return this.$refs.youtube.player},video(){const t=this.post.video.audio_described&&this.ytIsAudioDescribed?this.post.video.audio_described:this.post.video.non_described,e=this.post.video.audio_described&&this.ytIsAudioDescribed?"Watch non audio described version":this.post.video.audio_described?"Watch audio described version":"";return{src:t,text:e}},internationalFallback(){const t=this.post.video.international_fallback,e=t.match(/(https?:\/\/[^ ]*)/),a=e&&e[0].replace(/"$/,"");return a}}),async created(){try{return await fetch("https://www.youtube.com/",{mode:"no-cors"}),this.youTubeIsBlocked=!1}catch(t){return"IE"!==this.browser?this.youTubeIsBlocked=!0:this.youTubeIsBlocked=!1}},methods:{playVideo(){this.player.playVideo()},stopVideo(){this.player.stopVideo()},handlePlay(){this.$store.commit("toggleYouTubeState",!0)},handleStop(){this.$store.commit("toggleYouTubeState",!1)},youTubeId(t){const e=t.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);return void 0!==e[2]?e[2].split(/[^0-9a-z_\-]/i)[0]:e[0]}}},c=l,u=(a("5b6d"),a("2877")),d=Object(u["a"])(c,s,i,!1,null,null,null);e["default"]=d.exports},c0ab:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{on:{enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave}},[a("div",{ref:"container",staticClass:"collapsible-container",style:t.style},[t._t("default")],2)])},i=[],r=(a("466d"),{props:{duration:{type:Number,default:.3,validator:t=>t>=0},delay:{type:Number,default:0,validator:t=>t>=0},easing:{type:String,default:"ease",validator:t=>{const e=["linear","ease","ease-in","ease-out","ease-in-out","step-start","step-end","initial","inherit"];return!!e.includes(t)||(null!==t.match(/^cubic-bezier\([\d.]+(,\s?[\d.]+){3}\)$/)||null!==t.match(/^steps\(\d+,\s?(start|end)\)$/))}}},computed:{style(){return`{\n        height: 0;\n        overflow: hidden;\n        transition-property: height;\n        transition-duration: ${this.duration}s;\n        transition-delay: ${this.delay}s;\n        transition-timing-function: ${this.easing};\n      }`}},methods:{enter(){this.$refs.container.style.height="0",this.$refs.container.style.height=this.$refs.container.scrollHeight+"px"},afterEnter(){this.$refs.container.style.height=null},beforeLeave(){this.$refs.container.style.height=this.$refs.container.scrollHeight+"px"},leave(){this.$refs.container.scrollHeight;this.$refs.container.style.height="0"}}}),n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,null,null);e["a"]=l.exports},df77:function(t,e,a){}}]);
//# sourceMappingURL=media~spot.40ecc453.js.map