!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/hide/video/related-videos"]=t():e["style/hide/video/related-videos"]=t()}(self,(function(){return function(){var e,t,n={632:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,"#recom_module,\n#reco_list,\n.bilibili-player-ending-panel-box-videos,\n.r-con .rcmd-list {\n  display: none !important;\n}\n\n.bilibili-player-ending-panel-box-functions .bilibili-player-upinfo-spans {\n  position: static !important;\n}\n\n.bilibili-player-ending-panel-box {\n  display: flex !important;\n  justify-content: center !important;\n  flex-direction: column !important;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var u=[].concat(e[a]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},32:function(e,t,n){var o=n(632);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var c={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){c[e]=function(){return n[e]}}));return c.default=function(){return n},r.d(i,c),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return t}});var e=coreApis.utils.urls;const t={name:"hideRelatedVideos",displayName:"隐藏视频推荐",entry:none,instantStyles:[{name:"hideRelatedVideos",style:()=>Promise.resolve().then(r.t.bind(r,32,23))}],tags:[componentsTags.style,componentsTags.video],description:{"zh-CN":"隐藏番剧和视频页面右侧的推荐视频列表. 注意: 如果你想关闭 b 站的自动连播 (自动播放下一个推荐视频) 功能, 需要先取消隐藏视频推荐才能看到开关."},urlInclude:e.videoAndBangumiUrls,commitHash:"28933d6c6fa35f519fa718fdf67c109e07a3c7da",coreVersion:"2.1.7"}}(),i=i.component}()}));